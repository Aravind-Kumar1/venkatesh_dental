"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown, Clock, ShieldCheck } from "lucide-react";
import styles from "./TimedPopup.module.css";

export default function TimedPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", 
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const services = [
    "Root Canal Treatment", "Dental Implants", "Teeth Cleaning & Whitening", 
    "Cosmetic Dentistry", "Invisible Aligners", "Pediatric Dentistry", 
    "Tooth Extraction", "Emergency Dental Care", "Regular Dental Checkup"
  ];

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = typeof window !== "undefined" && sessionStorage.getItem("dental_popup_dismissed");
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        sessionStorage.setItem("dental_popup_dismissed", "true");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dental_popup_dismissed", "true");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const userName = (formData.get("user_name") || "").toString().trim();
    const userPhone = (formData.get("user_phone") || "").toString().trim();
    const appointmentDate = (formData.get("appointment_date") || "").toString().trim();
    const selectedService = (formData.get("selected_service") || "").toString().trim();
    const selectedSlot = (formData.get("selected_slot") || "").toString().trim();

    const message = `Hello Venkateswara Dental Hospital,\n\nI would like to book a priority appointment with the following details:\n• Patient Name: ${userName}\n• Contact Number: ${userPhone}\n• Preferred Date: ${appointmentDate}\n• Service: ${selectedService}\n• Preferred Time: ${selectedSlot}\n\nPlease confirm my appointment slot. Thank you!`;

    const whatsappUrl = `https://wa.me/919676316416?text=${encodeURIComponent(message)}`;

    setIsSuccess(true);
    setIsSubmitting(false);

    window.open(whatsappUrl, "_blank");

    if (form.current) {
      form.current.reset();
    }

    setTimeout(() => {
      setIsSuccess(false);
      setIsVisible(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("dental_popup_dismissed", "true");
      }
    }, 2500);
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.active : ""}`} onClick={handleClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close dialog">
          <X size={20} />
        </button>
        
        <div className={styles.popupGrid}>
          <div className={styles.popupHeader}>
            <div className={styles.iconCircle}>
              <Calendar size={28} />
            </div>
            <div className={styles.badgeWrap}>
              <span className={styles.topBadge}><ShieldCheck size={14} /> Priority Booking</span>
            </div>
            <h2>Schedule Your Visit</h2>
            <p>Painless, expert dental care at Venkateswara Dental Hospital, Sanath Nagar.</p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label><User size={14} /> Full Name</label>
              <input 
                name="user_name" 
                type="text" 
                placeholder="Enter patient full name" 
                required 
                minLength={3}
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label><Smartphone size={14} /> Phone Number</label>
                <input 
                  name="user_phone" 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  required 
                  pattern="^[0-9\s+]{10,15}$"
                />
              </div>
              <div className={styles.formGroup}>
                <label><Calendar size={14} /> Preferred Date</label>
                <input 
                  name="appointment_date" 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]} 
                  required 
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label><Stethoscope size={14} /> Dental Service</label>
                <div className={styles.selectWrapper}>
                  <select name="selected_service" className={styles.select} required defaultValue="">
                    <option value="" disabled>Choose Treatment</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className={styles.selectIcon} size={18} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label><Clock size={14} /> Preferred Time Slot</label>
                <div className={styles.selectWrapper}>
                  <select name="selected_slot" className={styles.select} required defaultValue="">
                    <option value="" disabled>Select Time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <ChevronDown className={styles.selectIcon} size={18} />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitBtn} ${isSuccess ? styles.success : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : isSuccess ? (
                <><CheckCircle size={20} /> Opening WhatsApp Confirmation...</>
              ) : (
                <><Send size={18} /> Confirm Appointment on WhatsApp</>
              )}
            </button>
          </form>
          
          <div className={styles.popupFooter}>
            <p>Prefer to speak directly? <a href="tel:+919676316416">+91 96763 16416</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
