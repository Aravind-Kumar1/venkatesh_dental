"use client";

import React, { useState, useEffect } from "react";
import styles from "./VideoGallery.module.css";
import { Play, Pause } from "lucide-react";

export default function VideoGallery() {
  const videoRefs = React.useRef([]);
  const [playingStates, setPlayingStates] = useState({});

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // Pause all other videos
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
  const videos = [
    {
      id: 1,
      title: "Client Feedback",
      description: "A wonderful experience at Venkateswara Dental Hospital.",
      videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/ven_test_one_e97c12.mp4",
      posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/ven_test_one_e97c12.jpg"
    },
    {
      id: 2,
      title: "Experience Success",
      description: "Restoring confidence through expert dental care.",
      videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/WhatsApp_Video_2026-04-13_at_6.00.01_PM_hxwkwo.mp4",
      posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/WhatsApp_Video_2026-04-13_at_6.00.01_PM_hxwkwo.jpg"
    },
    {
      id: 3,
      title: "Patient Journey",
      description: "Hear from our patients about their treatment journey.",
      videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145827/WhatsApp_Video_2026-04-13_at_10.22.09_AM_xueedw.mp4",
      posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145827/WhatsApp_Video_2026-04-13_at_10.22.09_AM_xueedw.jpg"
    },
    {
      id: 4,
      title: "Transformation Results",
      description: "Witness the power of a healthy, beautiful smile.",
      videoUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/v1776145826/WhatsApp_Video_2026-04-13_at_10.23.35_AM_iuqzfm.mp4",
      posterUrl: "https://res.cloudinary.com/dbg1xwcrj/video/upload/so_1/v1776145826/WhatsApp_Video_2026-04-13_at_10.23.35_AM_iuqzfm.jpg"
    }
  ];


  const isAnyVideoPlaying = Object.values(playingStates).some(state => state);

  return (
    <section id="success-stories" className={`${styles.videoSection} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Success Stories</span>
          <h2>Patient Transformations</h2>
          <p>Real voices, real results. Watch how we've helped our patients smile brighter.</p>
        </div>

        <div className={`${styles.videoGrid} ${isAnyVideoPlaying ? styles.paused : ""}`}>
          {[...videos, ...videos].map((video, index) => (
            <div key={`${video.id}-${index}`} className={styles.videoItem}>
              <div className={styles.videoInfo}>
                <h3>{video.title}</h3>
              </div>
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
                    preload="auto" 
                    poster={video.posterUrl}
                    playsInline
                    className={styles.videoPlayer}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${styles.videoOverlay} ${playingStates[index] ? styles.playing : ""}`}>
                    <div className={styles.playButton}>
                      {playingStates[index] ? <Pause size={32} /> : <Play size={32} fill="currentColor" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
