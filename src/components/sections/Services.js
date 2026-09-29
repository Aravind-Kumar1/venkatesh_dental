"use client";

import React from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Sparkles, Smile, CheckCircle2, HeartPulse, Stethoscope, Clock, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";
import rootCanalImage from "../../../assets/images/service_root_canal.png";
import implantImage from "../../../assets/images/dental_implant.png";
import whiteningImage from "../../../assets/images/teeth_white.png";
import cosmeticImage from "../../../assets/images/cos_service.png";
import alignersImage from "../../../assets/images/aligners.png";
import pediatricImage from "../../../assets/images/child-ser.png";
import extractionImage from "../../../assets/images/venky_hero.png";
import emergencyImage from "../../../assets/images/emergency_dental.jpg";

const services = [
  { 
    id: 1, 
    title: "Painless Root Canal (RCT)", 
    tag: "Pain Relief",
    description: "Advanced single-sitting rotary RCT designed to eliminate infection and relieve acute toothache completely painlessly.", 
    image: rootCanalImage, 
    icon: <Zap size={20} /> 
  },
  { 
    id: 2, 
    title: "Permanent Dental Implants", 
    tag: "Restorative",
    description: "Titanium implants offering permanent, natural-looking replacement for missing teeth with maximum bite strength.", 
    image: implantImage, 
    icon: <ShieldCheck size={20} /> 
  },
  { 
    id: 3, 
    title: "Teeth Cleaning & Whitening", 
    tag: "Preventive & Cosmetic",
    description: "Ultrasonic scaling and enamel-safe laser whitening that removes stubborn stains and restores brilliant brightness.", 
    image: whiteningImage, 
    icon: <Sparkles size={20} /> 
  },
  { 
    id: 4, 
    title: "Cosmetic Smile Designing", 
    tag: "Aesthetics",
    description: "Ceramic veneers, composite bonding, and personalized smile makeovers to correct gaps, chips, and discolorations.", 
    image: cosmeticImage, 
    icon: <Smile size={20} /> 
  },
  { 
    id: 5, 
    title: "Invisible Aligners", 
    tag: "Orthodontics",
    description: "Discreet, removable clear aligners that straighten crooked teeth without the discomfort of metal wires.", 
    image: alignersImage, 
    icon: <CheckCircle2 size={20} /> 
  },
  { 
    id: 6, 
    title: "Pediatric Dentistry (Kids Care)", 
    tag: "Children's Dental",
    description: "Gentle and friendly dental care for children, focusing on cavity prevention, fluoride therapy, and preventive checkups.", 
    image: pediatricImage, 
    icon: <Stethoscope size={20} /> 
  },
  { 
    id: 7, 
    title: "Wisdom Tooth Removal", 
    tag: "Oral Surgery",
    description: "Safe, minimally invasive extractions for impacted wisdom teeth, severe fractures, or decayed teeth with rapid recovery.", 
    image: extractionImage, 
    icon: <Clock size={20} /> 
  },
  { 
    id: 8, 
    title: "Emergency Dental Care", 
    tag: "Immediate Relief",
    description: "Same-day urgent attention for intense tooth trauma, broken crowns, dental abscesses, and sudden severe pain.", 
    image: emergencyImage, 
    icon: <HeartPulse size={20} /> 
  }
];

export default function Services() {
  return (
    <section id="services" className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Comprehensive Treatments</span>
          <h2>Our Specialized Dental Services</h2>
          <p className={styles.headerLead}>
            Modern clinical technology meets gentle patient care. Each procedure is performed with strict sterilization and long-term oral health in mind.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              {/* Top Right Corner Icon */}
              <div className={styles.topRightIcon} title={service.title}>
                {service.icon}
              </div>

              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  className={styles.serviceImg}
                />
                <span className={styles.tagBadge}>{service.tag}</span>
              </div>
              
              <div className={styles.cardInfo}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <a href="#contact" className={styles.learnMore}>
                  <span>Book Consultation</span>
                  <ArrowRight size={14} className={styles.arrow} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
