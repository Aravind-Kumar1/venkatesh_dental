"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ExternalLink, Play, Pause } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  { 
    name: "Jagadeeswar Nallaganchu", 
    date: "1 month ago",
    text: "Had a wonderful experience! The treatment was top-notch, and I truly loved how the dentist handled everything with such care. The follow-up check was a very thoughtful touch. Thank you to the entire team!",
    initial: "J",
    color: "#1A4996"
  },
  { 
    name: "Srinuvaz", 
    date: "1 month ago",
    text: "My damaged teeth are removed and replaced with all new caps in my mouth. Am very much satisfied with doctor's work. Highly suggested dental hospital.",
    initial: "S",
    color: "#123475"
  },
  { 
    name: "Tharru Tharru", 
    date: "2 months ago",
    text: "Root canal treatment done for my tooth. Dr. Venky sir smoothly treated. Fees also reasonable and hospital maintenance is superb. Thanks to doctor and his team.",
    initial: "T",
    color: "#2563eb"
  },
  { 
    name: "DIRECTOR SREEKUMAR DALIPARTHY", 
    date: "2 months ago",
    text: "My teeth extraction done here removal is painless and price also is reasonable. And Dr. Venky explained in detail about caps very well. Am satisfied about treatment in Venkateswara dental hospital.",
    initial: "D",
    color: "#d97706"
  },
  { 
    name: "Sai Srinivas Chanukya Bandaru", 
    date: "5 months ago",
    text: "I had a really good experience at this dental hospital. From the moment I walked in, the staff made me feel comfortable. The doctor took the time to explain my issue, suggested the best treatment, and made sure I felt no discomfort.",
    initial: "S",
    color: "#16a34a"
  },
  { 
    name: "AMARNATH SINGH", 
    date: "7 months ago",
    text: "Excellent treatment for implants in this Venkateswara dental hospital. Implant treatment is fully successful for me. Great doctor team.",
    initial: "A",
    color: "#0284c7"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const googleReviewUrl = "https://www.google.com/search?q=venkateshwara+hospital+sanath+nagar+google+review";

  return (
    <section id="testimonials" className={`section-padding ${styles.testimonialSection}`}>
      <div className="container">
        {/* Header with Google Scorecard */}
        <div className={styles.headerRow}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Patient Satisfaction</span>
            <h2>Google Reviews & Ratings</h2>
            <p className={styles.headerLead}>
              See what our patients have to say about their painless dental journeys with Dr. Venkateswara Kalicherla.
            </p>
          </div>

          <div className={styles.scoreAndControls}>
            <div className={styles.scoreCard}>
              <div className={styles.scoreHeader}>
                <GoogleIcon />
                <div className={styles.scoreStars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#f59e0b" stroke="none" />
                  ))}
                </div>
              </div>
              <div className={styles.scoreNumber}>
                <strong>5.0</strong>
                <span>/ 5.0</span>
              </div>
              <p className={styles.scoreText}>Based on 399+ verified patient reviews</p>
              <a 
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewGoogleBtn}
              >
                <span>View All on Google</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <button
              className={styles.pauseBtn}
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
              <span>{isPaused ? "Play Reviews" : "Pause Reel"}</span>
            </button>
          </div>
        </div>
        
        {/* Infinite Scroll Reel Viewport */}
        <div className={styles.reelViewport}>
          <div 
            className={`${styles.testimonialGrid} ${isPaused ? styles.paused : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 2000);
            }}
          >
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
                    <Star key={`star-${index}-${s}`} size={16} fill="#f59e0b" stroke="none" />
                  ))}
                  <span className={styles.verifiedText}>
                    <CheckCircle2 size={13} className={styles.verifiedIcon} /> Verified Patient
                  </span>
                </div>

                <p className={styles.testimonialText}>"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
