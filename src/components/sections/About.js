"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import doctorImage from "../../../assets/images/venky_doc1.png";

export default function About() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image src={doctorImage} alt="Venkateswara Dental Clinic" className={styles.aboutImage} />
          </motion.div>
          <div className={styles.aboutContent}>
            <span className={styles.subTitle}>About Us</span>
            <h2>Trusted Dental Clinic in Sanath Nagar</h2>
            <p>
              Welcome to <strong>Venkateswara Dental Hospital</strong>, a leading dental clinic in Sanath Nagar 
              offering high-quality and personalized dental care.
            </p>
            <p>
              Led by <strong>Dr. Venkateswara Kalicherla</strong>, our clinic is dedicated to providing advanced 
              dental treatments in a comfortable and friendly environment. From routine dental 
              checkups to complex procedures, we ensure every patient receives safe, effective, 
              and painless treatment.
            </p>
            <p>
              If you’re searching for the best dentist near me or a reliable dental clinic 
              in Hyderabad, we are committed to helping you achieve a healthy and confident smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
