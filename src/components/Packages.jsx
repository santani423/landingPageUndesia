import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Star } from "lucide-react";
import { mockData } from "./mock";

const Packages = () => {
  const handlePackageSelect = (packageName) => {
    console.log(`Package selected: ${packageName}`);

    // Pesan default untuk WhatsApp
    const message = `Halo, saya tertarik dengan paket ${packageName}. Mohon informasi lebih lanjut.`;

    // Buat link WhatsApp
    const whatsappUrl = `https://wa.me/6285778674418?text=${encodeURIComponent(
      message
    )}`;

    // Redirect ke WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="packages"
      className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Paket Undangan
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              Pilih yang Sesuai Kebutuhan Anda
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockData.packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 overflow-hidden ${
                pkg.popular
                  ? "shadow-2xl scale-105 bg-gradient-to-br from-white via-rose-50 to-pink-50"
                  : "shadow-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50/30"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-none rounded-bl-lg shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif font-bold text-gray-800 mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  type="button"
                  onClick={() => handlePackageSelect(pkg.name)}
                  className={`w-full py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    pkg.popular
                      ? "bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white"
                      : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white"
                  }`}
                >
                  {pkg.cta}
                </Button>

                {/* Popular package extra info */}
                {pkg.popular && (
                  <p className="text-center text-xs text-gray-500 mt-3">
                    🎯 Paling dipilih pelanggan kami
                  </p>
                )}
              </CardContent>

              {/* Gradient overlay for hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Semua paket sudah termasuk hosting gratis selama 1 tahun dan
            dukungan teknis.
            <span className="text-rose-600 font-medium">
              {" "}
              Konsultasi gratis sebelum pemesanan!
            </span>
          </p>
          <div className="flex items-center justify-center mt-6 space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Check className="w-4 h-4 text-rose-500" />
              <span>Garansi 100%</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Check className="w-4 h-4 text-rose-500" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Check className="w-4 h-4 text-rose-500" />
              <span>Revisi Unlimited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
