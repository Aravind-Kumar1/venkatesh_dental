"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Calendar, Clock, MapPin } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../../../public/icon.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const isActive = (path) => pathname === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Transformations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.logoWrap} aria-label="Venkateswara Dental Hospital">
            <Image 
              src={logo} 
              alt="Venkateswara Dental Hospital Logo" 
              className={styles.logo} 
              priority
              loading="eager"
            />
          </Link>

          <nav className={styles.navLinks} aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.navAction}>
            <a href="tel:+919676316416" className={styles.btnSecondary} title="Call Doctor">
              <span className={styles.phoneIconWrap}><Phone size={15} /></span>
              <span className={styles.phoneText}>+91 96763 16416</span>
            </a>
            
            <Link href="/contact" className={styles.btnPrimary}>
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Actions */}
            <a href="tel:+919676316416" className={styles.mobilePhoneBtn} aria-label="Call Hospital">
              <Phone size={15} />
              <span>Call</span>
            </a>

            <button 
              className={styles.mobileMenuBtn} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileBackdrop} ${mobileMenuOpen ? styles.mobileBackdropActive : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <nav className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`} aria-label="Mobile Navigation">
        <div className={styles.mobileMenuHeader}>
          <Image src={logo} alt="Venkateswara Dental" className={styles.mobileLogo} />
          <button 
            className={styles.mobileCloseBtn} 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? styles.mobileNavActive : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.mobileMenuFooter}>
          <div className={styles.mobileTiming}>
            <Clock size={16} />
            <span>Open Daily: 10:00 AM – 9:00 PM</span>
          </div>
          <div className={styles.mobileLocation}>
            <MapPin size={16} />
            <span>Sanath Nagar, Hyderabad</span>
          </div>

          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileAppointmentBtn}
          >
            <Calendar size={18} /> Book Appointment
          </Link>

          <a 
            href="tel:+919676316416"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileCallAction}
          >
            <Phone size={18} /> Call +91 96763 16416
          </a>
        </div>
      </nav>
    </>
  );
}
