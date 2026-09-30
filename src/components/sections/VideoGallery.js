"use client";

import React, { useState, useRef } from "react";
import styles from "./VideoGallery.module.css";
import { Play, Pause, Video, CheckCircle2 } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Patient Experience & Painless RCT",
    subtitle: "Sanath Nagar Resident",
    description: "Complete painless treatment experience at Venkateswara Dental Hospital.",
    videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/ven_test_one_e97c12.mp4",
    posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/ven_test_one_e97c12.jpg"
  },
  {
    id: 2,
    title: "Dental Cap & Restoration Success",
    subtitle: "Restorative Patient",
    description: "Restoring smile confidence through expert dental bridge and capping.",
    videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/WhatsApp_Video_2026-04-13_at_6.00.01_PM_hxwkwo.mp4",
    posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/WhatsApp_Video_2026-04-13_at_6.00.01_PM_hxwkwo.jpg"
  },
  {
    id: 3,
    title: "Smile Care & Comfort Feedback",
    subtitle: "Regular Checkup & Scaling",
    description: "Patient sharing how friendly and reassuring Dr. Venkateswara and team are.",
    videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/WhatsApp_Video_2026-04-13_at_10.22.09_AM_xueedw.mp4",
    posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/WhatsApp_Video_2026-04-13_at_10.22.09_AM_xueedw.jpg"
  },
  {
    id: 4,
    title: "Tooth Extraction & Implants Story",
    subtitle: "Implant Patient",
    description: "Witnessing real results of healthy dental rehabilitation.",
    videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145826/WhatsApp_Video_2026-04-13_at_10.23.35_AM_iuqzfm.mp4",
    posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145826/WhatsApp_Video_2026-04-13_at_10.23.35_AM_iuqzfm.jpg"
  }
];

export default function VideoGallery() {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState({});
  const [isPausedHover, setIsPausedHover] = useState(false);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause();
        }
      });
      video.play();
    } else {
      video.pause();
    }
  };

  const handleStateChange = (index, isPlaying) => {
    setPlayingStates(prev => ({ ...prev, [index]: isPlaying }));
  };

  const isAnyVideoPlaying = Object.values(playingStates).some(state => state);

  return (
    <section id="success-stories" className={`section-padding ${styles.videoSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Verified Testimonials</span>
          <h2>Real Patients, Real Transformations</h2>
          <p className={styles.headerLead}>
            Hear authentic stories directly from our patients in Sanath Nagar who experienced painless treatments and regained their confident smiles.
          </p>
        </div>

        <div className={styles.videoTrackContainer}>
          <div 
            className={`${styles.videoGrid} ${isAnyVideoPlaying || isPausedHover ? styles.paused : ""}`}
            onMouseEnter={() => setIsPausedHover(true)}
            onMouseLeave={() => setIsPausedHover(false)}
            onTouchStart={() => setIsPausedHover(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPausedHover(false), 2000);
            }}
          >
            {[...videos, ...videos].map((video, index) => (
              <div key={`${video.id}-${index}`} className={styles.videoItem}>
                <div className={styles.videoCard}>
                  <div 
                    className={styles.videoWrapper} 
                    onClick={() => togglePlay(index)}
                  >
                    <video 
                      ref={el => videoRefs.current[index] = el}
                      onPlay={() => handleStateChange(index, true)}
                      onPause={() => handleStateChange(index, false)}
                      onEnded={() => handleStateChange(index, false)}
                      preload="metadata" 
                      poster={video.posterUrl}
                      playsInline
                      className={styles.videoPlayer}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className={`${styles.videoOverlay} ${playingStates[index] ? styles.playing : ""}`}>
                      <div className={styles.playButton} aria-label={playingStates[index] ? "Pause Video" : "Play Video"}>
                        {playingStates[index] ? <Pause size={28} /> : <Play size={28} fill="currentColor" />}
                      </div>
                    </div>
                  </div>

                  <div className={styles.videoInfo}>
                    <div className={styles.videoBadge}>
                      <CheckCircle2 size={13} className={styles.checkIcon} />
                      <span>Verified Review</span>
                    </div>
                    <h3>{video.title}</h3>
                    <p className={styles.videoSubtitle}>{video.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
