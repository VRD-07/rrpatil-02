import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';

const SYSTEM_CONTEXT = `
You are the official assistant for R.R. Patil Coaching Classes, Sai City, Kopargaon. Answer ONLY using the information below. If asked something not covered here, politely say you'll connect them with the institute directly via WhatsApp or phone, and do NOT guess or invent details — especially fees, timings, or results, since wrong information here would break trust.

PROGRAMS:
- 6th-10th Regular Tuition
- 8th/9th/10th Foundation Batch
- 11th-12th Regular (Board) Batch: Morning, 6:15 AM - 11:00 AM, for SSGM & KJS College students
- 11th-12th Competitive Batch (JEE/NEET/CET, external students): Afternoon, 3:00 PM - 7:00 PM, for External & Sanjivani College students. Externals also get full Biology coverage via the morning batch, included at no extra fee.
- AI-ML Bootcamp for engineering students (new, flexible timing, contact for next cohort) + placement assistance

STUDY MATERIAL: In-house authored 10th Foundation Book; 7 (PCM) or 9 (PCMB) subject books for 11th/12th, including a full 4-color Biology book; 1 PYQ book covering all subjects with 50 questions per chapter.

TESTING: 18,500+ MCQs on our own testing platform (website + app). Weekly: 1 domain/app test + 1 written theory test, every student, every week.

FACILITIES: Study room (included in fees), computer lab (used by AI-ML and regular students alike), CCTV with audio monitoring across campus, uniform included in fees.

CONTACT: WhatsApp/Call: +91 8275280028. Address: Sai City, Kopargaon.

Keep answers short (2-4 sentences), warm, and in plain English unless the user writes in Marathi/Hindi, in which case respond in that language naturally. Always end an answer about fees or admission specifics by suggesting they confirm exact figures via WhatsApp or call, since those can change and you should never quote a fee number that isn't explicitly provided above.
`;

const FALLBACK_ERROR_MESSAGE =
  "I'm sorry, I'm having trouble connecting right now. Please check your internet connection and try again. For urgent inquiries, feel free to contact us on WhatsApp (+91 8275280028).";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am R. R. Patil Academy’s AI Assistant. How can I help you with batch timings, courses, or study materials today?',
    },
  ]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of message list
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const quickQuestions = [
    'Batch timings?',
    'Is admission open?',
    'What courses do you offer?',
    'Study material & books?',
  ];

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    // Add user message to state
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    const updatedHistory = [
      ...chatHistory,
      { role: 'user', content: query },
    ];

    try {
      // 1. Try serverless backend endpoint /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: chatHistory,
        }),
      });

      const responseText = await response.text();
      let data = null;
      try {
        data = responseText ? JSON.parse(responseText) : null;
      } catch (err) {
        data = null;
      }

      // If serverless endpoint succeeded with JSON reply
      if (response.ok && data?.reply) {
        setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
        setChatHistory([
          ...updatedHistory,
          { role: 'assistant', content: data.reply },
        ]);
        setIsLoading(false);
        return;
      }

      // If endpoint returned error
      if (data?.error) {
        console.error('[ChatWidget Error]:', data.error);
        setMessages([
          ...newMessages,
          { sender: 'bot', text: FALLBACK_ERROR_MESSAGE },
        ]);
        setIsLoading(false);
        return;
      }

      // 2. Direct OpenRouter fetch for local development if VITE_OPENROUTER_API_KEY is present
      const localKey = import.meta.env?.VITE_OPENROUTER_API_KEY;
      if (localKey) {
        const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localKey}`,
            'HTTP-Referer': 'http://localhost:5173',
            'X-Title': 'RR Patil Local Dev Chatbot',
          },
          body: JSON.stringify({
            model: 'google/gemma-4-26b-a4b-it:free',
            temperature: 0.3,
            messages: [
              { role: 'system', content: SYSTEM_CONTEXT },
              ...chatHistory,
              { role: 'user', content: query },
            ],
          }),
        });

        const localData = await openRouterRes.json();
        const localReply = localData?.choices?.[0]?.message?.content;

        if (openRouterRes.ok && localReply) {
          setMessages([...newMessages, { sender: 'bot', text: localReply }]);
          setChatHistory([
            ...updatedHistory,
            { role: 'assistant', content: localReply },
          ]);
          setIsLoading(false);
          return;
        }

        if (localData?.error) {
          console.error('[ChatWidget Local OpenRouter Error]:', localData.error);
          setMessages([
            ...newMessages,
            { sender: 'bot', text: FALLBACK_ERROR_MESSAGE },
          ]);
          setIsLoading(false);
          return;
        }
      }

      setMessages([
        ...newMessages,
        {
          sender: 'bot',
          text: FALLBACK_ERROR_MESSAGE,
        },
      ]);
    } catch (err) {
      console.error('[ChatWidget Network Error]:', err);
      setMessages([
        ...newMessages,
        {
          sender: 'bot',
          text: FALLBACK_ERROR_MESSAGE,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0F3D2E] text-[#FAF7F0] border-2 border-[#B08D57] shadow-lg hover:bg-[#0A2A20] active:scale-95 transition-all duration-200 group cursor-pointer"
          aria-label="Toggle AI Assistant Chat"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-[#B08D57]" />
          ) : (
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#B08D57] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                Ask AI Assistant
              </span>
            </div>
          )}
          {/* Notification Pulsing Dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#FAF7F0] animate-pulse" />
          )}
        </button>
      </div>

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[520px] max-h-[82vh] rounded-xl bg-[#FAF7F0] border-2 border-[#B08D57]/50 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-[#0F3D2E] text-[#FAF7F0] border-b border-[#B08D57]/40 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0A2A20] border border-[#B08D57]/50 flex items-center justify-center text-[#B08D57]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-editorial text-sm font-bold text-[#FAF7F0]">
                    R. R. Patil AI Assistant
                  </span>
                  <Sparkles className="w-3 h-3 text-[#B08D57]" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#FAF7F0]/70 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>Instant Response</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#FAF7F0]/70 hover:text-[#FAF7F0] rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation History Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF7F0]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0F3D2E] text-[#FAF7F0] rounded-br-none shadow-xs'
                      : 'bg-white border border-[#E4DCC8] text-[#14110F] rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-[#14110F]/50 mt-1 px-1">
                  {msg.sender === 'user' ? 'You' : 'AI Assistant'}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-lg bg-white border border-[#E4DCC8] text-xs text-[#14110F]/70 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Questions */}
          <div className="px-3 py-2 bg-[#F0ECE1] border-t border-[#E4DCC8] flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded bg-white border border-[#E4DCC8] text-[10px] font-semibold text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-[#FAF7F0] transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form Area */}
          <div className="p-3 bg-white border-t border-[#E4DCC8] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about batches, timings, books..."
                className="flex-1 px-3 py-2 text-xs rounded-lg bg-[#FAF7F0] border border-[#E4DCC8] text-[#14110F] placeholder-[#14110F]/50 focus:outline-none focus:border-[#0F3D2E]"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] hover:bg-[#0A2A20] disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-[#B08D57]" />
              </button>
            </form>

            {/* Disclaimer */}
            <div className="mt-2 text-[9.5px] text-[#14110F]/60 text-center leading-tight">
              For exact fees and admission details, please confirm via{' '}
              <a
                href="https://wa.me/918275280028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3D2E] font-bold underline hover:text-[#B08D57]"
              >
                WhatsApp (+91 8275280028)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
