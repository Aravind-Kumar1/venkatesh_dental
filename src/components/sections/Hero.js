"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, ShieldCheck, Users, Check, Phone } from "lucide-react";
import styles from "./Hero.module.css";

/* Image imports */


/* ── Stat counter component ── */
const StatCounter = ({ value, suffix = "", decimals = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded, isMounted]);

  if (!isMounted) return <span>0{suffix}</span>;

  return <span>{displayValue}{suffix}</span>;
};

const Hero = ({ page = "home" }) => {
  return (
    <div className={styles.hero}>
      <section className={styles.heroHome}>
        <div className="w-full h-full relative" style={{ position: 'relative', width: '100%', height: '100%' }}>
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

          {/* Standard Text Animation */}
          <div className={styles.slideContent}>
            <div className={styles.containerCustom}>
              <div className={styles.textWrapper}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'inherit' }}
                >
                  <span className={styles.badge}>
                    ✦ Trusted Since 2007
                  </span>
                  <h1 className={styles.title}>
                    <span>Advanced Dental Care</span><br />
                    in Sanath Nagar
                  </h1>

                  <p className={styles.description}>
                    Experience world-class dental treatments with cutting-edge technology and a compassionate touch. We prioritize your comfort and long-term oral health.
                  </p>
                  


                  <div className={styles.btnGroup}>
                    <Link
                      href="#contact"
                      className={`${styles.btn} ${styles.btnPrimary}`}
                    >
                      Book appointment
                    </Link>
                    <Link
                      href="#services"
                      className={`${styles.btn} ${styles.btnPrimary}`}
                      style={{ background: 'linear-gradient(to right, #1A4996, #030A14)' }}
                    >
                      Explore services
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
        </div>
      </section>

      {/* ── FEATURES BAR REMOVED ── */}


      {/* Stats Bar removed as requested */}

    </div>
  );
};

export default Hero;
