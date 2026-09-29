"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, ArrowRight } from "lucide-react";
import styles from "./About.module.css";
import doctorImage from "../../../assets/images/venky_doc1.png";

export default function About() {
  const points = [
    "Specialized in 100% painless single-sitting Root Canal Treatments (RCT)",
    "Precision Dental Implants with natural aesthetic matching",
    "Hospital-grade sterilization following international hygiene protocols",
    "Digital RVG X-ray diagnostics for zero-guesswork accuracy",
    "Compassionate, transparent care trusted by families across Hyderabad"
  ];

  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Visual Column — stretches to full right-column height */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image 
                src={doctorImage} 
                alt="Venkateswara Dental Clinic Sanath Nagar" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.aboutImage}
                priority
              />
              
              {/* Floating Badge — bottom left */}
              <div className={styles.experienceBadge}>
                <Award size={24} className={styles.badgeIcon} />
                <div className={styles.badgeText}>
                  <strong>18+ Years</strong>
                  <span>Clinical Excellence</span>
                </div>
              </div>

              {/* Floating Badge — top right */}
              <div className={styles.patientsBadge}>
                <Users size={20} className={styles.patientsIcon} />
                <div className={styles.badgeText}>
                  <strong>15,000+</strong>
                  <span>Healthy Smiles Restored</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className={styles.aboutContent}>
            <span className={styles.subTitle}>About Our Hospital</span>
            <h2>Premier Dental Care in Sanath Nagar, Hyderabad</h2>
            
            <p className={styles.leadText}>
              Founded in 2007 by <strong>Dr. Venkateswara Kalicherla</strong>, Venkateswara Dental Hospital has earned its reputation as the benchmark for painless, reliable dental healthcare.
            </p>

            <p className={styles.bodyText}>
              Whether you are experiencing persistent toothache, seeking replacement for missing teeth, or desiring a radiant smile makeover, our clinic combines cutting-edge dental technology with deep empathy to deliver enduring results.
            </p>

            {/* Checklist */}
            <div className={styles.pointsList}>
              {points.map((pt, idx) => (
                <div key={idx} className={styles.pointItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className={styles.aboutActions}>
              <a href="#contact" className={styles.btnPrimary}>
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} />
              </a>
              <a href="#services" className={styles.btnOutline}>
                <span>Explore Treatments</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
