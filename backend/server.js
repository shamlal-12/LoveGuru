const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Debug: Check if API key is loaded
console.log('🔑 API Key loaded:', process.env.GEMINI_API_KEY ? 'Yes' : 'No');
console.log('🔑 API Key length:', process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0);

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Prefer Gemini Flash 2.5 if available, fallback to gemini-1.5-pro
const MODEL_NAME = "gemini-1.5-flash"; // Use "gemini-1.5-pro" if you want the pro model
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// Love advice endpoint
app.post('/love-advice', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('📝 Received message:', message);

    const prompt = `You are LoveGuru – an AI love advisor. Speak sweetly, kindly, and lovingly. Give supportive advice for: ${message}`;
    
    console.log('🤖 Sending to Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text();

    console.log('✅ Received advice from Gemini');
    res.json({ advice });
  } catch (error) {
    console.error('❌ Error generating love advice:', error);
    console.error('❌ Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    res.status(500).json({ 
      error: 'Failed to generate love advice',
      message: error.message,
      details: error.name
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'LoveGuru backend is running! 💖',
    apiKeyLoaded: !!process.env.GEMINI_API_KEY,
    apiKeyLength: process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0
  });
});

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`💖 LoveGuru backend server running on port ${PORT}`);
    console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app; 