"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import before1 from "../../../assets/images/ven_before.jpeg";
import after1 from "../../../assets/images/ven_after.jpeg";
import before2 from "../../../assets/images/ven_before_two.jpeg";
import after2 from "../../../assets/images/ven_after_two.png";
import before3 from "../../../assets/images/ven_before_three.png";
import after3 from "../../../assets/images/ven_after_three.jpeg";
import before4 from "../../../assets/images/ven_before_four.png";
import after4 from "../../../assets/images/ven_after_four.png";

export default function Gallery() {
  const transformations = [
    {
      title: "Smile Restoration",
      before: before1,
      after: after1,
      tag: "Cosmetic Dentistry"
    },
    {
      title: "Dental Correction",
      before: before2,
      after: after2,
      tag: "Restorative"
    },
    {
      title: "Advanced Smile Care",
      before: before3,
      after: after3,
      tag: "Oral Surgery"
    },
    {
      title: "Teeth Alignment",
      before: before4,
      after: after4,
      tag: "Orthodontics",
      containImage: true
    }
  ];

  return (
    <section id="gallery" className={`${styles.gallerySection} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Transformations</span>
          <h2>Smile Transformation Gallery</h2>
          <p>Real results from real patients. Experience the power of a healthy smile.</p>
        </div>
        <div className={styles.transformationGrid}>
          {[...transformations, ...transformations].map((item, index) => (
            <div key={`${item.title}-${index}`} className={styles.transformationCard}>
              <div className={styles.comparisonContainer}>
                <div className={styles.comparisonItem}>
                  <Image 
                    src={item.before} 
                    alt={`${item.title} 1`} 
                    className={`${styles.galleryImage} ${item.positionTop ? styles.positionTop : ''} ${item.positionBottom ? styles.positionBottom : ''} ${item.containImage ? styles.contain : ''}`} 
                  />
                  {!item.noLabels && <span className={styles.compareTag}>Before</span>}
                </div>
                <div className={styles.comparisonItem}>
                  <Image 
                    src={item.after} 
                    alt={`${item.title} 2`} 
                    className={`${styles.galleryImage} ${item.positionTop ? styles.positionTop : ''} ${item.positionBottom ? styles.positionBottom : ''} ${item.containImage ? styles.contain : ''}`} 
                  />
                  {item.eyeBlur && <div className={styles.eyeBlurOverlay}></div>}
                  {!item.noLabels && <span className={styles.compareTag}>After</span>}
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
    </section>
  );
}
