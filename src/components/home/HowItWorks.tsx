import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Create Account</h3>
              <p className="text-gray-400">Sign up in seconds with your email or social accounts. No credit card required.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect Accounts</h3>
              <p className="text-gray-400">Securely link your bank accounts and credit cards to start tracking automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Take Control</h3>
              <p className="text-gray-400">Set budgets, track expenses, and achieve your financial goals with AI insights.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start your journey to financial freedom today. No credit card required.
          </p>
          <button 
            onClick={() => openAuth('signup')}
            className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-bold text-lg shadow-xl"
          >
            Get Started for Free
          </button>
        </div>
      </section>
      </div>
  )
}

export default HowItWorks