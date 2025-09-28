import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Play, Eye, ArrowLeft, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  fetchThemeCategories,
  fetchThemes,
  fetchThemeVideos,
} from "../store/mockSlice";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("website");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const dispatch = useDispatch();
  const { themeCategories, themes, themeVideos, baseUrl } = useSelector(
    (state) => state.mock
  );

  useEffect(() => {
    dispatch(fetchThemeCategories());
    dispatch(fetchThemes({ page: 1, perPage: 1000 }));
    dispatch(fetchThemeVideos({ page: 1, perPage: 1000 }));
  }, [dispatch]);

  const handleDemoClick = (type, item) => {
    if (type === "video") {
      setSelectedTheme(item);
      setIsVideoOpen(true);
    } else {
      handleViewClick(item?.nama_theme);
    }
  };

  const handleViewClick = (themeName) => {
    window.open(`${baseUrl}demo/${themeName}`, "_blank");
  };

  const handleBackToHome = () => window.history.back();

  const handleOrderClick = (theme) =>
    window.open(`${baseUrl}order/${theme?.kode_theme}`, "_blank");

  const filterItems = (items) => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category_id === selectedCategory);
  };

  const websiteItems = filterItems(themes?.data || []);
  const videoItems = filterItems(themeVideos?.data || []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
      </header>

      {/* Page Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Semua Contoh Undangan
            <span className="block text-2xl md:text-3xl text-rose-500 font-light mt-2">
              UNDESIA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih dari undangan website atau video sesuai acara Anda. Semua
            template dapat disesuaikan dengan tema dan preferensi Anda.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto rounded-full mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 container mx-auto px-4">
        {/* Tabs Navigation */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
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
            {themeCategories?.data?.map((category) => (
              <Button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category?.id
                    ? "bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category?.name === "all" ? "Semua Kategori" : category?.name}
              </Button>
            ))}
          </div>

          {/* Website Gallery */}
          <TabsContent value="website">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {websiteItems.map((demo) => (
                <Card
                  key={demo.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5] relative group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={`https://undesia.com/assets/themes/${demo.nama_theme}/preview.png`}
                        alt={demo.nama_theme}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x500.png?text=No+Preview";
                        }}
                      />
                    </div>

                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg">
                      {demo?.category?.name || "Kategori Tidak Diketahui"}
                    </Badge>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick("website", demo)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Eye className="w-5 h-5 mr-2" /> Lihat Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo.nama_theme}
                    </h3>
                    <p className="text-rose-600 font-medium text-sm mb-4">
                      {demo.kode_theme}
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

          {/* Video Gallery */}
          <TabsContent value="video">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videoItems.map((demo) => (
                <Card
                  key={demo.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={`${baseUrl}assets/themes_video/${demo.nama_tema}.png`}
                        alt={demo.nama_tema}
                        className="w-full h-full object-cover rounded-lg"
                      />

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
                      {demo?.category?.name || "Kategori Tidak Diketahui"}
                    </Badge>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDemoClick("video", demo)}
                        className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Play className="w-5 h-5 mr-2 fill-current" /> Play Demo
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                      {demo.nama_tema}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      {demo.harga
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

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-400 rounded-2xl p-8 mt-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Siap Membuat Undangan Spesial Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pilih paket yang sesuai dan mulai buat undangan impian Anda hari
            ini!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => handleOrderClick("website")}
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              Pesan Undangan Website
            </Button>
            <Button
              onClick={() => handleOrderClick("video")}
              className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              Pesan Undangan Video
            </Button>
          </div>
        </div>

        {/* Modal Video */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-3xl p-0 bg-black flex justify-center items-center min-h-[70vh]">
            <DialogHeader className="absolute top-0 w-full">
              <DialogTitle className="text-white p-4 text-center">
                Demo Video: {selectedTheme?.nama_tema}
              </DialogTitle>
            </DialogHeader>

            <div className="w-full h-full flex justify-center items-center">
              {selectedTheme?.url_video ? (
                <div
                  className="rounded-lg overflow-hidden w-full max-w-3xl h-[500px]"
                  dangerouslySetInnerHTML={{ __html: selectedTheme.url_video }}
                />
              ) : (
                <p className="text-white">Video tidak tersedia</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default Gallery;
