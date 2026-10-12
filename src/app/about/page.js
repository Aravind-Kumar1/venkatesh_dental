"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Doctor from "@/components/sections/Doctor";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="mesh-bg" />
      <Navbar />

      {/* Page Hero Banner */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className={styles.heroTitle}>
            About <span className={styles.titleAccent}>Venkateswara</span> Dental Hospital
          </h1>
          <p className={styles.heroSubtitle}>
            Sanath Nagar's most trusted dental care destination since 2011, led by Dr. Venkateswara Kalicherla — where every smile gets the care it deserves.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className={styles.statCard}>
              <strong>15,000+</strong>
              <span>Smiles Restored</span>
            </div>
            <div className={styles.statCard}>
              <strong>5.0 ★</strong>
              <span>Google Rating</span>
            </div>
            <div className={styles.statCard}>
              <strong>399+</strong>
              <span>Patient Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <main>
        <About />
        <WhyChooseUs />
        <Doctor />
        <Testimonials />

        {/* CTA Strip */}
        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={styles.ctaContent}>
              <div>
                <h2>Ready to Experience Pain‑Free Dental Care?</h2>
                <p>Book your consultation with Dr. Venkateswara Kalicherla today.</p>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Book Appointment
                </Link>
                <a href="tel:+919676316416" className={styles.btnSecondary}>
                  +91 96763 16416
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
