"use client";

import React from "react";
import { Phone, Calendar, ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.cardContent}>
            <div className={styles.ctaBadge}>
              <ShieldCheck size={15} />
              <span>Same-Day Emergency Consultations Available</span>
            </div>

            <h2>Don't Endure Tooth Pain — Get Painless Relief Today</h2>
            
            <p>
              Whether it's a sudden severe toothache, an impacted wisdom tooth, or a desired smile makeover, Dr. Venkateswara Kalicherla is here to help with 100% painless care.
            </p>

            <div className={styles.infoStrip}>
              <div className={styles.infoPill}>
                <Clock size={16} />
                <span>Open Daily: 10:00 AM – 9:00 PM</span>
              </div>
              <div className={styles.infoPill}>
                <MapPin size={16} />
                <span>Above Ratnadeep, Sanath Nagar</span>
              </div>
            </div>

            <div className={styles.btnRow}>
              <a href="tel:+919676316416" className={styles.callBtn}>
                <Phone size={18} />
                <span>Call +91 96763 16416</span>
              </a>

              <a href="#contact" className={styles.bookBtn}>
                <Calendar size={18} />
                <span>Book Appointment Online</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
