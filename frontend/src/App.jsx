import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ChatInterface from './components/ChatInterface'
import DailyTips from './components/DailyTips'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('hero') // 'hero' or 'chat'
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-love-lavender via-white to-love-peach">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          onStartChat={() => setCurrentView('chat')}
        />
        
        {currentView === 'hero' ? (
          <>
            <Hero onStartChat={() => setCurrentView('chat')} />
            <DailyTips />
          </>
        ) : (
          <ChatInterface onBackToHome={() => setCurrentView('hero')} />
        )}
        
        <Footer />
      </div>
    </div>
  )
}

export default App 