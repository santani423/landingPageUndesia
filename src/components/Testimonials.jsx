import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { mockData } from './mock';



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mockData.testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? mockData.testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === mockData.testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Kata Mereka
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              Tentang UNDESIA
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockData.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-0 shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-rose-300 mx-auto" />
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center space-x-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1] ? testimonial.name.split(' ')[1][0] : ''}
                          </span>
                        </div>

                        <div className="text-left">
                          <h4 className="font-serif font-bold text-gray-800 text-lg">
                            {testimonial.name}
                          </h4>
                          <Badge className="bg-gradient-to-r from-rose-400 to-rose-500 text-white mt-1">
                            {testimonial.eventType}
                          </Badge>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center space-x-1 mt-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-rose-500 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-rose-500 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {mockData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-rose-400 to-rose-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">500+</div>
            <div className="text-gray-600">Undangan Dibuat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">98%</div>
            <div className="text-gray-600">Kepuasan Pelanggan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">50+</div>
            <div className="text-gray-600">Template Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">24/7</div>
            <div className="text-gray-600">Dukungan Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;