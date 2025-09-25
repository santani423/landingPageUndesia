import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Play, Eye, ExternalLink } from 'lucide-react';
import { mockData } from './mock';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('website');

  const handleDemoClick = (type, title) => {
    console.log(`Demo clicked: ${type} - ${title}`);
    if (type === 'video') {
      alert(`Akan memutar video demo: ${title}`);
    } else {
      alert(`Akan membuka preview website: ${title}`);
    }
  };

  const handleViewAllClick = () => {
    console.log('View all samples clicked');
    alert('Akan mengarahkan ke halaman Gallery dengan semua contoh undangan...');
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Lihat Contoh Undangan Kami
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              Website & Video Berkualitas Premium
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Tabs for Website vs Video */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-rose-50 rounded-full p-1 h-14">
            <TabsTrigger 
              value="website" 
              className="rounded-full text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-lg transition-all duration-300"
            >
              🖥️ Undangan Website
            </TabsTrigger>
            <TabsTrigger 
              value="video" 
              className="rounded-full text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-lg transition-all duration-300"
            >
              🎥 Undangan Video
            </TabsTrigger>
          </TabsList>

          {/* Website Demos */}
          <TabsContent value="website" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.demos.website.map((demo, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    {/* Demo Thumbnail */}
                    <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 relative group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                            <div className="h-2 bg-gray-200 rounded w-16 mx-auto"></div>
                            <div className="h-2 bg-gray-200 rounded w-24 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg">
                      {demo.category}
                    </Badge>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick('website', demo.title)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        Lihat Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-rose-600 font-medium text-sm mb-4">
                      {demo.description}
                    </p>
                    <Button
                      onClick={() => handleDemoClick('website', demo.title)}
                      className="w-full bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white rounded-full"
                    >
                      Lihat Demo Website
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Video Demos */}
          <TabsContent value="video" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.demos.video.map((demo, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 relative group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-inner flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                          <p className="text-sm opacity-80">Video Preview</p>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-400 text-white shadow-lg">
                      {demo.category}
                    </Badge>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick('video', demo.title)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Play className="w-5 h-5 mr-2 fill-current" />
                        Play Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      {demo.description}
                    </p>
                    <Button
                      onClick={() => handleDemoClick('video', demo.title)}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-400 hover:from-orange-600 hover:to-red-500 text-white rounded-full"
                    >
                      Play Video Demo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Masih banyak template dan video undangan menarik lainnya!
          </p>
          <Button
            onClick={handleViewAllClick}
            className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Lihat Semua Contoh Undangan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;