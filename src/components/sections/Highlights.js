"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./Highlights.module.css";

const highlights = [
  "Highly Rated Dental Clinic (5.0 ⭐ Reviews)",
  "Painless Treatment Approach",
  "Advanced Dental Technology",
  "Affordable & Transparent Pricing",
  "Personalized Treatment Plans"
];

export default function Highlights() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <motion.div 
          className={styles.highlightsGrid}
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {highlights.map((text, i) => (
            <motion.div key={i} className={styles.highlightItem} variants={fadeIn}>
              <div className={styles.highlightIcon}><CheckCircle2 size={20} /></div>
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
