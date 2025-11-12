import { DollarSign, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = ({setShowLoginModal} : any) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Fin<span className="text-emerald-400">Trek</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-2 text-gray-300 hover:text-white transition-colors font-medium"
              >
                Login
              </button>
              <button className="px-6 py-2 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg shadow-emerald-500/20">
                Get Started Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col space-y-4 mb-4">
                <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">How It Works</a>
                <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Pricing</a>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">About</a>
              </nav>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-3 text-gray-300 hover:text-white transition-colors font-medium border border-gray-700 rounded-lg"
                >
                  Login
                </button>
                <button className="w-full py-3 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium">
                  Get Started Free
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header;