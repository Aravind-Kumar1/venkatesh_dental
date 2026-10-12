import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { 
  Zap, ShieldCheck, Sparkles, Smile, CheckCircle2, 
  HeartPulse, Stethoscope, Clock, ArrowRight, Phone, Calendar,
  Star, Award, ChevronRight
} from "lucide-react";
import styles from "./service-detail.module.css";

import rootCanalImage from "../../../../assets/images/service_root_canal.png";
import implantImage from "../../../../assets/images/dental_implant.png";
import whiteningImage from "../../../../assets/images/teeth_white.png";
import cosmeticImage from "../../../../assets/images/cos_service.png";
import alignersImage from "../../../../assets/images/aligners.png";
import pediatricImage from "../../../../assets/images/child-ser.png";
import extractionImage from "../../../../assets/images/venky_hero.png";
import emergencyImage from "../../../../assets/images/emergency_dental.jpg";
import denturesImage from "../../../../assets/images/dentures_crowns.jpg";

const servicesData = {
  "painless-root-canal": {
    title: "Painless Root Canal Treatment (RCT)",
    tag: "Pain Relief",
    tagline: "Eliminate infection & relieve toothache — completely without pain.",
    image: rootCanalImage,
    icon: <Zap size={28} />,
    color: "#3b82f6",
    overview: `Root Canal Treatment (RCT) at Venkateswara Dental Hospital is a precision procedure performed using advanced rotary endodontic systems and computerized local anesthesia — making it a virtually 100% painless experience. Dr. Venkateswara Kalicherla is one of Hyderabad's most trusted specialists for single-sitting RCT.`,
    procedure: [
      "Comprehensive digital X-ray diagnosis to assess infection depth",
      "Computerized, needle-free local anesthesia application",
      "Precision access opening using high-speed instruments",
      "Rotary NiTi files to clean & shape the canal completely",
      "Apex locator-guided measurement for perfect canal length",
      "Bio-compatible gutta-percha canal sealing",
      "Same-visit ceramic crown placement where possible",
    ],
    benefits: [
      "Zero pain during and after the procedure",
      "Saves your natural tooth from extraction",
      "Restores full biting and chewing function",
      "Single-sitting completion in most cases",
      "Long-lasting results with proper care",
    ],
    faqs: [
      { q: "Is RCT really painless?", a: "Yes. Modern rotary endodontics combined with computerized anesthesia means you feel virtually no pain during the entire procedure." },
      { q: "How many sittings does RCT take?", a: "Most cases are completed in a single sitting at our clinic. Complex multi-rooted cases may require 2 sittings." },
      { q: "What happens after RCT?", a: "A protective crown is placed over the treated tooth to restore its strength and appearance. You can resume normal eating within 24 hours." },
    ],
  },
  "dental-implants": {
    title: "Permanent Dental Implants",
    tag: "Restorative",
    tagline: "Replace missing teeth permanently — with the look and feel of natural teeth.",
    image: implantImage,
    icon: <ShieldCheck size={28} />,
    color: "#10b981",
    overview: `Dental implants at Venkateswara Dental Hospital are titanium fixtures surgically placed into the jawbone to act as an artificial tooth root. After healing, a natural-shade ceramic crown is fixed on top — giving you a permanent, indistinguishable replacement for your missing tooth.`,
    procedure: [
      "Digital bone density assessment & treatment planning",
      "Surgical placement of Grade-IV titanium implant fixture",
      "Osseointegration healing period (3–6 months)",
      "Abutment placement and gum contouring",
      "Custom shade-matched ceramic crown fabrication",
      "Final crown fitting and bite adjustment",
    ],
    benefits: [
      "Permanent solution that lasts a lifetime",
      "Looks and functions like a natural tooth",
      "Prevents jawbone loss at extraction site",
      "No need to grind adjacent healthy teeth",
      "Easy to clean — just brush and floss normally",
    ],
    faqs: [
      { q: "Are dental implants painful?", a: "The procedure is performed under local anesthesia. Post-surgical discomfort is mild and manageable with prescribed medication." },
      { q: "How long do implants last?", a: "With proper oral hygiene and regular checkups, dental implants can last a lifetime." },
      { q: "Am I a candidate for implants?", a: "Most adults with sufficient jawbone density are candidates. Dr. Venkateswara will evaluate you with digital X-rays during consultation." },
    ],
  },
  "teeth-whitening": {
    title: "Teeth Cleaning & Whitening",
    tag: "Preventive & Cosmetic",
    tagline: "Restore brilliant whiteness and a healthy, clean mouth.",
    image: whiteningImage,
    icon: <Sparkles size={28} />,
    color: "#f59e0b",
    overview: `Our professional teeth cleaning and whitening combines ultrasonic scaling to remove tartar, plaque and stains — followed by advanced enamel-safe laser whitening that lightens teeth by up to 8 shades. The result: a noticeably brighter, healthier smile in a single visit.`,
    procedure: [
      "Full oral health examination and photography",
      "Ultrasonic scaling to remove calculus and plaque",
      "Air-jet polishing to remove surface stains",
      "Gum line cleaning and sub-gingival debridement",
      "Professional whitening gel application",
      "Laser light activation for maximum whitening",
      "Fluoride treatment for enamel strengthening",
    ],
    benefits: [
      "Up to 8 shades brighter in one session",
      "Removes stubborn tea, coffee and tobacco stains",
      "Prevents gum disease and cavities",
      "Fresher breath and healthier gums",
      "Long-lasting results with home care guidance",
    ],
    faqs: [
      { q: "Does whitening damage enamel?", a: "No. We use only enamel-safe professional whitening gels at clinically approved concentrations." },
      { q: "How long do results last?", a: "Results typically last 1–2 years depending on diet and habits. A home maintenance kit helps extend results." },
      { q: "Is cleaning necessary before whitening?", a: "Yes, professional scaling before whitening ensures even results and healthy gums." },
    ],
  },
  "cosmetic-smile-design": {
    title: "Cosmetic Smile Designing",
    tag: "Aesthetics",
    tagline: "Design the smile you've always dreamed of.",
    image: cosmeticImage,
    icon: <Smile size={28} />,
    color: "#ec4899",
    overview: `Cosmetic smile designing at Venkateswara Dental Hospital is a comprehensive smile makeover process — from digital smile preview to the final ceramic veneer placement. We correct gaps, chips, stains, uneven teeth and gum lines to give you the perfect, natural-looking smile.`,
    procedure: [
      "Digital smile design preview using photography",
      "Smile analysis for proportion, color, and symmetry",
      "Minimal tooth preparation under local anesthesia",
      "Custom porcelain or composite veneer fabrication",
      "Trial fitting and shade verification",
      "Permanent bonding and bite calibration",
      "Post-treatment care and maintenance guidance",
    ],
    benefits: [
      "Correct gaps, chips, and misalignment",
      "Dramatically improve tooth color and shape",
      "Minimal or no tooth reduction required",
      "Natural appearance indistinguishable from real teeth",
      "Instant confidence boost and smile transformation",
    ],
    faqs: [
      { q: "What's the difference between veneers and crowns?", a: "Veneers cover only the front surface of teeth with minimal preparation. Crowns cover the entire tooth and are used for more structural damage." },
      { q: "How many teeth are typically included?", a: "A smile makeover usually covers 6–10 front teeth. The exact number is based on your smile design goals." },
      { q: "Are veneers permanent?", a: "Porcelain veneers last 10–15 years with proper care. Composite veneers last 3–5 years but are easily repaired or replaced." },
    ],
  },
  "invisible-aligners": {
    title: "Invisible Clear Aligners",
    tag: "Orthodontics",
    tagline: "Straighten your teeth discreetly — no wires, no brackets.",
    image: alignersImage,
    icon: <CheckCircle2 size={28} />,
    color: "#8b5cf6",
    overview: `Clear aligners are a modern, virtually invisible alternative to traditional braces. At Venkateswara Dental Hospital, we use custom-fabricated transparent aligner trays that gradually shift your teeth into proper alignment — without any metal wires or brackets.`,
    procedure: [
      "3D digital scan and teeth impressions",
      "Virtual treatment simulation and timeline preview",
      "Custom aligner series fabrication",
      "Fitting of first aligner tray",
      "Tray changes every 2–3 weeks",
      "Regular progress reviews with Dr. Venkateswara",
      "Retainer provided after treatment completion",
    ],
    benefits: [
      "Virtually invisible — nobody will notice",
      "Fully removable for eating and brushing",
      "Comfortable — no wire irritation or tightening pain",
      "Shorter treatment time vs traditional braces",
      "Suitable for teens and adults alike",
    ],
    faqs: [
      { q: "How long does aligner treatment take?", a: "Mild to moderate cases: 6–12 months. Complex cases may take up to 18 months. Dr. Venkateswara will give you a precise timeline after evaluation." },
      { q: "How many hours per day must I wear them?", a: "For best results, aligners should be worn 20–22 hours daily and removed only for eating and oral hygiene." },
      { q: "Are aligners suitable for all age groups?", a: "Yes. Clear aligners are suitable for teenagers and adults. Children still growing benefit more from conventional braces." },
    ],
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry — Kids Care",
    tag: "Children's Dental",
    tagline: "Gentle, fun dental care that children actually look forward to.",
    image: pediatricImage,
    icon: <Stethoscope size={28} />,
    color: "#06b6d4",
    overview: `At Venkateswara Dental Hospital, we create a warm, friendly, and anxiety-free dental environment for children. Our pediatric dental care focuses on preventive treatments, early detection, and building positive dental habits that last a lifetime.`,
    procedure: [
      "Child-friendly dental examination and cleaning",
      "Milk tooth cavity treatment (tooth-colored fillings)",
      "Pit and fissure sealants to prevent cavities",
      "Fluoride varnish application for enamel protection",
      "Space maintainers after early milk tooth loss",
      "Early orthodontic assessment and monitoring",
      "Oral hygiene education for child and parents",
    ],
    benefits: [
      "Anxiety-free environment for nervous children",
      "Prevents cavities before they form",
      "Early detection of orthodontic issues",
      "Builds positive, lifelong dental habits",
      "Gentle techniques adapted for children",
    ],
    faqs: [
      { q: "When should my child first visit a dentist?", a: "Children should have their first dental visit by age 1 or within 6 months of the first tooth erupting." },
      { q: "Are milk teeth important to treat?", a: "Yes. Untreated milk teeth infections can damage permanent teeth developing underneath and cause pain and speech issues." },
      { q: "How do I prepare my child for the dentist?", a: "Read dental-themed books, use positive language, and avoid sharing your own dental anxieties. We're experienced in making children comfortable!" },
    ],
  },
  "wisdom-tooth-removal": {
    title: "Wisdom Tooth Removal",
    tag: "Oral Surgery",
    tagline: "Safe, minimally invasive wisdom tooth extraction with fast recovery.",
    image: extractionImage,
    icon: <Clock size={28} />,
    color: "#f97316",
    overview: `Wisdom teeth (third molars) often cause pain, crowding, and infection when they don't have space to erupt properly. Dr. Venkateswara Kalicherla performs precise, atraumatic wisdom tooth extractions — including surgical removal of fully impacted teeth — with minimal post-operative discomfort.`,
    procedure: [
      "Digital X-ray and CBCT assessment of tooth position",
      "Local anesthesia administration for complete comfort",
      "Atraumatic luxation to loosen the tooth",
      "Careful elevation and forceps removal",
      "Surgical flap creation for impacted teeth if needed",
      "Socket irrigation and bone smoothing",
      "Absorbable suture placement and post-op instructions",
    ],
    benefits: [
      "Relieves pain caused by impacted wisdom teeth",
      "Prevents damage to adjacent teeth",
      "Eliminates recurring infections",
      "Fast and safe surgical technique",
      "Complete aftercare guidance and follow-up",
    ],
    faqs: [
      { q: "Does wisdom tooth removal hurt?", a: "The procedure is done under local anesthesia and is completely painless. Post-operative mild soreness is expected for 2–3 days." },
      { q: "How long is the recovery?", a: "Most patients recover fully within 3–5 days. We provide detailed post-operative care instructions and medications." },
      { q: "Do all wisdom teeth need removal?", a: "Not always. Only wisdom teeth causing pain, crowding, infection or damage to adjacent teeth need removal. Dr. Venkateswara will advise after examination." },
    ],
  },
  "emergency-dental-care": {
    title: "Emergency Dental Care",
    tag: "Immediate Relief",
    tagline: "Same-day urgent dental treatment — we prioritize your pain.",
    image: emergencyImage,
    icon: <HeartPulse size={28} />,
    color: "#ef4444",
    overview: `Dental emergencies can happen at any time. Venkateswara Dental Hospital provides same-day priority appointments for acute toothaches, broken teeth, knocked-out teeth, and dental traumas. Call us immediately — Dr. Venkateswara ensures you are seen quickly and relieved fast.`,
    procedure: [
      "Immediate triage and pain assessment",
      "Emergency digital X-ray diagnosis",
      "Targeted local anesthesia for instant pain relief",
      "Emergency root canal, extraction or repair as needed",
      "Temporary or permanent restoration placement",
      "Prescription for antibiotics and pain medication",
      "Follow-up appointment scheduling",
    ],
    benefits: [
      "Same-day appointments for severe pain",
      "Immediate diagnosis with digital X-ray",
      "Fast pain relief within minutes",
      "Comprehensive follow-up care planned",
      "Open daily 10 AM – 9 PM, 7 days a week",
    ],
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe toothache, knocked-out tooth, broken crown, dental abscess, facial swelling, broken tooth from trauma — all are emergencies that need same-day care." },
      { q: "What should I do if a tooth is knocked out?", a: "Keep the tooth moist (in milk or saliva), do not scrub the root, and rush to us within 30–60 minutes for the best chance of re-implantation." },
      { q: "Do you accept walk-ins?", a: "Yes. Walk-in emergency patients are triaged immediately and seen as quickly as possible — usually the same day." },
    ],
  },
  "dentures-and-crowns": {
    title: "Dentures & Dental Crowns",
    tag: "Restorative",
    tagline: "Restore your smile completely — with precision crowns and natural-looking dentures.",
    image: denturesImage,
    icon: <Award size={28} />,
    color: "#a855f7",
    overview: `At Venkateswara Dental Hospital, we fabricate high-quality dental crowns and dentures that blend seamlessly with your natural teeth. Whether you need a single ceramic crown to protect a damaged tooth or a full set of dentures to replace multiple missing teeth, Dr. Venkateswara Kalicherla ensures precise fitting, optimal comfort, and a completely natural appearance.`,
    procedure: [
      "Comprehensive oral examination and X-ray assessment",
      "Tooth preparation and precise impressions",
      "Shade matching for natural-looking results",
      "Temporary crown/denture placement during fabrication",
      "Custom crown or denture fabrication in certified lab",
      "Trial fitting and necessary adjustments",
      "Final cementation or fitting with bite calibration",
    ],
    benefits: [
      "Restores full chewing function and bite strength",
      "Natural shade match — indistinguishable from real teeth",
      "Protects damaged or root-canal-treated teeth",
      "Removable dentures available for multiple missing teeth",
      "Long-lasting with proper oral hygiene and care",
    ],
    faqs: [
      { q: "How long do dental crowns last?", a: "Ceramic and zirconia crowns typically last 10–15 years with proper oral hygiene and regular dental checkups." },
      { q: "Are dentures comfortable to wear?", a: "Modern dentures are custom-fitted to your gums for maximum comfort. There is a short adjustment period, after which most patients wear them all day without discomfort." },
      { q: "Can I eat normally with dentures?", a: "Yes. After an adjustment period of a few weeks, most patients can eat a wide variety of foods comfortably with well-fitted dentures." },
    ],
  },
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className="mesh-bg" />
      <Navbar />

      {/* Hero */}
      <section className={styles.pageHero} style={{ "--service-color": service.color }}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.tag}</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.tagBadge} style={{ background: `${service.color}22`, color: service.color, border: `1px solid ${service.color}44` }}>
                <span style={{ color: service.color }}>{service.icon}</span>
                {service.tag}
              </div>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroTagline}>{service.tagline}</p>

              <div className={styles.heroCtas}>
                <Link href="/contact" className={styles.btnBook}>
                  <Calendar size={18} /> Book This Treatment
                </Link>
                <a href="tel:+919676316416" className={styles.btnCall}>
                  <Phone size={18} /> Call Now
                </a>
              </div>

              <div className={styles.trustRow}>
                <span><Star size={14} fill="#f59e0b" color="#f59e0b" /> 5.0 Google Rated</span>
                <span><ShieldCheck size={14} /> Pain-Free Procedure</span>
                <span><Award size={14} /> 15+ Years Expertise</span>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.heroImageBg} style={{ background: `${service.color}15` }} />
              <Image
                src={service.image}
                alt={service.title}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Overview */}
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.sectionLabel}>Overview</div>
            <h2 className={styles.sectionTitle}>What is {service.title}?</h2>
            <p className={styles.overviewText}>{service.overview}</p>
          </div>
        </section>

        {/* Procedure Steps */}
        <section className={styles.procedureSection}>
          <div className="container">
            <div className={styles.procGrid}>
              <div className={styles.procContent}>
                <div className={styles.sectionLabel}>Step-by-Step</div>
                <h2 className={styles.sectionTitle}>How The Procedure Works</h2>
                <div className={styles.stepsList}>
                  {service.procedure.map((step, i) => (
                    <div key={i} className={styles.stepItem}>
                      <div className={styles.stepNum} style={{ background: `${service.color}18`, color: service.color }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.benefitsCard}>
                <div className={styles.benefitsHeader}>
                  <CheckCircle2 size={20} style={{ color: "#22c55e" }} />
                  <h3>Key Benefits</h3>
                </div>
                {service.benefits.map((b, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <ChevronRight size={16} style={{ color: service.color, flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
                <div className={styles.benefitsCta}>
                  <Link href="/contact" className={styles.benefitsBtn} style={{ background: service.color }}>
                    <Calendar size={16} /> Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionLabel}>Common Questions</div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {service.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>
                    <span>{faq.q}</span>
                    <ChevronRight size={18} className={styles.faqChevron} />
                  </summary>
                  <div className={styles.faqA}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className={styles.otherSection}>
          <div className="container">
            <h3 className={styles.otherTitle}>Explore Other Treatments</h3>
            <div className={styles.otherLinks}>
              {Object.entries(servicesData)
                .filter(([s]) => s !== slug)
                .slice(0, 4)
                .map(([slug, svc]) => (
                  <Link key={slug} href={`/services/${slug}`} className={styles.otherCard}>
                    <div className={styles.otherIcon} style={{ background: `${svc.color}15`, color: svc.color }}>
                      {svc.icon}
                    </div>
                    <div>
                      <strong>{svc.title}</strong>
                      <span>{svc.tag}</span>
                    </div>
                    <ArrowRight size={16} className={styles.otherArrow} />
                  </Link>
                ))}
            </div>
            <div className={styles.viewAllWrap}>
              <Link href="/services" className={styles.viewAllBtn}>
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
