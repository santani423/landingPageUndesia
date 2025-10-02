import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const CTA = () => {
  const handleCTAClick = (action) => {
    console.log(`CTA clicked: ${action}`);
    window.location.href = "/themes";
    // switch (action) {
    //   case 'website':
    //     alert('Akan mengarahkan ke form pemesanan undangan website...');
    //     break;
    //   case 'video':
    //     alert('Akan mengarahkan ke form pemesanan video undangan...');
    //     break;
    //   case 'demo':
    //     document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   default:
    //     alert('Terima kasih atas minat Anda!');
    // }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-rose-500 to-orange-400"></div>
      
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1500"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header with icons */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <Heart className="w-10 h-10 text-pink-200" />
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse delay-1000" />
          </div>

          {/* Main CTA Headline */}
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Percayakan Momen Spesial Anda
            <span className="block text-3xl md:text-4xl font-light text-rose-100 mt-2">
              dengan UNDESIA
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-rose-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Undangan digital & video eksklusif, mudah dibagikan, penuh kesan. 
            Buat momen istimewa Anda berkesan selamanya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              onClick={() => handleCTAClick('website')}
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg font-medium rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 min-w-[250px] group"
            >
              <span>Buat Undangan Website</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => handleCTAClick('video')}
              className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white px-8 py-4 text-lg font-medium rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 min-w-[250px] group"
            >
              <span>Pesan Video Undangan</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mb-8">
            <Button
              onClick={() => handleCTAClick('demo')}
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              Lihat Semua Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-rose-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">✓ Garansi 100%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>
              <span className="text-sm">✓ Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              <span className="text-sm">✓ Revisi Unlimited</span>
            </div>
          </div>

          {/* Urgency text */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-rose-100 text-sm">
              🎁 <strong>Promo Terbatas!</strong> Diskon 20% untuk 50 pesanan pertama bulan ini
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;