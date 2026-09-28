"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const whyChoose = [
  "5-Star Rated Dental Clinic in Hyderabad",
  "Experienced & Skilled Dental Team",
  "Advanced Equipment & Laser Treatments",
  "Hygienic & Safe Environment",
  "Friendly & Patient-Centered Approach",
  "Trusted by Hundreds of Patients"
];

export default function WhyChooseUs() {
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
    <section className={`${styles.whyChoose} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Experience Excellence</span>
          <h2>Why Choose Venkateswara Dental Hospital?</h2>
        </div>
        <motion.div 
          className={styles.checkGrid}
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {whyChoose.map((text, i) => (
            <motion.div key={i} className={styles.checkItem} variants={fadeIn}>
              <CheckCircle2 className={styles.highlightIcon} />
              <span>{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
