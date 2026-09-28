"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.strongCTA}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Book Your Appointment Today</h2>
          <p>
            Don’t ignore dental pain or delay your treatment. Visit the best dental clinic in 
            Sanath Nagar for expert and painless dental care.
          </p>
          <div className={styles.ctaBtnGroup}>
            <a href="tel:+919676316416" className={styles.btnSecondary}>
              <Phone size={20} /> Call Now
            </a>
            <a href="#contact" className={styles.btnSecondary} style={{ background: "transparent", color: "white", borderColor: "white" }}>
              Book Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
