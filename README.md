# 💖 LoveGuru - Your AI Love Companion

A beautiful, full-stack web application that provides sweet, supportive love advice through AI-powered chat. Built with React frontend and Node.js backend, integrated with Google's Gemini AI.

## ✨ Features

- **AI-Powered Love Advice**: Get personalized, sweet, and supportive relationship guidance
- **Beautiful UI**: Soft pastel colors, love-themed design with hearts and animations
- **Real-time Chat**: Interactive chat interface with loading animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes
- **Daily Love Tips**: Curated relationship wisdom
- **Secure API**: All AI calls handled securely through backend

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite
- **TailwindCSS** for styling
- **Lucide React** for icons
- **Google Fonts** (Lora & Poppins)

### Backend
- **Node.js** with Express
- **Google Generative AI** (Gemini Flash 2.5)
- **CORS** enabled
- **Environment variables** for security

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Backend Setup
```bash
cd backend
npm install
```

Create a `config.env` file in the backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### Frontend Setup
```bash
cd frontend
npm install
```

## 🏃‍♂️ Running Locally

### Start Backend
```bash
cd backend
npm start
```
Backend will run on http://localhost:5000

### Start Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:3000

## 🌐 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production
Set these in your deployment platform:
- `GEMINI_API_KEY`: Your Google Gemini API key

## 📱 Usage

1. Open the application in your browser
2. Click "Start Chatting" to begin
3. Type your relationship questions or concerns
4. Receive sweet, supportive advice from LoveGuru AI
5. Browse daily love tips for relationship wisdom

## 🔧 API Endpoints

- `POST /love-advice`: Send a message and receive AI advice
- `GET /health`: Health check endpoint

## 🎨 Customization

- Colors: Modify the love-themed colors in `tailwind.config.js`
- Fonts: Change fonts in `index.html` and `index.css`
- Prompts: Customize AI prompts in `backend/server.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 💝 Support

If you love LoveGuru, please give it a ⭐ on GitHub!

---

Made with 💖 for love and relationships 