"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Calendar, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <section className={styles.heroHome}>
        {/* Background Video */}
        <div className={styles.videoBackground}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1777379594/Untitled_design_th1kii.jpg"
            className={styles.videoElement}
          >
            <source src="https://res.cloudinary.com/dbg1xwcrj/video/upload/v1777379594/Untitled_design_th1kii.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.slideContent}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.textWrapper}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={styles.contentMotion}
              >
                {/* Trust Badge */}
                <div className={styles.badgeGroup}>
                  <span className={styles.badge}>
                    <Award size={15} className={styles.badgeIcon} />
                    <span>Trusted Dental Care Since 2011</span>
                  </span>
                  <span className={styles.ratingBadge}>
                    <Star size={14} fill="#f59e0b" stroke="none" />
                    <strong>5.0</strong>
                    <span>(399+ Reviews)</span>
                  </span>
                </div>

                <h1 className={styles.title}>
                  World-Class Smile Care <br />
                  <span className={styles.highlightText}>in Sanath Nagar</span>
                </h1>

                <p className={styles.description}>
                  Experience painless root canal treatments, precision dental implants, and cosmetic smile makeovers led by <strong>Dr. Venkateswara Kalicherla</strong> with state-of-the-art dental technology.
                </p>

                {/* Key Value Highlights */}
                <div className={styles.quickFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>100% Painless Tech</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>Sterilized Hospital Hygiene</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>Transparent Pricing</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.btnGroup}>
                  <Link href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </Link>

                  <Link href="#services" className={`${styles.btn} ${styles.btnSecondary}`}>
                    <span>Explore All Services</span>
                  </Link>
                </div>

                {/* Mobile Video Card */}
                <div className={styles.mobileVideoCard}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1777379594/Untitled_design_th1kii.jpg"
                    className={styles.mobileVideoElement}
                  >
                    <source src="https://res.cloudinary.com/dbg1xwcrj/video/upload/v1777379594/Untitled_design_th1kii.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
