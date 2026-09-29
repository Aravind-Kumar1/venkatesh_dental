"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Play, Pause, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./Gallery.module.css";
import before1 from "../../../assets/images/ven_before.jpeg";
import after1 from "../../../assets/images/ven_after.jpeg";
import before2 from "../../../assets/images/ven_before_two.jpeg";
import after2 from "../../../assets/images/ven_after_two.jpg";
import before3 from "../../../assets/images/ven_before_three.jpg";
import after3 from "../../../assets/images/ven_after_three.jpeg";
import before4 from "../../../assets/images/ven_before_four.jpg";
import after4 from "../../../assets/images/ven_after_four.jpg";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const transformations = [
    {
      id: 1,
      title: "Smile Restoration & Alignment",
      procedure: "Cosmetic Restoration & Veneers",
      description: "Full restorative smile correction resolving chronic tooth wear, spacing, and restoring natural brightness.",
      before: before1,
      after: after1,
      tag: "Cosmetic Dentistry"
    },
    {
      id: 2,
      title: "Dental Cap & Shade Matching",
      procedure: "Crown Rehabilitation",
      description: "Custom crown fabrication and shade matching for seamless blend with surrounding natural teeth.",
      before: before2,
      after: after2,
      tag: "Restorative"
    },
    {
      id: 3,
      title: "Full Arch Smile Rehabilitation",
      procedure: "Root Canal & Bridge",
      description: "Pain-free root canal treatment combined with ceramic crowns to restore chewing function and aesthetics.",
      before: before3,
      after: after3,
      tag: "Oral Rehabilitation"
    },
    {
      id: 4,
      title: "Tooth Realignment & Space Closure",
      procedure: "Orthodontics & Aligners",
      description: "Orthodontic smile alignment delivering an even bite, closing awkward gaps, and boosting self-confidence.",
      before: before4,
      after: after4,
      tag: "Orthodontics"
    }
  ];

  return (
    <section id="gallery" className={`section-padding ${styles.gallerySection}`}>
      <div className="container">
        <div className={styles.sectionHeaderWrap}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Smile Gallery</span>
            <h2>Proven Clinical Transformations</h2>
            <p className={styles.headerLead}>
              Real patient results treated right here at our Sanath Nagar clinic. Tap any case to compare Before and After in high definition.
            </p>
          </div>
          
          <div className={styles.galleryControls}>
            <button 
              className={styles.pauseBtn}
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={15} /> : <Pause size={15} />}
              <span>{isPaused ? "Play Reel" : "Pause Reel"}</span>
            </button>
          </div>
        </div>

        <div 
          className={`${styles.transformationGrid} ${isPaused ? styles.paused : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          {[...transformations, ...transformations].map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={styles.transformationCard}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
            >
              <div className={styles.comparisonContainer}>
                <div className={styles.comparisonItem}>
                  <Image 
                    src={item.before} 
                    alt={`${item.title} Before Treatment`} 
                    loading="lazy"
                    className={styles.galleryImage} 
                  />
                  <span className={styles.beforeTag}>Before</span>
                </div>
                
                <div className={styles.comparisonItem}>
                  <Image 
                    src={item.after} 
                    alt={`${item.title} After Treatment`} 
                    loading="lazy"
                    className={styles.galleryImage} 
                  />
                  <span className={styles.afterTag}>After</span>
                </div>

                <div className={styles.hoverOverlay}>
                  <span className={styles.inspectHint}>
                    <ZoomIn size={16} /> Tap to Compare
                  </span>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p className={styles.procedureText}>{item.procedure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed Before & After view */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            
            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>{selectedItem.tag}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>

            <div className={styles.modalComparison}>
              <div className={styles.modalSide}>
                <div className={styles.modalImageWrap}>
                  <Image 
                    src={selectedItem.before} 
                    alt="Before Treatment" 
                    className={styles.modalImage}
                  />
                  <span className={styles.modalBeforeBadge}>Before Treatment</span>
                </div>
              </div>

              <div className={styles.modalSide}>
                <div className={styles.modalImageWrap}>
                  <Image 
                    src={selectedItem.after} 
                    alt="After Treatment" 
                    className={styles.modalImage}
                  />
                  <span className={styles.modalAfterBadge}>After Result</span>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <div className={styles.modalGuarantee}>
                <CheckCircle2 size={16} className={styles.guaranteeIcon} />
                <span>Personalized treatment plan tailored to your smile</span>
              </div>
              <a 
                href="#contact" 
                className={styles.modalCta}
                onClick={() => setSelectedItem(null)}
              >
                <span>Consult for This Treatment</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
