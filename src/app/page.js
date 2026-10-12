"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import VideoGallery from "@/components/sections/VideoGallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import TimedPopup from "@/components/shared/TimedPopup";
import styles from "./page.module.css";

export default function Page() {
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
        <Testimonials />
        <CTA />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
      <TimedPopup />
    </div>
  );
}
