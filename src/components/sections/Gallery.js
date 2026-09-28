"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Play, Pause, ArrowRight, Sparkles } from "lucide-react";
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
      title: "Smile Restoration",
      description: "Complete restorative smile enhancement correcting alignment, spacing and bite function.",
      before: before1,
      after: after1,
      tag: "Cosmetic Dentistry"
    },
    {
      id: 2,
      title: "Dental Correction",
      description: "Advanced precision correction restoring natural smile aesthetics and confidence.",
      before: before2,
      after: after2,
      tag: "Restorative"
    },
    {
      id: 3,
      title: "Advanced Smile Care",
      description: "Specialized dental rehabilitation with seamless natural tooth contours.",
      before: before3,
      after: after3,
      tag: "Oral Surgery"
    },
    {
      id: 4,
      title: "Teeth Alignment",
      description: "Orthodontic smile alignment delivering a harmonious, balanced bite.",
      before: before4,
      after: after4,
      tag: "Orthodontics",
      containImage: true
    }
  ];

  return (
    <section id="gallery" className={`${styles.gallerySection} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeaderWrap}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Transformations</span>
            <h2>Smile Transformation Gallery</h2>
            <p>Real results from real patients. Tap any result to inspect Before & After in detail.</p>
          </div>
          <div className={styles.galleryControls}>
            <button 
              className={styles.pauseBtn}
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play scrolling animation" : "Pause scrolling animation"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
              <span>{isPaused ? "Resume" : "Pause"}</span>
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
                    alt={`${item.title} Before`} 
                    loading="eager"
                    unoptimized
                    className={`${styles.galleryImage} ${item.containImage ? styles.contain : ''}`} 
                  />
                  <span className={styles.compareTag}>Before</span>
                </div>
                <div className={styles.comparisonItem}>
                  <Image 
                    src={item.after} 
                    alt={`${item.title} After`} 
                    loading="eager"
                    unoptimized
                    className={`${styles.galleryImage} ${item.containImage ? styles.contain : ''}`} 
                  />
                  <span className={styles.compareTag}>After</span>
                </div>
                <div className={styles.hoverOverlay}>
                  <span className={styles.inspectHint}>
                    <ZoomIn size={18} /> Tap to View
                  </span>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed Before & After view on click */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
            >
              <X size={24} />
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
                    unoptimized
                    className={styles.modalImage}
                  />
                  <span className={`${styles.compareTag} ${styles.modalBadge}`}>Before</span>
                </div>
              </div>
              <div className={styles.modalSide}>
                <div className={styles.modalImageWrap}>
                  <Image 
                    src={selectedItem.after} 
                    alt="After Treatment" 
                    unoptimized
                    className={styles.modalImage}
                  />
                  <span className={`${styles.compareTag} ${styles.modalBadge} ${styles.afterBadge}`}>After</span>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <a 
                href="#contact" 
                className={styles.modalCta}
                onClick={() => setSelectedItem(null)}
              >
                Book This Treatment <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
