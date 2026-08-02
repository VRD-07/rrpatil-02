declare const process: any;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message parameter is required' });
  }

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

  try {
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply: "OPENROUTER_API_KEY is not configured. Please add OPENROUTER_API_KEY in Vercel Environment Variables!"
      });
    }

    // Format OpenAI-style history: { role: 'user' | 'assistant', content: string }
    const formattedHistory = Array.isArray(history)
      ? history
          .filter((h: any) => h && (h.role === 'user' || h.role === 'assistant'))
          .map((h: any) => ({
            role: h.role,
            content: h.content || '',
          }))
      : [];

    const messages = [
      { role: 'system', content: SYSTEM_CONTEXT },
      ...formattedHistory,
      { role: 'user', content: message },
    ];

    // List of reliable free models on OpenRouter
    const freeModels = [
      'meta-llama/llama-3.1-8b-instruct:free',
      'google/gemma-2-9b-it:free',
      'qwen/qwen-2.5-7b-instruct:free',
    ];

    let reply: string | null = null;
    let lastError: string | null = null;

    for (const modelName of freeModels) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://rr-patil-coaching.vercel.app',
            'X-Title': 'RR Patil Coaching Classes Chatbot',
          },
          body: JSON.stringify({
            model: modelName,
            temperature: 0.3,
            messages: messages,
          }),
        });

        const data: any = await response.json();

        if (response.ok && data?.choices?.[0]?.message?.content) {
          reply = data.choices[0].message.content;
          break;
        }

        if (data?.error) {
          lastError = `[${modelName}]: ${data.error.message || response.statusText}`;
        }
      } catch (err: any) {
        lastError = err?.message || 'Network fetch error';
      }
    }

    if (reply) {
      return res.status(200).json({ reply });
    }

    if (lastError) {
      console.warn('OpenRouter API rate limit / error:', lastError);
    }

    return res.status(200).json({
      reply: "Sorry, I couldn't process that — please reach out via WhatsApp (+91 8275280028) for a quick answer!"
    });
  } catch (err: any) {
    console.error('Chat function error:', err);
    return res.status(200).json({
      reply: "Something went wrong. Please connect with us directly via WhatsApp (+91 8275280028)."
    });
  }
}
