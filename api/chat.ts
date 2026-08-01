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
You are the official AI assistant for R.R. Patil Coaching Classes, Sai City, Kopargaon. Answer ONLY using the information below. If asked something not covered here, politely say you'll connect them with the institute directly via WhatsApp (+918275280028) or phone, and do NOT guess or invent details — especially fees, timings, or results, since wrong information here would break trust.

PROGRAMS:
- 6th-10th Regular Tuition: Comprehensive NCERT & School Board Preparation.
- 8th/9th/10th Foundation Batch: Advanced competitive foundation for NTSE & Olympiads.
- 11th-12th Regular (Board) Batch: Morning, 6:15 AM - 11:00 AM, for SSGM & KJS College students. Dual-teacher parallel lectures.
- 11th-12th Competitive Batch (JEE/NEET/CET, external students): Afternoon, 3:00 PM - 7:00 PM, for External & Sanjivani College students. Externals also get full Biology coverage via the morning batch, included at no extra fee.
- AI-ML Bootcamp for engineering students (new, flexible timing, contact for next cohort) + placement assistance.

STUDY MATERIAL: In-house authored 10th Foundation Book; 7 (PCM) or 9 (PCMB) subject books for 11th/12th, including a full 4-color Biology book; 1 PYQ book covering all subjects with 50 questions per chapter.

TESTING & TRACKING: 18,500+ MCQs on our own testing platform (website + app). Weekly: 1 domain/app test + 1 written theory test, every student, every week with diagnostic analytics.

FACILITIES: Study room (included in fees), computer lab (used by AI-ML and regular students alike), CCTV with audio monitoring across campus, uniform included in fees.

FACULTY: Prof. R. R. Patil (Founder & Director, 20+ Yrs Exp, Head of Physics & Math), Prof. Harshal Belapurkar (Head of Chemistry, Ph.D. IIT Bombay), Prof. Prasad Patil (Head of Math & NEET Biology, M.Sc.).

CONTACT & LOCATION:
- Phone / WhatsApp: +91 8275280028
- Address: Sai City, Kopargaon, Maharashtra.

Keep answers short (2-4 sentences), warm, helpful, and in plain English unless the user writes in Marathi/Hindi, in which case respond in that language naturally. Always end an answer about fees or admission specifics by suggesting they confirm exact figures via WhatsApp or call (+918275280028), since those can change and you should never quote a fee number that isn't explicitly provided above.
`;

  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply: "GEMINI_API_KEY environment variable is not configured. Please add GEMINI_API_KEY in Vercel Environment Variables!"
      });
    }

    // Prepare contents array adhering to strict Gemini user/model turn alternation
    const formattedHistory = Array.isArray(history)
      ? history.filter((h: any) => h.role === 'user' || h.role === 'model')
      : [];

    const payload = {
      system_instruction: {
        parts: [{ text: SYSTEM_CONTEXT }],
      },
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: message }] },
      ],
    };

    // Try gemini-1.5-flash endpoint (universally supported across all Google AI Studio keys)
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    let data: any = await response.json();

    // If 1.5-flash returned error, attempt fallback to gemini-2.0-flash
    if (!response.ok || data.error) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      data = await response.json();
    }

    if (data?.error) {
      console.error('Gemini API Error:', data.error);
      return res.status(200).json({
        reply: `API Notice: ${data.error.message || 'Unable to connect to Gemini API'}. Please confirm via WhatsApp (+918275280028).`
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return res.status(200).json({
        reply: "I couldn't process that question — please reach out directly via WhatsApp (+918275280028) for quick assistance!"
      });
    }

    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error('Chat endpoint error:', err);
    return res.status(200).json({ 
      reply: "Please reach out directly via WhatsApp or call +918275280028 for quick admission & batch details!" 
    });
  }
}
