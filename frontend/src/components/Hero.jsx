import React from 'react'
import { Heart, Sparkles, ArrowRight } from 'lucide-react'

const Hero = ({ onStartChat }) => {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-love-peach opacity-20 animate-float">
          <Heart className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-20 text-love-coral opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-love-purple opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="h-20 w-20" />
        </div>
        <div className="absolute bottom-40 right-1/3 text-love-pink opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Heart className="h-14 w-14" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-love-rose" />
            <span className="text-love-rose font-semibold text-lg">AI-Powered Love Advice</span>
            <Sparkles className="h-8 w-8 text-love-rose" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-lora font-bold mb-6">
            <span className="gradient-text">Your AI Love</span>
            <br />
            <span className="text-gray-800">Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sweet, supportive, and always there when you need relationship advice. 
            Get personalized love guidance from your caring AI companion.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onStartChat}
            className="love-button flex items-center space-x-2 text-lg px-8 py-4"
          >
            <Heart className="h-6 w-6" />
            <span>Start Chatting</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button className="bg-white border-2 border-love-pink text-love-pink hover:bg-love-pink hover:text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-love-lavender">
            <div className="w-12 h-12 bg-love-pink rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sweet & Caring</h3>
            <p className="text-gray-600">Always kind and supportive in every response</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-love-lavender">
            <div className="w-12 h-12 bg-love-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-gray-600">Advanced AI technology for personalized advice</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-love-lavender">
            <div className="w-12 h-12 bg-love-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Always Available</h3>
            <p className="text-gray-600">24/7 support whenever you need love guidance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 