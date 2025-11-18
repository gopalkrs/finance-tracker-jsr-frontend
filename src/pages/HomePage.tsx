import React, { useState } from 'react'
import LoginModal from '../components/auth/LoginModal'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer';
import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';

const HomePage = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openAuth = (mode: string) => {
    setAuthMode(mode);
    setShowLoginModal(true);
    //setMobileMenuOpen(false);
  };


  return (
    <div>
      {showLoginModal && <LoginModal authMode={authMode} setAuthMode={setAuthMode} setShowLoginModal={setShowLoginModal} />}
      <Header setShowLoginModal={setShowLoginModal} />
      <main className='min-h-screen'>
        <HeroSection openAuth={openAuth} />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;