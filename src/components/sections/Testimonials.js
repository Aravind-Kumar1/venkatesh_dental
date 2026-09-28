"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  { 
    name: "Jagadeeswar Nallaganchu", 
    date: "1 month ago",
    text: "Had a wonderful experience! The treatment was top-notch, and I truly loved how the dentist handled everything with such care. The follow-up check was a very thoughtful touch. Thank you to the entire team!",
    initial: "J",
    color: "#4285F4"
  },
  { 
    name: "Srinuvaz", 
    date: "1 month ago",
    text: "My damaged teeth are removed and replaced with all new caps in my mouth. Am very much satisfied with doctors work. highly suggested dental hospital.",
    initial: "S",
    color: "#EA4335"
  },
  { 
    name: "Tharru Tharru", 
    date: "2 months ago",
    text: "Root canal treatment done for my tooth. Dr venky sir smoothly treated . Fees also reasonable and hospital maintenance is superb. Thanx to dr and his team.",
    initial: "T",
    color: "#673AB7"
  },
  { 
    name: "DIRECTOR SREEKUMAR DALIPARTHY", 
    date: "2 months ago",
    text: "My Teeth extraction done here removal is painless and price also is reasonable. and dr venky explained in details about caps is very well .thanx Andi .am satisfied about treatment in Venkateswara dental hospital.",
    initial: "D",
    color: "#f59e0b"
  },
  { 
    name: "Sai Srinivas Chanukya Bandaru", 
    date: "5 months ago",
    text: "I had a really good experience at this dental hospital. From the moment I walked in, the staff made me feel comfortable. The doctor took the time to explain my issue, suggested the best treatment, and made sure I felt no discomfort.",
    initial: "S",
    color: "#34A853"
  },
  { 
    name: "AMARNATH SINGH", 
    date: "7 months ago",
    text: "Excellent treatment for implants in this venkateswa dental hospital .implant treatment is Full successful for me . Great doctors team .",
    initial: "A",
    color: "#FBBC05"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className={`${styles.testimonialSection} section-padding`}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why People give us 5 star ratings</span>
            <h2>Google Reviews</h2>
          </div>
          <a 
            href="https://www.google.com/search?q=venkateshwara+hospital+sanath+nagar+google+review&sca_esv=51551707418ed362&biw=1536&bih=730&sxsrf=ANbL-n72IIN1SpGgnrsoLuV-9zZun1nddA%3A1776144952370&ei=ONLdaZykFr-TseMPnb75mAc&ved=0ahUKEwicoNLHz-yTAxW_SWwGHR1fHnMQ4dUDCBE&uact=5&oq=venkateshwara+hospital+sanath+nagar+google+review&gs_lp=Egxnd3Mtd2l6LXNlcnAiMXZlbmthdGVzaHdhcmEgaG9zcGl0YWwgc2FuYXRoIG5hZ2FyIGdvb2dsZSByZXZpZXcyBRAhGKABSLoWUI8DWNYUcAF4AJABAJgB0wGgAYQTqgEGMC4xMy4yuAEDyAEA-AEBmAIPoAKwEsICCxAAGIAEGKIEGLADwgIIEAAY7wUYsAPCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICCBAAGIAEGKIEwgIFEAAY7wXCAgQQIRgVmAMAiAYBkAYFkgcGMS4xMi4yoAf7MLIHBjAuMTIuMrgHrRLCBwYxLjEzLjHIBxeACAE&sclient=gws-wiz-serp#sv=CAESzAEKuAEStQEKd0FNbjMteVR1UFFfR1J5UU9wbjhiQk5Vb2JFU1VMUWhsb3VNaXJKaEpSdnQweHRaRkE4bFlqTFVWc0h0bGw3eEg5LTVCVjlUZ09GUXZBbEJJNElibnBrM2hWcW1YN2JCVDhTMnhQdWVUanJta0RCWTQ1NTFiR0MwEhZWdExkYWRYcU5hLU1zZU1QeEpTRmNRGiJBSktMRm1JZlE3MlBVUXJzMGRzay1mbWVDYWN3WFlEbk93EgQ4MDUxGgEzKgAwADgBQAAYACC7sZz9DDoASgIQAg" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllBtn}
          >
            View All Reviews &gt;
          </a>
        </div>
        
        <div className={styles.testimonialGrid}>
          {[...testimonials, ...testimonials].map((t, index) => (
            <div 
              key={`${t.name}-${index}`} 
              className={styles.testimonialCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar} style={{ backgroundColor: t.color }}>
                    {t.initial}
                  </div>
                  <div className={styles.meta}>
                    <h4>{t.name}</h4>
                    <span className={styles.date}>{t.date}</span>
                  </div>
                </div>
                <div className={styles.googleBrand}>
                  <GoogleIcon />
                </div>
              </div>

              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={`star-${index}-${s}`} size={16} fill="#fbbc05" stroke="none" />
                ))}
              </div>

              <p className={styles.testimonialText}>{t.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.googleFooter}>
          <p>Google rating score: <strong>5.0</strong> of 5, based on <strong>199 reviews</strong></p>
          <a 
            href="https://www.google.com/search?q=venkateshwara+hospital+sanath+nagar+google+review&sca_esv=51551707418ed362&biw=1536&bih=730&sxsrf=ANbL-n72IIN1SpGgnrsoLuV-9zZun1nddA%3A1776144952370&ei=ONLdaZykFr-TseMPnb75mAc&ved=0ahUKEwicoNLHz-yTAxW_SWwGHR1fHnMQ4dUDCBE&uact=5&oq=venkateshwara+hospital+sanath+nagar+google+review&gs_lp=Egxnd3Mtd2l6LXNlcnAiMXZlbmthdGVzaHdhcmEgaG9zcGl0YWwgc2FuYXRoIG5hZ2FyIGdvb2dsZSByZXZpZXcyBRAhGKABSLoWUI8DWNYUcAF4AJABAJgB0wGgAYQTqgEGMC4xMy4yuAEDyAEA-AEBmAIPoAKwEsICCxAAGIAEGKIEGLADwgIIEAAY7wUYsAPCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICCBAAGIAEGKIEwgIFEAAY7wXCAgQQIRgVmAMAiAYBkAYFkgcGMS4xMi4yoAf7MLIHBjAuMTIuMrgHrRLCBwYxLjEzLjHIBxeACAE&sclient=gws-wiz-serp#sv=CAESzAEKuAEStQEKd0FNbjMteVR1UFFfR1J5UU9wbjhiQk5Vb2JFU1VMUWhsb3VNaXJKaEpSdnQweHRaRkE4bFlqTFVWc0h0bGw3eEg5LTVCVjlUZ09GUXZBbEJJNElibnBrM2hWcW1YN2JCVDhTMnhQdWVUanJta0RCWTQ1NTFiR0MwEhZWdExkYWRYcU5hLU1zZU1QeEpTRmNRGiJBSktMRm1JZlE3MlBVUXJzMGRzay1mbWVDYWN3WFlEbk93EgQ4MDUxGgEzKgAwADgBQAAYACC7sZz9DDoASgIQAg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewUs}
          >
            Review Us On
          </a>
        </div>
      </div>
    </section>
  );
}
