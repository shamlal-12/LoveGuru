const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'GEMINI_API_KEY not set' });
      return;
    }

    // Parse body (Vercel provides req.body for JSON)
    const { message } = req.body || {};
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `You are LoveGuru – an AI love advisor. Speak sweetly, kindly, and lovingly. Give supportive advice for: ${message}`;
    const result = await model.generateContent(prompt);
    const advice = result.response.text();
    res.status(200).json({ advice });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate love advice', message: error.message });
  }
}; 