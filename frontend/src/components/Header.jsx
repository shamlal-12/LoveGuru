import React from 'react'
import { Heart, Moon, Sun, MessageCircle } from 'lucide-react'

const Header = ({ darkMode, toggleDarkMode, onStartChat }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-love-lavender sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-love-rose animate-heartbeat" />
            <span className="text-2xl font-lora font-bold gradient-text">
              LoveGuru
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-love-rose transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-love-rose transition-colors font-medium">
              Contact
            </a>
            <a href="#privacy" className="text-gray-700 hover:text-love-rose transition-colors font-medium">
              Privacy
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-love-lavender hover:bg-love-peach transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-love-rose" />
              ) : (
                <Moon className="h-5 w-5 text-love-rose" />
              )}
            </button>

            {/* Start Chat Button */}
            <button
              onClick={onStartChat}
              className="love-button flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Chatting</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 