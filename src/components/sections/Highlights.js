"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Clock, Award, Sparkles } from "lucide-react";
import styles from "./Highlights.module.css";

const highlights = [
  { icon: <Star size={20} className={styles.starIcon} />, title: "5.0 ★ Google Rating", desc: "399+ verified patient reviews" },
  { icon: <Award size={20} className={styles.highlightIcon} />, title: "15+ Years Experience", desc: "Established in Sanath Nagar (2011)" },
  { icon: <Sparkles size={20} className={styles.highlightIcon} />, title: "Painless RCT Tech", desc: "Advanced dental anesthesia & lasers" },
  { icon: <ShieldCheck size={20} className={styles.highlightIcon} />, title: "100% Hospital Hygiene", desc: "Strict sterilization & safety" },
  { icon: <Clock size={20} className={styles.highlightIcon} />, title: "Open Daily to 9 PM", desc: "Flexible morning & evening slots" }
];

export default function Highlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.highlightsGrid}>
          {highlights.map((item, i) => (
            <div key={i} className={styles.highlightCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
