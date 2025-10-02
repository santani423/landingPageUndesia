import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import * as Icons from "lucide-react";
import { mockData } from "./mock";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/themes");
  };
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            10 Fitur Utama
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              Yang Membuat UNDESIA Istimewa
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {mockData.features.map((feature, index) => {
            const IconComponent = Icons[feature.icon] || Icons.Star;

            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-rose-50/30"
              >
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  {/* Icon with gradient background */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Badge for new features */}
                    {feature.badge && (
                      <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2 py-1 shadow-lg">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-gray-800 mb-2 text-lg leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Semua fitur ini tersedia dalam satu platform yang mudah digunakan
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleViewAllClick}
              className="bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Lihat Semua Fitur
            </button>
            <button
              onClick={handleViewAllClick}
              className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 bg-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Coba Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
