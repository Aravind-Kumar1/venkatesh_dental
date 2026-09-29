"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VideoGallery from "@/components/sections/VideoGallery";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import TimedPopup from "@/components/shared/TimedPopup";
import styles from "./page.module.css";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="mesh-bg" />;

  return (
    <div className={styles.page}>
      <div className="mesh-bg" />
      <Navbar />
      
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <WhyChooseUs />
        <VideoGallery />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
      <TimedPopup />
    </div>
  );
}
