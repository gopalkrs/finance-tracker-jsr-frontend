import React, { useEffect, useState } from "react";
import LoginModal from "../components/auth/LoginModal";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import SignupModal from "../components/auth/SignupModal";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  useEffect(()=>{
    if(user){
      navigate('/dashboard');
    }
  },[user])

  const openAuth = (mode: string) => {
    setAuthMode(mode);
    setShowLoginModal(true);
    //setMobileMenuOpen(false);
  };


  return (
    <div>
      {showLoginModal &&
        (authMode === "login" ? (
          <LoginModal
            authMode={authMode}
            setAuthMode={setAuthMode}
            setShowLoginModal={setShowLoginModal}
          />
        ) : (
          <SignupModal
            authMode={authMode}
            setAuthMode={setAuthMode}
            setShowLoginModal={setShowLoginModal}
          />
        ))}
      <Header setShowLoginModal={setShowLoginModal} />
      <main className="min-h-screen">
        <HeroSection openAuth={openAuth} />
        <Features />
        <HowItWorks openAuth={openAuth} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
