"use client";

import React, { useRef, useState } from "react";
import { MapPin, Clock, Phone, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", 
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

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
    setSelectedSlot("");
    setSelectedService("");
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <span className={styles.subTitle}>Contact Us</span>
            <h2>Visit Our Dental Clinic in Sanath Nagar</h2>
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><MapPin /></div>
                <div className={styles.detailText}>
                  <h3>Address</h3>
                  <p>
                    First Floor, Flat No: S-104, SVSS Nivas Complex,<br />
                    Above Ratnadeep Super Market, Opp. Gokul Theatre Lane,<br />
                    Czech Colony, Sanath Nagar, Hyderabad – 500018
                  </p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><Clock /></div>
                <div className={styles.detailText}>
                  <h3>Timings</h3>
                  <p>Open Daily – Closes 9:00 PM</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><Phone /></div>
                <div className={styles.detailText}>
                  <h3>Phone</h3>
                  <p><a href="tel:+919676316416" style={{ color: "inherit", textDecoration: "none" }}>+91 96763 16416</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.appointmentBox}>
              <h3>Book Your Appointment</h3>
              <p>Schedule your visit with our expert dental team today.</p>
              
              <form ref={form} onSubmit={handleSubmit} className={styles.appointmentForm}>
                <div className={styles.formGroup}>
                  <label><User size={14} /> Full Name</label>
                  <input 
                    name="user_name" 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    minLength={3}
                    pattern="^[a-zA-Z\s.]+$"
                    title="Please enter a valid name (letters only)"
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label><Smartphone size={14} /> Phone Number</label>
                    <input 
                      name="user_phone" 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required 
                      pattern="^[0-9\s+]{10,15}$"
                      title="Please enter a valid phone number (minimum 10 digits)"
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


                <div className={styles.formGroup}>
                  <label><Stethoscope size={14} /> Select Service</label>
                  <div className={styles.selectWrapper}>
                    <select name="selected_service" className={styles.premiumSelect} required>
                      <option value="">Choose a Service</option>
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
                    <select name="selected_slot" className={styles.premiumSelect} required>
                      <option value="">Choose a Slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <ChevronDown className={styles.selectIcon} size={18} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`${styles.submitBtn} ${isSuccess ? styles.success : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : isSuccess ? (
                    <><CheckCircle size={20} /> Opening WhatsApp...</>
                  ) : (
                    <><Send size={18} /> Book Appointment Now</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
