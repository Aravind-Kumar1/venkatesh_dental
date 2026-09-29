"use client";

import React, { useRef, useState } from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Send, 
  CheckCircle, 
  User, 
  Smartphone, 
  Calendar, 
  Stethoscope, 
  ChevronDown, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", 
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const services = [
    "Root Canal Treatment (Painless)", 
    "Dental Implants (Permanent)", 
    "Teeth Cleaning & Whitening", 
    "Cosmetic Smile Makeover", 
    "Invisible Aligners (Clear Braces)", 
    "Pediatric Dentistry (Kids Care)",
    "Wisdom Tooth Removal & Extraction",
    "Emergency Dental Consultation"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const userName = (formData.get("user_name") || "").toString().trim();
    const userPhone = (formData.get("user_phone") || "").toString().trim();
    const appointmentDate = (formData.get("appointment_date") || "").toString().trim();
    const selectedService = (formData.get("selected_service") || "").toString().trim();
    const selectedSlot = (formData.get("selected_slot") || "").toString().trim();

    const message = `Hello Venkateswara Dental Hospital,\n\nI would like to book an appointment with the following details:\n• Patient Name: ${userName}\n• Contact Number: ${userPhone}\n• Preferred Date: ${appointmentDate}\n• Service: ${selectedService}\n• Preferred Time Slot: ${selectedSlot}\n\nPlease confirm my appointment at your Sanath Nagar clinic. Thank you!`;

    const whatsappUrl = `https://wa.me/919676316416?text=${encodeURIComponent(message)}`;

    setIsSuccess(true);
    setIsSubmitting(false);

    window.open(whatsappUrl, "_blank");

    if (form.current) {
      form.current.reset();
    }
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.sectionHeadingWrapper}>
          <span className={styles.subTitle}>Appointment & Location</span>
          <h2>Visit Our Clinic in Sanath Nagar</h2>
          <p className={styles.subDescription}>
            Schedule your consultation with Dr. Venkateswara Kalicherla or get in touch for immediate assistance.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Clinic Details Column */}
          <div className={styles.contactInfo}>
            <div className={styles.trustBadge}>
              <Sparkles size={16} className={styles.badgeIcon} />
              <span>Welcoming New Patients Daily</span>
            </div>

            <h3 className={styles.infoHeading}>Venkateswara Dental Hospital</h3>
            <p className={styles.infoLead}>
              Equipped with high-precision digital imaging, painless root canal systems, and ultra-hygienic sterilization protocols.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><MapPin size={22} /></div>
                <div className={styles.detailText}>
                  <h4>Clinic Address</h4>
                  <p>
                    First Floor, Flat No: S-104, SVSS Nivas Complex,<br />
                    Above Ratnadeep Super Market, Opp. Gokul Theatre Lane,<br />
                    Czech Colony, Sanath Nagar, Hyderabad – 500018
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Venkateswara+Dental+Hospital+Sanath+Nagar+Hyderabad" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.mapLink}
                  >
                    <span>Get Directions on Map</span> <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><Clock size={22} /></div>
                <div className={styles.detailText}>
                  <h4>Consultation Timings</h4>
                  <p>Monday – Sunday: <strong>10:00 AM – 9:00 PM</strong></p>
                  <span className={styles.openPill}>Open Today</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}><Phone size={22} /></div>
                <div className={styles.detailText}>
                  <h4>Direct Line</h4>
                  <p>
                    <a href="tel:+919676316416" className={styles.phoneLink}>
                      +91 96763 16416
                    </a>
                  </p>
                  <span className={styles.phoneSubtext}>Tap to call clinic immediately</span>
                </div>
              </div>
            </div>

            <div className={styles.amenityRow}>
              <div className={styles.amenityPill}><ShieldCheck size={16} /> 100% Sterile Tech</div>
              <div className={styles.amenityPill}><ShieldCheck size={16} /> Pain-Free RCT</div>
              <div className={styles.amenityPill}><ShieldCheck size={16} /> Instant Diagnosis</div>
            </div>
          </div>

          {/* Form Container Column */}
          <div className={styles.formContainer}>
            <div className={styles.appointmentBox}>
              <div className={styles.formHeader}>
                <div className={styles.formBadge}>Online Booking</div>
                <h3>Book Your Appointment</h3>
                <p>Fill out the details below for an instant WhatsApp confirmation.</p>
              </div>
              
              <form ref={form} onSubmit={handleSubmit} className={styles.appointmentForm}>
                <div className={styles.formGroup}>
                  <label><User size={15} /> Patient Name</label>
                  <input 
                    name="user_name" 
                    type="text" 
                    placeholder="e.g. Ramesh Kumar" 
                    required 
                    minLength={3}
                  />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label><Smartphone size={15} /> Mobile Number</label>
                    <input 
                      name="user_phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required 
                      pattern="^[0-9\s+]{10,15}$"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label><Calendar size={15} /> Preferred Date</label>
                    <input 
                      name="appointment_date" 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]} 
                      required 
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label><Stethoscope size={15} /> Treatment / Service</label>
                  <div className={styles.selectWrapper}>
                    <select name="selected_service" className={styles.premiumSelect} required defaultValue="">
                      <option value="" disabled>Select Dental Treatment</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <ChevronDown className={styles.selectIcon} size={18} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label><Clock size={15} /> Preferred Time Slot</label>
                  <div className={styles.selectWrapper}>
                    <select name="selected_slot" className={styles.premiumSelect} required defaultValue="">
                      <option value="" disabled>Select Time Slot</option>
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
                  {isSubmitting ? (
                    "Connecting to WhatsApp..."
                  ) : isSuccess ? (
                    <><CheckCircle size={20} /> Appointment Sent to WhatsApp!</>
                  ) : (
                    <><Send size={18} /> Confirm on WhatsApp</>
                  )}
                </button>

                <p className={styles.formGuarantee}>
                  <ShieldCheck size={14} /> Quick confirmation • No advance consultation fee online
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
