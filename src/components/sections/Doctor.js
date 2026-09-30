"use client";

import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, Calendar, Phone, Star, ShieldCheck } from "lucide-react";
import styles from "./Doctor.module.css";
import doctorImage from "../../../assets/images/venky_doc2.png";

export default function Doctor() {
  const credentials = [
    { title: "Specialization", value: "Chief Dental Surgeon & Implantologist" },
    { title: "Experience", value: "15+ Years in Sanath Nagar, Hyderabad" },
    { title: "Expertise", value: "Painless RCT, Implants & Cosmetic Dentistry" },
    { title: "Patient Satisfaction", value: "5.0 ★ Rating across 399+ Google Reviews" }
  ];

  const highlights = [
    "Over 15,000+ successful dental procedures completed",
    "Specialist in minimally invasive, pain-free dental treatments",
    "Recognized for empathetic patient care & clear diagnosis",
    "Pioneering digital dentistry & modern sterilization standards"
  ];

  return (
    <section id="doctor" className={`section-padding ${styles.doctorSection}`}>
      <div className="container">
        <div className={styles.doctorGrid}>
          {/* Content Column */}
          <div className={styles.doctorContent}>
            <span className={styles.subTitle}>Meet Our Chief Specialist</span>
            <h2>Dr. Venkateswara Kalicherla</h2>
            <div className={styles.designationBadge}>
              <Award size={16} />
              <span>BDS • Chief Dental Surgeon & Implantologist</span>
            </div>

            <p className={styles.bioText}>
              With over 15 years of clinical mastery, <strong>Dr. Venkateswara Kalicherla</strong> is renowned across Hyderabad for transforming dental care into an anxiety-free, gentle experience.
            </p>

            <p className={styles.bioSubtext}>
              He believes dentistry should never be intimidating. Utilizing high-magnification diagnostics and advanced rotary endodontics, Dr. Venkateswara ensures every patient receives precise, painless, and enduring treatments tailored to their lifestyle.
            </p>

            {/* Credentials Grid */}
            <div className={styles.credentialsGrid}>
              {credentials.map((c, i) => (
                <div key={i} className={styles.credentialCard}>
                  <span className={styles.credTitle}>{c.title}</span>
                  <strong className={styles.credValue}>{c.value}</strong>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className={styles.highlightsList}>
              {highlights.map((h, i) => (
                <div key={i} className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.doctorActions}>
              <a href="#contact" className={styles.btnPrimary}>
                <Calendar size={18} />
                <span>Book Doctor Consultation</span>
              </a>
              <a href="tel:+919676316416" className={styles.btnSecondary}>
                <Phone size={16} />
                <span>Direct Clinic Call</span>
              </a>
            </div>
          </div>

          {/* Doctor Portrait Visual Column */}
          <div className={styles.visualColumn}>
            <div className={styles.portraitCard}>
              <div className={styles.imageBackdrop}></div>
              <Image 
                src={doctorImage} 
                alt="Dr. Venkateswara Kalicherla - Chief Dental Surgeon" 
                className={styles.doctorPortrait}
                priority
              />

              <div className={styles.floatingStarBadge}>
                <div className={styles.starRow}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#f59e0b" stroke="none" />
                  ))}
                </div>
                <span>5.0 Star Rated Practitioner</span>
              </div>

              <div className={styles.bottomPill}>
                <ShieldCheck size={18} className={styles.shieldIcon} />
                <div>
                  <strong>Certified Dental Specialist</strong>
                  <p>15+ Years Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
