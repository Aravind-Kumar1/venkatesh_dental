"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  { q: "Who is the best dentist in Sanath Nagar?", a: "Venkateswara Dental Hospital is highly rated for advanced and painless dental treatments." },
  { q: "Do you provide painless root canal treatment?", a: "Yes, we use advanced techniques to ensure comfortable and pain-free RCT." },
  { q: "Do you offer dental implants in Sanath Nagar?", a: "Yes, we provide long-lasting and natural-looking dental implants." },
  { q: "Do you treat dental emergencies?", a: "Yes, we provide immediate care for dental pain and emergencies." }
];

export default function FAQ() {
  return (
    <section className={`${styles.faqSection} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <motion.details 
              key={i} 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary>{faq.q} <ChevronRight size={18} /></summary>
              <p>{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
