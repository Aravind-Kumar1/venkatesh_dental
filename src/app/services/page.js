"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { 
  Zap, ShieldCheck, Sparkles, Smile, CheckCircle2, 
  HeartPulse, Stethoscope, Clock, ArrowRight, Phone, Calendar,
  Star, Award
} from "lucide-react";
import styles from "./services.module.css";
import rootCanalImage from "../../../assets/images/service_root_canal.png";
import implantImage from "../../../assets/images/dental_implant.png";
import whiteningImage from "../../../assets/images/teeth_white.png";
import cosmeticImage from "../../../assets/images/cos_service.png";
import alignersImage from "../../../assets/images/aligners.png";
import pediatricImage from "../../../assets/images/child-ser.png";
import extractionImage from "../../../assets/images/venky_hero.png";
import emergencyImage from "../../../assets/images/emergency_dental.jpg";
import denturesImage from "../../../assets/images/dentures_crowns.jpg";

const services = [
  { 
    id: 1,
    slug: "painless-root-canal",
    title: "Painless Root Canal (RCT)", 
    tag: "Pain Relief",
    description: "Advanced single-sitting rotary RCT designed to eliminate infection and relieve acute toothache completely painlessly.",
    image: rootCanalImage, 
    icon: <Zap size={22} />,
    color: "#3b82f6"
  },
  { 
    id: 2,
    slug: "dental-implants",
    title: "Permanent Dental Implants", 
    tag: "Restorative",
    description: "Titanium implants offering permanent, natural-looking replacement for missing teeth with maximum bite strength.",
    image: implantImage, 
    icon: <ShieldCheck size={22} />,
    color: "#10b981"
  },
  { 
    id: 3,
    slug: "teeth-whitening",
    title: "Teeth Cleaning & Whitening", 
    tag: "Preventive & Cosmetic",
    description: "Ultrasonic scaling and enamel-safe laser whitening that removes stubborn stains and restores brilliant brightness.",
    image: whiteningImage, 
    icon: <Sparkles size={22} />,
    color: "#f59e0b"
  },
  { 
    id: 4,
    slug: "cosmetic-smile-design",
    title: "Cosmetic Smile Designing", 
    tag: "Aesthetics",
    description: "Ceramic veneers, composite bonding, and personalized smile makeovers to correct gaps, chips, and discolorations.",
    image: cosmeticImage, 
    icon: <Smile size={22} />,
    color: "#ec4899"
  },
  { 
    id: 5,
    slug: "invisible-aligners",
    title: "Invisible Aligners", 
    tag: "Orthodontics",
    description: "Discreet, removable clear aligners that straighten crooked teeth without the discomfort of metal wires.",
    image: alignersImage, 
    icon: <CheckCircle2 size={22} />,
    color: "#8b5cf6"
  },
  { 
    id: 6,
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry (Kids Care)", 
    tag: "Children's Dental",
    description: "Gentle and friendly dental care for children, focusing on cavity prevention, fluoride therapy, and preventive checkups.",
    image: pediatricImage, 
    icon: <Stethoscope size={22} />,
    color: "#06b6d4"
  },
  { 
    id: 7,
    slug: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal", 
    tag: "Oral Surgery",
    description: "Safe, minimally invasive extractions for impacted wisdom teeth, severe fractures, or decayed teeth with rapid recovery.",
    image: extractionImage, 
    icon: <Clock size={22} />,
    color: "#f97316"
  },
  { 
    id: 8,
    slug: "emergency-dental-care",
    title: "Emergency Dental Care", 
    tag: "Immediate Relief",
    description: "Same-day urgent attention for intense tooth trauma, broken crowns, dental abscesses, and sudden severe pain.",
    image: emergencyImage, 
    icon: <HeartPulse size={22} />,
    color: "#ef4444"
  },
  { 
    id: 9,
    slug: "dentures-and-crowns",
    title: "Dentures & Dental Crowns", 
    tag: "Restorative",
    description: "High-quality removable dentures and precision ceramic crowns that restore full chewing function and a natural-looking smile.",
    image: denturesImage, 
    icon: <Award size={22} />,
    color: "#a855f7"
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <div className="mesh-bg" />
      <Navbar />

      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.titleAccent}>Specialized</span> Dental Services
          </h1>
          <p className={styles.heroSubtitle}>
            Modern clinical technology meets gentle patient care. Each procedure is performed with strict sterilization protocols and long-term oral health in mind — delivered painlessly by Dr. Venkateswara Kalicherla.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}><Zap size={14} /> 100% Painless Procedures</span>
            <span className={styles.heroBadge}><ShieldCheck size={14} /> Hospital-Grade Sterilization</span>
            <span className={styles.heroBadge}><Star size={14} fill="currentColor" /> 5.0★ Google Rated</span>
          </div>
        </div>
      </section>

      <main>
        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={styles.serviceCard}
                >
                  {/* Icon badge */}
                  <div className={styles.iconBadge} style={{ background: `${service.color}18`, color: service.color }}>
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
                    <h2>{service.title}</h2>
                    <p className={styles.cardDesc}>{service.description}</p>
                    
                    <div className={styles.cardCta}>
                      <span className={styles.viewDetailsBtn}>
                        View Full Details <ArrowRight size={14} className={styles.ctaArrow} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Strip */}
        <section className={styles.whyStrip}>
          <div className="container">
            <div className={styles.stripContent}>
              <div className={styles.stripText}>
                <Award size={28} className={styles.stripIcon} />
                <div>
                  <h3>15+ Years of Clinical Excellence</h3>
                  <p>Dr. Venkateswara Kalicherla has performed over 15,000 successful dental procedures with a 5.0★ patient satisfaction rating.</p>
                </div>
              </div>
              <div className={styles.stripActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  <Calendar size={16} /> Book Consultation
                </Link>
                <a href="tel:+919676316416" className={styles.btnSecondary}>
                  <Phone size={16} /> +91 96763 16416
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
