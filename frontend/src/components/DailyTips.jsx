import React from 'react'
import { Heart, Sparkles, Quote } from 'lucide-react'

const DailyTips = () => {
  const tips = [
    {
      id: 1,
      tip: "Communication is the foundation of every strong relationship. Take time to truly listen and share your feelings openly.",
      emoji: "💬"
    },
    {
      id: 2,
      tip: "Small gestures of love and appreciation can make a big difference. A simple 'I love you' or a thoughtful note goes a long way.",
      emoji: "💝"
    },
    {
      id: 3,
      tip: "Remember that love is patient and kind. Give your partner space to grow and be understanding of their journey.",
      emoji: "🌱"
    },
    {
      id: 4,
      tip: "Quality time together is precious. Put away distractions and focus on creating meaningful moments with your loved one.",
      emoji: "⏰"
    },
    {
      id: 5,
      tip: "Trust is earned through consistent actions. Be reliable, honest, and keep your promises to build a strong foundation.",
      emoji: "🤝"
    },
    {
      id: 6,
      tip: "Love yourself first. A healthy relationship starts with self-love and self-respect.",
      emoji: "💖"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-love-rose" />
            <h2 className="text-3xl md:text-4xl font-lora font-bold gradient-text">
              Daily Love Tips
            </h2>
            <Sparkles className="h-6 w-6 text-love-rose" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wisdom for your heart, updated daily to help you nurture beautiful relationships
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-love-lavender hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{tip.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Quote className="h-4 w-4 text-love-rose" />
                    <span className="text-sm font-medium text-love-rose">Tip #{tip.id}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-love-pink to-love-purple rounded-3xl p-8 shadow-xl">
            <Heart className="h-12 w-12 text-white mx-auto mb-4 animate-heartbeat" />
            <h3 className="text-2xl font-lora font-bold text-white mb-4">
              Ready for Personalized Advice?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Get sweet, supportive guidance tailored to your unique situation
            </p>
            <button className="bg-white text-love-rose hover:bg-love-lavender font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Chat with LoveGuru
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyTips 