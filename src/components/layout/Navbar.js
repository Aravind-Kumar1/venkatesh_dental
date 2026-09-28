"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../../../public/icon.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.nav}`}>
          <a href="#home" className={styles.logoWrap}>
            <Image src={logo} alt="Venkateswara Dental" className={styles.logo} priority />
          </a>

          <nav className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#gallery" className={styles.navLink}>Gallery</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.navAction}>
            <a href="tel:+919676316416" className={styles.btnSecondary}>
              <Phone size={18} />
              <span>+91 96763 16416</span>
            </a>
            <a href="#contact" className={styles.btnPrimary}>
              Book Appointment
            </a>
            <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <nav className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a 
            href="tel:+919676316416"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileCallBtn}
          >
            <Phone size={20} /> +91 96763 16416
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileCallBtn}
            style={{ background: '#f0f9ff', color: 'var(--primary)', marginTop: '-1rem' }}
          >
            Book Appointment
          </a>
        </div>
      </nav>

      {showCallModal && (
        <div className={styles.modalOverlay} onClick={() => setShowCallModal(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowCallModal(false)}><X /></button>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}><Phone size={24} /></div>
              <h3>Emergency & Quick Call</h3>
            </div>
            <div className={styles.callList}>
              <a href="tel:+919676316416" className={styles.callItem}>
                <div className={styles.callLabel}>Call Clinic</div>
                <div className={styles.callNumber}>+91 96763 16416</div>
              </a>
            </div>
            <p className={styles.modalFooter}>Open Daily – Closes 9:00 PM</p>
          </div>
        </div>
      )}
    </>
  );
}
