import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

interface OpenAIHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatWidget: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'Hello! I am R. R. Patil Academy’s AI Assistant. How can I help you with batch timings, courses, or study materials today?',
    },
  ]);
  const [chatHistory, setChatHistory] = useState<OpenAIHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    // Add user message to state
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    // Build history payload formatted as OpenAI-style messages for OpenRouter API
    const updatedHistory: OpenAIHistoryItem[] = [
      ...chatHistory,
      { role: 'user', content: query },
    ];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: chatHistory,
        }),
      });

      const data = await response.json();
      const replyText =
        data?.reply ||
        'Sorry, I couldn’t process that request right now — please reach out via WhatsApp for an immediate response!';

      // Append bot reply to messages & update history
      setMessages([...newMessages, { sender: 'bot', text: replyText }]);
      setChatHistory([
        ...updatedHistory,
        { role: 'assistant', content: replyText },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          sender: 'bot',
          text: 'Connection issue. Please reach out directly via WhatsApp (+91 8275280028) for instant batch & admission details!',
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
          className="relative inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0F3D2E] text-[#FAF7F0] border-2 border-[#B08D57] shadow-lg hover:bg-[#0A2A20] active:scale-95 transition-all duration-200 group"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95, y: 15 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 15 }
            }
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] h-[520px] max-h-[82vh] rounded-xl bg-[#FAF7F0] border-2 border-[#B08D57]/50 shadow-2xl flex flex-col overflow-hidden"
          >
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
                className="p-1 text-[#FAF7F0]/70 hover:text-[#FAF7F0] rounded hover:bg-white/10 transition-colors"
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

            {/* Quick Suggested Questions Pill Row */}
            <div className="px-3 py-2 bg-[#F0ECE1] border-t border-[#E4DCC8] flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded bg-white border border-[#E4DCC8] text-[10px] font-semibold text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-[#FAF7F0] transition-colors whitespace-nowrap shrink-0 shadow-xs"
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
                  className="p-2 rounded-lg bg-[#0F3D2E] text-[#FAF7F0] hover:bg-[#0A2A20] disabled:opacity-40 transition-colors shrink-0"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
