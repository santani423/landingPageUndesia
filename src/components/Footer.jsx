import React from 'react';
import { Button } from './ui/button';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { mockData } from './mock';

const Footer = () => {
  const handleContactClick = (type, value) => {
    console.log(`Contact clicked: ${type} - ${value}`);
    switch (type) {
      case 'whatsapp':
           const phone = "6285778674418"; // ganti dengan nomor WA tujuan
        window.open(`https://wa.me/${phone}`, '_blank');
        break;
      case 'instagram':
        window.open(`https://instagram.com/${value.replace('@', '')}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://facebook.com/${value}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      default:
        alert(`Kontak: ${value}`);
    }
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-300 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 border border-white rounded-full"></div>
                </div>
              </div>
              <span className="text-3xl font-serif font-bold bg-gradient-to-r from-rose-400 to-rose-300 bg-clip-text text-transparent">
                UNDESIA
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Solusi undangan digital modern dan eksklusif untuk momen spesial Anda. 
              Memberikan pengalaman berkesan dengan desain elegan dan fitur lengkap.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                onClick={() => handleContactClick('whatsapp', mockData.contact.whatsapp)}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleContactClick('instagram', mockData.contact.instagram)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleContactClick('facebook', mockData.contact.facebook)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleContactClick('email', mockData.contact.email)}
                className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-rose-300">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {mockData.navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-300 hover:text-rose-300 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-rose-300">
              Layanan Kami
            </h3>
            <div className="space-y-3">
              <div className="text-gray-300">Undangan Website</div>
              <div className="text-gray-300">Video Undangan Animasi</div>
              <div className="text-gray-300">Desain Custom</div>
              <div className="text-gray-300">RSVP & Buku Tamu</div>
              <div className="text-gray-300">Live Streaming</div>
              <div className="text-gray-300">Konsultasi Gratis</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-rose-300">
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Alamat</div>
                  <div className="text-sm">Jakarta, Indonesia</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">WhatsApp</div>
                  <button
                    onClick={() => handleContactClick('whatsapp', mockData.contact.whatsapp)}
                    className="text-sm hover:text-rose-300 transition-colors"
                  >
                    {mockData.contact.whatsapp}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Email</div>
                  <button
                    onClick={() => handleContactClick('email', mockData.contact.email)}
                    className="text-sm hover:text-rose-300 transition-colors"
                  >
                    {mockData.contact.email}
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button
                onClick={() => handleContactClick('whatsapp', mockData.contact.whatsapp)}
                className="w-full bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 UNDESIA – Semua Hak Dilindungi</span>
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-rose-300 transition-colors">
                Syarat & Ketentuan
              </button>
              <button className="hover:text-rose-300 transition-colors">
                Kebijakan Privasi
              </button>
              <button className="hover:text-rose-300 transition-colors">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;