"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { MapPin, Clock, Phone, MessageCircle, Star, ShieldCheck } from "lucide-react";
import styles from "./contact.module.css";

export default function ContactPage() {
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
            <span>Contact & Booking</span>
          </div>
          <h1 className={styles.heroTitle}>
            Book Your <span className={styles.titleAccent}>Appointment</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Schedule a consultation with Dr. Venkateswara Kalicherla at our Sanath Nagar clinic. Open 7 days a week — walk-ins and pre-booked appointments welcome.
          </p>

          {/* Quick Info Cards */}
          <div className={styles.quickInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Clock size={20} /></div>
              <div>
                <strong>Open Daily</strong>
                <span>10:00 AM – 9:00 PM</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Phone size={20} /></div>
              <div>
                <strong>Direct Call</strong>
                <a href="tel:+919676316416" style={{ color: '#fbbf24', textDecoration: 'none' }}>+91 96763 16416</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><MapPin size={20} /></div>
              <div>
                <strong>Location</strong>
                <span>Czech Colony, Sanath Nagar</span>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><Star size={20} fill="currentColor" style={{ color: '#fbbf24' }} /></div>
              <div>
                <strong>Rating</strong>
                <span>5.0★ — 399+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <Contact />

        {/* WhatsApp Emergency CTA */}
        <section className={styles.emergencyStrip}>
          <div className="container">
            <div className={styles.emergencyContent}>
              <div className={styles.emergencyText}>
                <MessageCircle size={24} className={styles.emergencyIcon} />
                <div>
                  <h3>Dental Emergency? Contact Us Now</h3>
                  <p>Severe toothache, broken tooth, or dental trauma — we prioritize same-day emergency appointments.</p>
                </div>
              </div>
              <div className={styles.emergencyActions}>
                <a 
                  href="https://wa.me/919676316416?text=I%20have%20a%20dental%20emergency%20and%20need%20immediate%20assistance." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Emergency
                </a>
                <a href="tel:+919676316416" className={styles.callBtn}>
                  <Phone size={16} /> Call +91 96763 16416
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees strip */}
        <section className={styles.guaranteeStrip}>
          <div className="container">
            <div className={styles.guaranteeGrid}>
              {[
                { icon: <ShieldCheck size={22} />, title: "No Hidden Fees", desc: "Transparent pricing discussed before treatment begins" },
                { icon: <Clock size={22} />, title: "Open 7 Days", desc: "Monday to Sunday, 10 AM to 9 PM — including public holidays" },
                { icon: <Star size={22} fill="currentColor" />, title: "5.0★ Rated Clinic", desc: "399+ verified Google reviews from real patients" },
                { icon: <Phone size={22} />, title: "Same-Day Emergency", desc: "Priority care for acute dental pain and tooth trauma" },
              ].map((g, i) => (
                <div key={i} className={styles.guaranteeItem}>
                  <div className={styles.guaranteeIcon}>{g.icon}</div>
                  <div>
                    <strong>{g.title}</strong>
                    <p>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
