"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
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
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000); // Reduced from 20s to 7s for better visibility

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const userName = formData.get("user_name") || "";
    const userPhone = formData.get("user_phone") || "";
    const appointmentDate = formData.get("appointment_date") || "";
    const selectedService = formData.get("selected_service") || "";
    const selectedSlot = formData.get("selected_slot") || "";

    const message = `Hello Venkateswara Dental Hospital,\n\nI would like to book an appointment with the following details:\n• Name: ${userName}\n• Phone: ${userPhone}\n• Preferred Date: ${appointmentDate}\n• Service: ${selectedService}\n• Preferred Time: ${selectedSlot}\n\nPlease confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/919676316416?text=${encodeURIComponent(message)}`;

    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        form.current, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ).catch((err) => console.log("EmailJS optional error:", err));
    }

    setIsSuccess(true);
    setIsSubmitting(false);

    window.open(whatsappUrl, "_blank");

    form.current.reset();
    setTimeout(() => {
      setIsSuccess(false);
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.active : ""}`}>
      <div className={styles.popupContent}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <X size={24} />
        </button>
        
        <div className={styles.popupGrid}>
          <div className={styles.popupHeader}>
            <div className={styles.iconCircle}>
                <Calendar size={32} />
            </div>
            <h2>Priority Appointment</h2>
            <p>Don't wait! Book your visit today for a healthier smile.</p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label><User size={14} /> Full Name</label>
              <input 
                name="user_name" 
                type="text" 
                placeholder="Your Name" 
                required 
                minLength={3}
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label><Smartphone size={14} /> Phone</label>
                <input 
                  name="user_phone" 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  pattern="^[0-9\s+]{10,15}$"
                />
              </div>
              <div className={styles.formGroup}>
                <label><Calendar size={14} /> Date</label>
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
                <label><Stethoscope size={14} /> Service</label>
                <div className={styles.selectWrapper}>
                  <select name="selected_service" className={styles.select} required>
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className={styles.selectIcon} size={18} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label><Clock size={14} /> Time Slot</label>
                <div className={styles.selectWrapper}>
                  <select name="selected_slot" className={styles.select} required>
                    <option value="">Choose Slot</option>
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
                <><CheckCircle size={20} /> Opening WhatsApp...</>
              ) : (
                <><Send size={18} /> Book Now</>
              )}
            </button>
          </form>
          
          <div className={styles.popupFooter}>
            <p>Or call us: <a href="tel:+919676316416">+91 96763 16416</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
