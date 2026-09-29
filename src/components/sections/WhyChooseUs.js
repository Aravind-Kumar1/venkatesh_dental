"use client";

import React from "react";
import { Star, Award, Zap, ShieldCheck, DollarSign, Users, ArrowRight } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const advantages = [
  {
    icon: <Star size={24} className={styles.starIcon} />,
    title: "5.0-Star Google Rating",
    description: "Backed by 199+ verified patient reviews celebrating gentle, transparent, and superior clinical care in Sanath Nagar."
  },
  {
    icon: <Award size={24} />,
    title: "18+ Years Medical Expertise",
    description: "Led by Dr. Venkateswara Kalicherla, who brings nearly two decades of precision dental surgery and implantology."
  },
  {
    icon: <Zap size={24} />,
    title: "100% Painless Procedures",
    description: "State-of-the-art rotary endodontics and gentle anesthetic protocols designed to relieve pain without causing any discomfort."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Hospital-Grade Sterilization",
    description: "Class-B autoclave sterilization, sealed pouch systems, and rigorous disinfection for uncompromising patient safety."
  },
  {
    icon: <DollarSign size={24} />,
    title: "Transparent & Fair Pricing",
    description: "Clear treatment recommendations and upfront pricing with no surprise charges or unnecessary procedures."
  },
  {
    icon: <Users size={24} />,
    title: "Complete Family Care",
    description: "From gentle kids dentistry to permanent geriatric tooth restorations, we cater to every generation with empathy."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Why Patients Choose Us</span>
          <h2>A Better Dental Experience Built on Trust</h2>
          <p className={styles.headerLead}>
            We combine clinical precision, pain-free dental innovations, and compassionate service to keep your teeth healthy and vibrant for life.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {advantages.map((adv, idx) => (
            <div key={idx} className={styles.advCard}>
              <div className={styles.iconCircle}>{adv.icon}</div>
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.barText}>
            <strong>Ready to experience painless dental care?</strong>
            <span>Book your priority visit today with Dr. Venkateswara.</span>
          </div>
          <a href="#contact" className={styles.barButton}>
            <span>Book Appointment Online</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
