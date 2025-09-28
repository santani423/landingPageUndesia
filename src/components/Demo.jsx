import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Play, Eye, ExternalLink } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDemos, fetchThemes, fetchThemeVideos } from "../store/mockSlice";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("website");
  const [videoUrl, setVideoUrl] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const dispatch = useDispatch();
  const { themes, themeVideos, baseUrl } = useSelector((state) => state.mock);

  useEffect(() => {
    dispatch(fetchDemos());
    dispatch(fetchThemes({ page: 1, perPage: 4 }));
    dispatch(fetchThemeVideos({ page: 1, perPage: 4 }));
  }, [dispatch]);

  const handleDemoClick = (type, theme) => {
    console.log("Demo clicked:", type, theme?.url_video);

    if (type === "video") {
      setVideoUrl(theme?.url_video);
      setSelectedTheme(theme);
      setIsVideoOpen(true);
    } else {
      handleViewClick(theme?.nama_theme);
    }
  };

  const handleOrderClick = (theme) => {
    window.open(`${baseUrl}order/${theme?.kode_theme}`, "_blank");
  };

  const handleViewClick = (themeName) => {
    window.open(`${baseUrl}demo/${themeName}`, "_blank");
  };

  const handleViewAllClick = () => {
    alert(
      "Akan mengarahkan ke halaman Gallery dengan semua contoh undangan..."
    );
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

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
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
              {themes?.data?.map((demo, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    {/* Thumbnail */}
                    <div className="aspect-[4/5] relative group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={`https://undesia.com/assets/themes/${demo?.nama_theme}/preview.png`}
                        alt={demo?.nama_theme}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x500.png?text=No+Preview";
                        }}
                      />
                    </div>

                    {/* Category */}
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg">
                      {demo?.category_id}
                    </Badge>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick("website", demo)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        Lihat Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo?.nama_theme}
                    </h3>
                    <p className="text-rose-600 font-medium text-sm mb-4">
                      {demo?.kode_theme}
                    </p>

                    <Button
                      onClick={() => handleDemoClick("website", demo)}
                      className="w-full mb-3 bg-gradient-to-r from-rose-500 to-rose-400 hover:from-rose-600 hover:to-rose-500 text-white rounded-full"
                    >
                      Lihat Demo Website
                    </Button>

                    <Button
                      onClick={() => handleOrderClick(demo)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white rounded-full"
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Video Demos */}
          <TabsContent value="video" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {themeVideos?.data?.map((demo, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative group-hover:scale-105 transition-transform duration-500">
                      {/* Gambar preview video */}
                      <img
                        src={`${baseUrl}assets/themes_video/${demo?.nama_tema}.png`} // ambil dari field preview/url di DB
                        alt={demo?.nama_tema || "Video Preview"}
                        className="w-full h-full object-cover rounded-lg"
                      />

                      {/* Overlay gelap + tombol play */}
                      <div className="absolute inset-0 bg-black/40 rounded-lg shadow-inner flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                          <p className="text-sm opacity-80">Video Preview</p>
                        </div>
                      </div>
                    </div>

                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-400 text-white shadow-lg">
                      {demo?.category_id}
                    </Badge>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick("video", demo)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Play className="w-5 h-5 mr-2 fill-current" />
                        Play Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo?.nama_tema}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      {demo?.harga
                        ? `Rp ${demo.harga.toLocaleString()}`
                        : "Tanpa harga"}
                    </p>
                    <Button
                      onClick={() => handleDemoClick("video", demo)}
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

        {/* View All */}
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

      {/* Modal Video */}
      {/* Modal Video */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <DialogHeader>
            <DialogTitle className="text-white p-4">
              Demo Video: {selectedTheme?.nama_tema}
            </DialogTitle>
          </DialogHeader>

          {/* Render iframe langsung dari database */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {selectedTheme?.url_video ? (
              <div
                className="rounded-lg overflow-hidden"
                dangerouslySetInnerHTML={{ __html: selectedTheme.url_video }}
              />
            ) : (
              <p className="text-white">Video tidak tersedia</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Demo;
