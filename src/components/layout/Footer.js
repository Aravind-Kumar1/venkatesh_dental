import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Globe, ExternalLink } from "lucide-react";
import logo from "../../../public/icon.png";
import mapImg from "../../../assets/images/location_map.png";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Image src={logo} alt="Venkateswara Dental" className={styles.footerLogo} />
          <p>
            Venkateswara Dental Hospital is a leading provider of advanced and painless dental care in Sanath Nagar, Hyderabad. 
            We are dedicated to helping you achieve a healthy and confident smile.
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/venkateswaradentalhospitals?igsh=MTMweXE3ejI0YjUyNw%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon} 
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61570808755944" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIcon} 
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#doctor">Our Expert</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Our Services</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#services">Root Canal</a></li>
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#services">Teeth Whitening</a></li>
            <li><a href="#services">Cosmetic Dentistry</a></li>
            <li><a href="#services">Invisible Aligners</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <ul className={styles.contactInfo}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><MapPin size={20} /></span>
              <span>
                1st Floor, Flat S-104, SVSS Nivas Complex,<br />
                Opp. Gokul Theatre Lane, Sanath Nagar,<br />
                Hyderabad - 500018
              </span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Phone size={20} /></span>
              <span>+91 96763 16416</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Mail size={20} /></span>
              <span>venkateswaradentals@gmail.com</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}><Clock size={20} /></span>
              <span>Daily: 10:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.mapFullWidth}>
        <div className="container">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Venkateswara+Dental+Hospital+Sanath+Nagar+Hyderabad" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <div className={styles.mapIcon}>
              <Image 
                src={mapImg} 
                alt="Clinic Location Map" 
                className={styles.mapImage}
              />
              <div className={styles.mapLabel}>
                <Globe size={16} />
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Venkateswara Dental Hospital. All Rights Reserved.</p>
          <p>Painless Dental Care Specialists</p>
        </div>
      </div>
    </footer>
  );
}
