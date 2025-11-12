import React, { useState } from 'react'
import LoginModal from '../components/auth/LoginModal'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer';

const HomePage = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);


  return (
    <div>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      <Header setShowLoginModal={setShowLoginModal} />
      <main className='min-h-screen'>
        jgj
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;