import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Packages from "./components/Packages";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Themes from "./components/Themes";

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Packages />
      <Demo />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};
const GalleryPage = () => {
  return <Gallery />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/themes" element={<GalleryPage />} />
          {/* <Route path="/themes" element={<Themes />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
