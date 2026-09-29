"use client";

import React from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  { 
    q: "Who is the chief dentist at Venkateswara Dental Hospital?", 
    a: "Dr. Venkateswara Kalicherla (BDS) is the Chief Dental Surgeon and Implantologist, possessing over 18 years of clinical expertise treating complex dental conditions with painless, cutting-edge techniques." 
  },
  { 
    q: "Is root canal treatment (RCT) really painless?", 
    a: "Yes, absolutely. We use modern rotary endodontic systems, high-accuracy apex locators, and computerized local anesthesia so you experience virtually zero pain during and after the procedure." 
  },
  { 
    q: "How permanent are dental implants?", 
    a: "Dental implants fuse directly with your jawbone through osseointegration, providing a permanent, durable root foundation that can last a lifetime with normal oral hygiene and regular dental checkups." 
  },
  { 
    q: "What are your clinic timings and days open?", 
    a: "We are open 7 days a week from 10:00 AM to 9:00 PM, located at Czech Colony, Sanath Nagar (Above Ratnadeep Super Market). Walk-ins and pre-booked appointments are both welcome." 
  },
  { 
    q: "Do you provide same-day emergency dental care?", 
    a: "Yes. Patients suffering from acute toothache, broken crowns, dental trauma, or bleeding gums receive priority emergency relief on the same day." 
  },
  { 
    q: "Are clear aligners suitable for all age groups?", 
    a: "Yes. Clear, removable aligners are suitable for teens and adults seeking discreet, comfortable tooth straightening without the restrictions of traditional metal brackets and wires." 
  }
];

export default function FAQ() {
  return (
    <section className={`section-padding ${styles.faqSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p className={styles.headerLead}>
            Have questions before booking? Here are quick answers to the most common queries from our patients in Sanath Nagar.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <span className={styles.questionText}>
                  <HelpCircle size={18} className={styles.qIcon} />
                  {faq.q}
                </span>
                <span className={styles.iconWrap}>
                  <ChevronDown size={18} className={styles.chevron} />
                </span>
              </summary>
              <div className={styles.answerWrap}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className={styles.faqFooter}>
          <p>Have a question not answered here?</p>
          <a href="tel:+919676316416" className={styles.askBtn}>
            <Phone size={15} />
            <span>Call Our Dental Helpline: +91 96763 16416</span>
          </a>
        </div>
      </div>
    </section>
  );
}
