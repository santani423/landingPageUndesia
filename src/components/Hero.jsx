import React from 'react';
import { Button } from './ui/button';
import { mockData } from './mock';

const Hero = () => {
  const handleCTAClick = (buttonText) => {
    console.log(`CTA clicked: ${buttonText}`);
    // Mock functionality - in real app would navigate or open forms
    if (buttonText.includes('Website')) {
      alert('Membuka form pemesanan undangan website...');
    } else if (buttonText.includes('Video')) {
      alert('Membuka form pemesanan video undangan...');
    } else if (buttonText.includes('Contoh')) {
      // Scroll to demo section
      document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating butterflies animation */}
        <div className="absolute top-20 left-10 w-8 h-8 opacity-20 animate-bounce">
          <div className="w-full h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transform rotate-45"></div>
          <div className="absolute inset-1 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 w-6 h-6 opacity-30 animate-pulse delay-1000">
          <div className="w-full h-full bg-gradient-to-r from-orange-300 to-rose-300 rounded-full transform -rotate-12"></div>
        </div>
        <div className="absolute bottom-32 left-20 w-10 h-10 opacity-25 animate-bounce delay-500">
          <div className="w-full h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transform rotate-12"></div>
        </div>
        <div className="absolute bottom-20 right-32 w-7 h-7 opacity-20 animate-pulse delay-2000">
          <div className="w-full h-full bg-gradient-to-r from-rose-300 to-orange-300 rounded-full transform rotate-45"></div>
        </div>

        {/* Floral outline decorations */}
        <div className="absolute top-32 right-10 w-16 h-16 opacity-10">
          <div className="w-full h-full border-2 border-rose-300 rounded-full"></div>
          <div className="absolute inset-2 border border-rose-200 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-16 w-20 h-20 opacity-15">
          <div className="w-full h-full border-2 border-pink-300 rounded-full"></div>
          <div className="absolute inset-3 border border-pink-200 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="w-16 h-16 border-4 border-white rounded-full relative">
              <div className="absolute inset-2 border-2 border-white rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent">
            UNDESIA
          </span>
          <br />
          <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">
            Undangan Digital Modern & Eksklusif
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          {mockData.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {mockData.hero.ctaButtons.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleCTAClick(button.text)}
              className={`
                px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[250px]
                ${button.variant === 'primary' 
                  ? 'bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white' 
                  : button.variant === 'secondary'
                  ? 'bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white'
                  : 'border-2 border-rose-400 text-rose-600 hover:bg-rose-50 bg-white'
                }
              `}
            >
              {button.text}
            </Button>
          ))}
        </div>

        {/* Optional mockup preview */}
        <div className="flex justify-center items-center space-x-8 opacity-80">
          <div className="hidden md:flex items-center space-x-4">
            {/* Mobile mockup */}
            <div className="w-16 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-xl">
              <div className="w-12 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-md"></div>
            </div>
            {/* Desktop mockup */}
            <div className="w-32 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-xl">
              <div className="w-28 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
          <path d="M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;