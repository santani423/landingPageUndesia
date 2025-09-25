import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Play, Eye, ArrowLeft, Filter } from 'lucide-react';
import { mockData } from './mock';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Pernikahan', 'Khitanan', 'Ulang Tahun'];

  const handleDemoClick = (type, title) => {
    console.log(`Demo clicked: ${type} - ${title}`);
    if (type === 'video') {
      alert(`Akan memutar video demo: ${title}`);
    } else {
      alert(`Akan membuka preview website: ${title}`);
    }
  };

  const handleBackToHome = () => {
    window.history.back();
  };

  const handleOrderClick = (type) => {
    console.log(`Order clicked: ${type}`);
    alert(`Akan mengarahkan ke form pemesanan ${type}...`);
  };

  const filterItems = (items) => {
    if (selectedCategory === 'all') return items;
    return items.filter(item => item.category === selectedCategory);
  };

  const websiteItems = filterItems(mockData.galleryData.websiteInvitations);
  const videoItems = filterItems(mockData.galleryData.videoInvitations);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-rose-300 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 border border-white rounded-full"></div>
              </div>
              <span className="text-xl font-serif font-bold bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                UNDESIA
              </span>
            </div>

            <Button className="bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Semua Contoh Undangan
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              UNDESIA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih dari undangan website atau video sesuai acara Anda. 
            Semua template dapat disesuaikan dengan tema dan preferensi Anda.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white rounded-full p-1 h-16 shadow-lg">
              <TabsTrigger 
                value="website" 
                className="rounded-full text-lg font-medium data-[state=active]:bg-rose-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                🖥️ Undangan Website
              </TabsTrigger>
              <TabsTrigger 
                value="video" 
                className="rounded-full text-lg font-medium data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                🎥 Undangan Video
              </TabsTrigger>
            </TabsList>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Semua Kategori' : category}
                </Button>
              ))}
            </div>

            {/* Website Gallery */}
            <TabsContent value="website" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {websiteItems.map((item) => (
                  <Card 
                    key={item.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                  >
                    <div className="relative overflow-hidden">
                      {/* Thumbnail */}
                      <div className="aspect-[3/4] bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 relative group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                              <div className="w-6 h-6 border border-white rounded-full"></div>
                            </div>
                            <div className="space-y-1">
                              <div className="h-1.5 bg-gray-200 rounded w-16 mx-auto"></div>
                              <div className="h-1.5 bg-gray-200 rounded w-12 mx-auto"></div>
                              <div className="h-1.5 bg-gray-200 rounded w-20 mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg text-xs">
                        {item.category}
                      </Badge>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          onClick={() => handleDemoClick('website', item.title)}
                          className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-4 py-2 rounded-full transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Lihat Demo
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-rose-600 font-medium text-sm mb-3">
                        {item.style}
                      </p>
                      <Button
                        onClick={() => handleDemoClick('website', item.title)}
                        className="w-full bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white rounded-full text-sm py-2"
                      >
                        Lihat Demo Website
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="video" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videoItems.map((item) => (
                  <Card 
                    key={item.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                  >
                    <div className="relative overflow-hidden">
                      {/* Video Thumbnail */}
                      <div className="aspect-video bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 relative group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-inner flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                              <Play className="w-6 h-6 text-white fill-white" />
                            </div>
                            <p className="text-xs opacity-80">Video Preview</p>
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-400 text-white shadow-lg text-xs">
                        {item.category}
                      </Badge>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          onClick={() => handleDemoClick('video', item.title)}
                          className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-4 py-2 rounded-full transition-all duration-300"
                        >
                          <Play className="w-4 h-4 mr-2 fill-current" />
                          Play Demo
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-orange-600 font-medium text-sm mb-3">
                        {item.style}
                      </p>
                      <Button
                        onClick={() => handleDemoClick('video', item.title)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-400 hover:from-orange-600 hover:to-red-500 text-white rounded-full text-sm py-2"
                      >
                        Play Video Demo
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA Banner */}
          <div className="bg-gradient-to-r from-rose-600 to-orange-400 rounded-2xl p-8 mt-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Siap Membuat Undangan Spesial Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Pilih paket yang sesuai dan mulai buat undangan impian Anda hari ini!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => handleOrderClick('website')}
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
              >
                Pesan Undangan Website
              </Button>
              <Button
                onClick={() => handleOrderClick('video')}
                className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
              >
                Pesan Undangan Video
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;