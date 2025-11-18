import { BarChart3, Bell, CreditCard, Shield, Target, Wallet } from 'lucide-react';
import React from 'react'

const Features = () => {


     const features = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Smart Budgeting",
      description: "AI-powered budget recommendations based on your spending habits and financial goals.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Expense Analytics",
      description: "Visualize your spending patterns with detailed charts and insightful reports.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Tracking",
      description: "Set financial goals and track your progress with automated savings recommendations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts",
      description: "Get notified about bill payments, unusual spending, and budget limits.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multi-Account",
      description: "Connect all your bank accounts and cards in one secure dashboard.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "256-bit encryption and biometric authentication keep your data safe.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your finances effectively in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-linear-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features