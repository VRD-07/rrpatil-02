import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles } from 'lucide-react';

const SYSTEM_CONTEXT = `
You are the official assistant for R.R. Patil Coaching Classes, Sai City, Kopargaon. Answer ONLY using the information below. If asked something not covered here, politely say you'll connect them with the institute directly via WhatsApp or phone, and do NOT guess or invent details — especially fees, timings, or results, since wrong information here would break trust.

ADMISSIONS:
- Admissions are currently OPEN for all batches (6th–10th Regular/Foundation, 11th–12th Board & Competitive JEE/NEET/CET, and AI-ML Bootcamp).
- Direct admission inquiries and campus visits are welcome at Sai City, Kopargaon.
- For fee structure, discounts, and enrollment details, please contact directly on WhatsApp or Call (+91 8275280028).

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

function getSmartLocalResponse(query) {
  const q = query.toLowerCase().trim();

  // Greetings
  if (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.startsWith('hi ') ||
    q.startsWith('hello ') ||
    q.startsWith('hey ') ||
    q.includes('namaste') ||
    q.includes('नमस्कार')
  ) {
    return 'Hello! Welcome to R. R. Patil Coaching Classes. How can I assist you today? You can ask about our 6th–12th batches, JEE/NEET competitive coaching, study material, or admissions!';
  }

  // Admission inquiries
  if (
    q.includes('admission') ||
    q.includes('admissions') ||
    q.includes('enroll') ||
    q.includes('joining') ||
    q.includes('registration') ||
    q.includes('प्रवेश') ||
    q.includes('दाखला')
  ) {
    return 'Admissions are currently OPEN for all batches (6th–10th Regular & Foundation, 11th–12th Board & Competitive JEE/NEET/CET, and AI-ML Bootcamp)! For exact fee structures, scholarships, and immediate enrollment, please contact us directly on WhatsApp or call +91 8275280028 or visit our Sai City, Kopargaon campus.';
  }

  // Batch timings & schedules
  if (
    q.includes('timing') ||
    q.includes('timings') ||
    q.includes('batch') ||
    q.includes('time') ||
    q.includes('schedule') ||
    q.includes('वेळ') ||
    q.includes('बॅच')
  ) {
    return 'Our 11th-12th Regular (Board) Batch runs in the morning from 6:15 AM to 11:00 AM (for SSGM & KJS College students). The Competitive Batch (JEE/NEET/CET) runs in the afternoon from 3:00 PM to 7:00 PM (for External & Sanjivani students with full morning Biology coverage included). We also run 6th–10th Regular & Foundation batches. Contact +91 8275280028 for the latest timetable.';
  }

  // Courses & Programs
  if (
    q.includes('course') ||
    q.includes('courses') ||
    q.includes('program') ||
    q.includes('offer') ||
    q.includes('neet') ||
    q.includes('jee') ||
    q.includes('cet') ||
    q.includes('bootcamp') ||
    q.includes('aiml') ||
    q.includes('ai-ml') ||
    q.includes('अभ्यासक्रम')
  ) {
    return 'We offer comprehensive coaching for: 6th–10th Regular Tuition, 8th–10th Foundation Batch, 11th–12th Regular Board Batches, 11th–12th Competitive Batches (JEE/NEET/MHT-CET), and our hands-on AI-ML Bootcamp for engineering students. Feel free to call or WhatsApp +91 8275280028 for full course syllabi.';
  }

  // Study Material & Books & Testing
  if (
    q.includes('material') ||
    q.includes('book') ||
    q.includes('books') ||
    q.includes('notes') ||
    q.includes('pyq') ||
    q.includes('test') ||
    q.includes('mcq') ||
    q.includes('पुस्तके')
  ) {
    return 'Students receive in-house authored 10th Foundation Books, 7 (PCM) or 9 (PCMB) subject books for 11th/12th including a 4-color Biology book, and a PYQ book with 50 questions per chapter, plus access to 18,500+ MCQs on our testing platform.';
  }

  // Facilities & Infrastructure
  if (
    q.includes('facility') ||
    q.includes('facilities') ||
    q.includes('lab') ||
    q.includes('study room') ||
    q.includes('cctv') ||
    q.includes('uniform')
  ) {
    return 'Our campus features dedicated study rooms (included in fees), a modern computer lab for regular & AI-ML students, full CCTV with audio monitoring for student safety, and uniforms provided with enrollment.';
  }

  // Faculty / Teachers
  if (
    q.includes('faculty') ||
    q.includes('teacher') ||
    q.includes('teachers') ||
    q.includes('sir') ||
    q.includes('patil') ||
    q.includes('mentor')
  ) {
    return 'Our institute is led by experienced faculty providing specialized coaching for Board, JEE, NEET, and MHT-CET exams with individual attention, small batch sizes, and daily doubt-clearing sessions.';
  }

  // Fees
  if (q.includes('fee') || q.includes('fees') || q.includes('cost') || q.includes('फी')) {
    return 'Our fees include study room access, uniform, books, and testing platform access. For exact fee details and installment plans, please contact us on WhatsApp (+91 8275280028).';
  }

  // Contact / Address / Location
  if (
    q.includes('address') ||
    q.includes('contact') ||
    q.includes('location') ||
    q.includes('where') ||
    q.includes('phone') ||
    q.includes('number') ||
    q.includes('call') ||
    q.includes('whatsapp') ||
    q.includes('पत्ता') ||
    q.includes('संपर्क')
  ) {
    return 'R. R. Patil Coaching Classes is located at Sai City, Kopargaon. You can call or WhatsApp us anytime at +91 8275280028.';
  }

  // General helpful fallback
  return 'Thank you for reaching out to R. R. Patil Coaching Classes! We offer 6th–12th State Board, JEE, NEET, CET, and AI-ML programs. For detailed queries or personal counseling, please contact us directly on WhatsApp or Call at +91 8275280028 or visit our Sai City, Kopargaon campus.';
}

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

    let replyFound = null;

    // 1. Try backend serverless endpoint /api/chat
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: chatHistory,
        }),
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        if (data?.reply) {
          replyFound = data.reply;
        }
      }
    } catch (apiErr) {
      console.warn('[ChatWidget /api/chat notice]:', apiErr);
    }

    // 2. If /api/chat was not available or didn't return a reply, try direct OpenRouter with local key
    if (!replyFound) {
      const localKey = (
        import.meta.env?.VITE_OPENROUTER_API_KEY ||
        import.meta.env?.OPENROUTER_API_KEY ||
        ''
      ).trim();

      if (localKey) {
        const candidateModels = [
          'openrouter/free',
          'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
          'nvidia/nemotron-3.5-lightning:free',
          'nvidia/nemotron-3-ultra-550b-a55b:free',
          'google/gemma-4-31b-it:free',
          'google/gemma-4-26b-a4b-it:free',
        ];

        for (const modelName of candidateModels) {
          try {
            const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localKey}`,
                'HTTP-Referer': 'https://rr-patil-coaching.vercel.app',
                'X-Title': 'RR Patil Coaching Classes Chatbot',
              },
              body: JSON.stringify({
                model: modelName,
                temperature: 0.3,
                messages: [
                  { role: 'system', content: SYSTEM_CONTEXT },
                  ...chatHistory,
                  { role: 'user', content: query },
                ],
              }),
            });

            if (openRouterRes.ok) {
              const localData = await openRouterRes.json().catch(() => null);
              const text = localData?.choices?.[0]?.message?.content;
              if (text) {
                replyFound = text;
                break;
              }
            }
          } catch (modelErr) {
            console.warn(`[ChatWidget direct ${modelName} notice]:`, modelErr);
          }
        }
      }
    }

    // 3. Smart offline knowledge fallback for academy inquiries if network/AI is unavailable
    if (!replyFound) {
      const smartResponse = getSmartLocalResponse(query);
      if (smartResponse) {
        replyFound = smartResponse;
      }
    }

    // 4. Update messages and history
    const finalReply = replyFound || FALLBACK_ERROR_MESSAGE;
    setMessages([...newMessages, { sender: 'bot', text: finalReply }]);
    if (replyFound) {
      setChatHistory([
        ...updatedHistory,
        { role: 'assistant', content: replyFound },
      ]);
    }
    setIsLoading(false);
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
