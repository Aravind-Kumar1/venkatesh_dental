import { Outfit } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/shared/ScrollToTop";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://www.venkateswaradentals.com"),
  title: {
    default: "Best Dental Clinic in Sanath Nagar, Hyderabad | Venkateswara Dental Hospital",
    template: "%s | Venkateswara Dental Hospital",
  },
  description:
    "Looking for the best dentist in Sanath Nagar, Hyderabad? Venkateswara Dental Hospital offers 100% painless RCT, dental implants, aligners & cosmetic dentistry with 399+ 5.0★ Google reviews. Led by Dr. Venkateswara Kalicherla (BDS). Open daily 10 AM - 9 PM. Call +91 96763 16416.",
  keywords: [
    "best dental clinic in sanath nagar",
    "dentist in sanath nagar hyderabad",
    "dental hospital sanath nagar",
    "dental clinic near czech colony",
    "painless root canal treatment sanath nagar",
    "dental implants sanath nagar",
    "dr venkateswara kalicherla",
    "dr venkateswara kalicherla bds",
    "teeth whitening hyderabad",
    "invisible aligners hyderabad",
    "emergency dentist sanath nagar",
    "pediatric dentist sanath nagar",
    "best dental surgeon hyderabad",
    "dental clinic above ratnadeep sanath nagar"
  ],
  authors: [{ name: "Dr. Venkateswara Kalicherla, BDS", url: "https://www.venkateswaradentals.com" }],
  creator: "Dr. Venkateswara Kalicherla",
  publisher: "Venkateswara Dental Hospital",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.venkateswaradentals.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.venkateswaradentals.com",
    siteName: "Venkateswara Dental Hospital",
    title: "Best Dental Clinic in Sanath Nagar, Hyderabad | Venkateswara Dental Hospital",
    description:
      "Premier dental hospital in Sanath Nagar specializing in painless root canal treatments, precision dental implants, smile design & clear aligners. 399+ 5-star Google reviews. Led by Dr. Venkateswara Kalicherla.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Venkateswara Dental Hospital - Sanath Nagar, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Sanath Nagar | Venkateswara Dental Hospital",
    description:
      "399+ 5-star Google reviews. 100% painless root canal treatment, precision implants & cosmetic dentistry in Sanath Nagar, Hyderabad.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/ven_favicon.png",
    apple: "/ven_favicon.png",
  },
  verification: {
    google: "AmsuYZInbHKNbaAsM71bYHgmqbAL3Jiuj19tZYituCc",
  },
  category: "health",
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": "https://www.venkateswaradentals.com/#dentist",
    "name": "Venkateswara Dental Hospital",
    "alternateName": [
      "Venkateswara Dental Clinic Sanath Nagar",
      "Dr. Venkateswara Kalicherla Dental Hospital"
    ],
    "description":
      "Premier dental healthcare center in Sanath Nagar, Hyderabad providing painless root canal treatment, dental implants, cosmetic smile makeovers, teeth whitening, and orthodontic aligners.",
    "url": "https://www.venkateswaradentals.com",
    "logo": "https://www.venkateswaradentals.com/icon.png",
    "image": "https://www.venkateswaradentals.com/icon.png",
    "telephone": "+919676316416",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, Flat No: S-104, SVSS Nivas Complex, Above Ratnadeep Super Market, Czech Colony",
      "addressLocality": "Sanath Nagar",
      "addressRegion": "Telangana",
      "postalCode": "500018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4578,
      "longitude": 78.4419
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "399",
      "reviewCount": "399"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Venkateswara Kalicherla",
      "jobTitle": "Chief Dental Surgeon & Implantologist",
      "honorificSuffix": "BDS",
      "description": "Chief Dental Surgeon with over 15 years of clinical mastery in painless root canal treatments and dental implantology."
    },
    "medicalSpecialty": [
      "Dentistry",
      "Endodontics",
      "Implantology",
      "Orthodontics",
      "Cosmetic Dentistry",
      "Periodontics",
      "Pediatric Dentistry"
    ],
    "sameAs": [
      "https://www.instagram.com/doctor_venky_actor",
      "https://www.facebook.com/venky.kalicherla"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Care Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Painless Root Canal Treatment (RCT)",
            "description": "Rotary endodontics with apex locators and computerized painless anesthesia."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants & Fixed Teeth",
            "description": "Permanent titanium implants for single tooth, bridge or full mouth rehabilitation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry & Smile Makeovers",
            "description": "Custom ceramic veneers, digital smile design, and composite restorations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Invisible Clear Aligners",
            "description": "Discreet, removable clear aligners to straighten teeth and close gaps."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth Whitening & Cleaning",
            "description": "Advanced ultrasonic scaling and laser enamel whitening for radiant smiles."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dental Care",
            "description": "Immediate same-day relief for severe toothaches, broken teeth, and dental traumas."
          }
        }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the chief dentist at Venkateswara Dental Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Venkateswara Kalicherla (BDS) is the Chief Dental Surgeon and Implantologist, possessing over 15 years of clinical expertise treating complex dental conditions with painless, cutting-edge techniques."
        }
      },
      {
        "@type": "Question",
        "name": "Is root canal treatment (RCT) really painless?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We use modern rotary endodontic systems, high-accuracy apex locators, and computerized local anesthesia so you experience virtually zero pain during and after the procedure."
        }
      },
      {
        "@type": "Question",
        "name": "How permanent are dental implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dental implants fuse directly with your jawbone through osseointegration, providing a permanent, durable root foundation that can last a lifetime with normal oral hygiene and regular dental checkups."
        }
      },
      {
        "@type": "Question",
        "name": "What are your clinic timings and days open?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open 7 days a week from 10:00 AM to 9:00 PM, located at Czech Colony, Sanath Nagar (Above Ratnadeep Super Market). Walk-ins and pre-booked appointments are both welcome."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide same-day emergency dental care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We prioritize severe dental pain, broken teeth, knocked-out teeth, and facial swellings with same-day emergency appointments. Call us directly at +91 96763 16416."
        }
      },
      {
        "@type": "Question",
        "name": "How much does dental treatment cost at Venkateswara Dental Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We believe in honest, upfront pricing with no hidden charges. Exact costs depend on the required treatment plan which is explained transparently following clinical diagnosis."
        }
      }
    ]
  };

  return (
    <html lang="en-IN" className={outfit.className}>
      <head>
        <meta name="google-site-verification" content="AmsuYZInbHKNbaAsM71bYHgmqbAL3Jiuj19tZYituCc" />
        <link rel="canonical" href="https://www.venkateswaradentals.com" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Sanath Nagar, Hyderabad" />
        <meta name="geo.position" content="17.4578;78.4419" />
        <meta name="ICBM" content="17.4578, 78.4419" />
        <meta name="theme-color" content="#1A4996" />
      </head>
      <body suppressHydrationWarning>
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
