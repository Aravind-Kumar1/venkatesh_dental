"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sparkles, MonitorCheck, CheckCircle2, Stethoscope, HeartPulse } from "lucide-react";
import styles from "./Services.module.css";
import rootCanalImage from "../../../assets/images/service_root_canal.png";
import implantImage from "../../../assets/images/dental_implant.png";
import whiteningImage from "../../../assets/images/teeth_white.png";
import cosmeticImage from "../../../assets/images/cos_service.png";
import alignersImage from "../../../assets/images/aligners.png";
import extractionImage from "../../../assets/images/child-ser.png";
import heroImage from "../../../assets/images/venky_hero.png";

const services = [
  { id: 1, title: "Root Canal Treatment", description: "Advanced and painless root canal treatment to save infected teeth and relieve pain.", image: rootCanalImage, icon: <Zap size={24} /> },
  { id: 2, title: "Dental Implants", description: "Permanent and natural-looking solution for missing teeth with long-lasting results.", image: implantImage, icon: <ShieldCheck size={24} /> },
  { id: 3, title: "Teeth Cleaning & Whitening", description: "Professional cleaning and whitening to maintain oral hygiene and enhance your smile.", image: whiteningImage, icon: <Sparkles size={24} /> },
  { id: 4, title: "Cosmetic Dentistry", description: "Smile designing, veneers, and aesthetic dental treatments for a perfect smile.", image: cosmeticImage, icon: <MonitorCheck size={24} /> },
  { id: 5, title: "Invisible Aligners (Invisalign)", description: "Straighten your teeth with clear, comfortable, and removable aligners.", image: alignersImage, icon: <CheckCircle2 size={24} /> },
  { id: 6, title: "Tooth Extraction & Wisdom Tooth Removal", description: "Safe and painless tooth removal procedures including impacted wisdom teeth.", image: extractionImage, icon: <Stethoscope size={24} /> },
  { id: 7, title: "Emergency Dental Care", description: "Immediate treatment for severe tooth pain, infections, and dental emergencies.", image: heroImage, icon: <HeartPulse size={24} /> },
];

export default function Services() {
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
    <section id="services" className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Our Services</span>
          <h2>Our Dental Services</h2>
        </div>
        <motion.div 
          className={styles.servicesGrid}
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={styles.serviceCard}
              variants={fadeIn}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  className={styles.serviceImg}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className={styles.learnMore}>
                  <span>Book Appointment</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
