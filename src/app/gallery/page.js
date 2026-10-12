"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import VideoGallery from "@/components/sections/VideoGallery";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Camera, Play, Star, ArrowRight, Phone, Calendar } from "lucide-react";
import styles from "./gallery.module.css";

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className="mesh-bg" />
      <Navbar />

      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <h1 className={styles.heroTitle}>
            Smile <span className={styles.titleAccent}>Transformations</span> Gallery
          </h1>
          <p className={styles.heroSubtitle}>
            Real results from real patients — every before & after photograph is from treatment performed right here at our Sanath Nagar clinic by Dr. Venkateswara Kalicherla.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}><Camera size={14} /> Real Patient Results</span>
            <span className={styles.heroBadge}><Play size={14} /> Video Testimonials</span>
            <span className={styles.heroBadge}><Star size={14} fill="currentColor" /> 399+ 5★ Reviews</span>
          </div>
        </div>
      </section>

      <main>
        {/* Photo Transformations */}
        <Gallery />

        {/* Divider with CTA */}
        <section className={styles.midCta}>
          <div className="container">
            <div className={styles.midCtaContent}>
              <div className={styles.midCtaText}>
                <h2>Your Smile Transformation Awaits</h2>
                <p>Join 15,000+ patients who've trusted us with their smiles. Book a consultation to get your personalised treatment plan.</p>
              </div>
              <div className={styles.midCtaActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  <Calendar size={16} /> Book Consultation <ArrowRight size={16} />
                </Link>
                <a href="tel:+919676316416" className={styles.btnSecondary}>
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <VideoGallery />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
