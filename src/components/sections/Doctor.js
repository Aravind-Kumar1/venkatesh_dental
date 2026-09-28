"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Doctor.module.css";
import doctorImage from "../../../assets/images/venky_doc2.png";

export default function Doctor() {
  return (
    <section id="doctor" className={`${styles.doctorSection} section-padding`}>
      <div className="container">
        <div className={styles.doctorGrid}>
          <div className={styles.aboutContent}>
            <span className={styles.subTitle}>Meet Our Expert</span>
            <h2>Meet Our Expert Dentist</h2>
            <p>
              <strong>Dr. Venkateswara Kalicherla</strong> is a skilled and experienced dentist known for 
              delivering high-quality dental treatments with precision and care.
            </p>
            <p>
              He focuses on accurate diagnosis, painless procedures, and personalized 
              treatment plans to ensure the best results for every patient. His friendly 
              approach and commitment to excellence make him a trusted choice for dental 
              care in Sanath Nagar.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image src={doctorImage} alt="Dr. Venkateswara Kalicherla" className={styles.doctorImage} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
