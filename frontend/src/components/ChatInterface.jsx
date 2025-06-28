import React, { useState, useRef, useEffect } from 'react'
import { Send, ArrowLeft, Heart, Loader2 } from 'lucide-react'

const ChatInterface = ({ onBackToHome }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm LoveGuru, your AI love companion. 💖 I'm here to provide sweet, supportive advice for all your relationship questions. What's on your heart today?",
      isAI: true,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isAI: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Use environment-based API URL
      const apiUrl = import.meta.env.PROD 
        ? '/api/love-advice' 
        : 'http://localhost:5000/love-advice';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get advice')
      }

      const data = await response.json()
      
      const aiMessage = {
        id: Date.now() + 1,
        text: data.advice,
        isAI: true,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 💕",
        isAI: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-love-lavender p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-love-rose hover:text-love-purple transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-love-rose animate-heartbeat" />
            <span className="text-xl font-lora font-bold gradient-text">LoveGuru Chat</span>
          </div>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-love-lavender/20 to-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`chat-bubble ${message.isAI ? 'ai-bubble' : 'user-bubble'}`}>
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-2 ${message.isAI ? 'text-gray-500' : 'text-pink-100'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="ai-bubble chat-bubble">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-love-rose" />
                <span className="text-sm text-gray-600">LoveGuru is thinking...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-md border-t border-love-lavender p-4">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share your heart with LoveGuru... 💕"
              className="w-full px-4 py-3 border border-love-lavender rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-love-pink focus:border-transparent"
              rows="1"
              disabled={isLoading}
            />
          </div>
          
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="love-button flex items-center justify-center w-12 h-12 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}

export default ChatInterface 