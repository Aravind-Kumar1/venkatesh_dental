import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Globe, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import logo from "../../../public/icon.png";
import mapImg from "../../../assets/images/location_map.png";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogoWrap}>
            <Image 
              src={logo} 
              alt="Venkateswara Dental Hospital Logo" 
              className={styles.footerLogo} 
            />
          </div>
          <p className={styles.brandDesc}>
            Venkateswara Dental Hospital is Sanath Nagar's trusted destination for painless root canal treatments, precision dental implants, and cosmetic smile care under the leadership of Dr. Venkateswara Kalicherla.
          </p>

          <div className={styles.trustBadgesRow}>
            <span className={styles.footerBadge}><ShieldCheck size={14} /> Est. 2011</span>
            <span className={styles.footerBadge}>5.0 ★ Google Rated</span>
          </div>

          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/doctor_venky_actor?stkn=c21vZjVjZHRsMTdj&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon} 
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href="https://www.facebook.com/venky.kalicherla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon} 
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4>Quick Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Hospital</a></li>
            <li><a href="#doctor">Dr. Venkateswara</a></li>
            <li><a href="#services">Specialized Services</a></li>
            <li><a href="#gallery">Smile Transformations</a></li>
            <li><a href="#testimonials">Google Reviews (5.0★)</a></li>
            <li><a href="#contact">Book Appointment</a></li>
          </ul>
        </div>

        {/* Treatments */}
        <div className={styles.footerCol}>
          <h4>Dental Treatments</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#services">Painless Root Canal (RCT)</a></li>
            <li><a href="#services">Permanent Dental Implants</a></li>
            <li><a href="#services">Laser Teeth Whitening</a></li>
            <li><a href="#services">Cosmetic Smile Designing</a></li>
            <li><a href="#services">Invisible Aligners</a></li>
            <li><a href="#services">Pediatric Kids Dentistry</a></li>
            <li><a href="#services">Wisdom Tooth Removal</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className={styles.footerCol}>
          <h4>Clinic Location & Hours</h4>
          <ul className={styles.contactInfo}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><MapPin size={18} /></span>
              <span>
                1st Floor, Flat S-104, SVSS Nivas Complex,<br />
                Above Ratnadeep Super Market, Opp. Gokul Theatre Lane,<br />
                Czech Colony, Sanath Nagar, Hyderabad - 500018
              </span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Phone size={18} /></span>
              <span><a href="tel:+919676316416" className={styles.phoneLink}>+91 96763 16416</a></span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Mail size={18} /></span>
              <span>venkateswaradentals@gmail.com</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Clock size={18} /></span>
              <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Strip */}
      <div className={styles.mapSection}>
        <div className="container">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Venkateswara+Dental+Hospital+Sanath+Nagar+Hyderabad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.mapCard}
            aria-label="Find clinic on Google Maps"
          >
            <Image 
              src={mapImg} 
              alt="Venkateswara Dental Clinic Location Map Sanath Nagar" 
              className={styles.mapImage}
            />
            <div className={styles.mapOverlay}>
              <div className={styles.mapContent}>
                <Globe size={20} />
                <div>
                  <strong>Get Directions in Google Maps</strong>
                  <p>Czech Colony, Sanath Nagar, Hyderabad</p>
                </div>
                <ExternalLink size={16} className={styles.extIcon} />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="container">
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Venkateswara Dental Hospital. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <span>Sanath Nagar's Painless Dental Center</span>
            <span>•</span>
            <a href="#contact">Emergency Booking</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
