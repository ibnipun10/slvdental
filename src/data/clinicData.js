import drPhoto from '../assets/dr_abhisheak_naik.jpg';
import clinicChair from '../assets/clinic_chair.jpg';
import clinicRoom from '../assets/clinic_room.jpg';
import clinicBoard from '../assets/clinic_board.jpg';

export const CLINIC_INFO = {
  name: "SLV Dental Clinic & Implant Centre",
  shortName: "SLV Dental Clinic",
  tagline: "Advanced Dental Care with Honest Diagnosis & Gentle Treatment",
  location: "Birla Circle, Haralur, Bangalore",
  address: {
    line1: "#99/4, 1st Floor, Birla Circle",
    line2: "Above Ramdev Medicals, Haralur Main Road",
    area: "Haralur, Bangalore",
    pincode: "560102",
    landmarks: "Above Ramdev Medicals, Birla Circle (Opp. Passion Apartment)"
  },
  contact: {
    phonePrimary: "+91 98333 87738",
    phoneDisplay: "+91 98333 87738",
    whatsappNumber: "919833387738",
    email: "info@slvdentalclinic.com",
    practoUrl: "https://www.practo.com/bangalore/clinic/slv-dental-clinic-implant-centre-harlur",
    googleShareUrl: "https://share.google/6N8NLQaNhfyj9xOPF",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.28821558231!2d77.65453867598858!3d12.894250687413645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b6932a9341%3A0xb695eef9a8d9b158!2sSLV%20Dental%20Clinic%20And%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir//12.894250652369,77.657113568645"
  },
  doctor: {
    name: "Dr. Abhisheak R Naik",
    degrees: "BDS, MDS - Oral Medicine & Radiology",
    experienceYears: 15,
    rating: 5.0,
    votesCount: "455+",
    photo: drPhoto,
    shortBio: "Specialist dental surgeon and oral radiologist with 15+ years of clinical excellence. Renowned across Haralur and HSR Layout for honest diagnosis—never recommending an unnecessary root canal when conservative care works—and gentle, painless treatments.",
    highlights: [
      "Honest diagnosis — conservative treatment first",
      "Painless 15-minute wisdom tooth extractions",
      "Chairside low-radiation digital X-rays",
      "Direct WhatsApp post-care support by doctor"
    ]
  },
  timings: {
    summary: "Open All 7 Days (Mon – Sun)",
    morning: "10:00 AM – 02:00 PM",
    evening: "05:00 PM – 09:00 PM",
    badge: "Open Today"
  },
  stats: [
    { value: "5.0 ★", label: "Patient Rating", sublabel: "Practo & Google" },
    { value: "455+", label: "Verified Stories", sublabel: "100% Recommended" },
    { value: "15+", label: "Years Experience", sublabel: "BDS, MDS Specialist" },
    { value: "7 Days", label: "Open Every Week", sublabel: "Morning & Evening" }
  ]
};

export const CORE_SERVICES = [
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    tag: "Painless & Single Sitting",
    icon: "Sparkles",
    desc: "Fast toothache relief using modern rotary endodontics and digital apex locators.",
    highlight: "Preserves natural tooth with precision crown"
  },
  {
    id: "implants",
    title: "Dental Implants & Crowns",
    tag: "Permanent Solution",
    icon: "ShieldCheck",
    desc: "Durable titanium implants and lifelike zirconia crowns for seamless biting and smiling.",
    highlight: "Natural look & feel that lasts a lifetime"
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Extraction",
    tag: "15-Min Procedure",
    icon: "Zap",
    desc: "Gentle surgical removal of impacted wisdom teeth with quick recovery and minimal swelling.",
    highlight: "Painless local anesthesia & daily follow-up"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Smile Makeover",
    tag: "Smile Aesthetics",
    icon: "Smile",
    desc: "Composite bonding, porcelain veneers, gap closures, and enamel shade correction.",
    highlight: "Custom facial alignment for a radiant smile"
  },
  {
    id: "scaling",
    title: "Teeth Cleaning & Polishing",
    tag: "Preventive Care",
    icon: "Activity",
    desc: "Ultrasonic tartar removal and stain polishing for healthy gums and fresh breath.",
    highlight: "Safe for enamel, recommended every 6 months"
  },
  {
    id: "fillings-gums",
    title: "Invisible Fillings & Gum Care",
    tag: "Tooth-Coloured",
    icon: "Layers",
    desc: "Nano-composite cavity fillings and laser therapy for bleeding gums or sensitivity.",
    highlight: "100% mercury-free, natural tooth shade match"
  }
];

export const MORE_SERVICES = [
  {
    id: "tmj-nightguards",
    title: "TMJ & Night Guards",
    tag: "Grinding Relief",
    icon: "Moon",
    desc: "Custom dental splints to prevent night teeth grinding (bruxism) and ease jaw soreness."
  },
  {
    id: "dentures",
    title: "Dentures & Fixed Bridges",
    tag: "Full Restoration",
    icon: "Grid",
    desc: "Lightweight acrylic partials and fixed ceramic dental bridges for easy chewing."
  },
  {
    id: "radiology",
    title: "Digital Mini X-Rays",
    tag: "Instant Chairside",
    icon: "Scan",
    desc: "Instant high-definition tooth imaging with up to 80% lower radiation exposure."
  },
  {
    id: "child-dentistry",
    title: "Child Preventive Dentistry",
    tag: "Gentle & Friendly",
    icon: "HeartHandshake",
    desc: "Molar sealants and fluoride treatments designed to protect kids' teeth against cavities."
  }
];

export const PATIENT_REVIEWS = [
  {
    id: 1,
    name: "Suraj K.",
    treatment: "Root Canal & Cleaning",
    rating: 5,
    source: "Practo Verified",
    tag: "Honest Diagnosis",
    quote: "Dr. Abhisheak did a detailed scan of the aching jaw and showed us on screen the exact area affected. Extremely empathetic and friendly doctor!",
    verified: true
  },
  {
    id: 2,
    name: "Vikram N.",
    treatment: "Wisdom Tooth Extraction",
    rating: 5,
    source: "Google Review",
    tag: "15-Min Painless Procedure",
    quote: "The extraction was done in a 15-minute process including anesthesia! Post care procedures clearly explained and Dr. followed up with me daily.",
    verified: true
  },
  {
    id: 3,
    name: "Ananya M.",
    treatment: "Tooth Sensitivity Care",
    rating: 5,
    source: "Practo Verified",
    tag: "Genuine Care (No Unneeded RCT)",
    quote: "Other clinics told me I needed an expensive RCT. Dr. Abhisheak suggested anti-sensitivity paste and it worked! True honesty and trust.",
    verified: true
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "CheckCircle",
    title: "Honest Diagnosis First",
    desc: "No unnecessary root canals or extractions. If a simple conservative remedy works, we tell you upfront."
  },
  {
    icon: "HeartPulse",
    title: "Painless & Gentle Care",
    desc: "Modern rotary endodontics and gentle 15-minute extraction techniques to keep you comfortable."
  },
  {
    icon: "Clock",
    title: "Open 7 Days a Week",
    desc: "Morning (10am–2pm) & Evening (5pm–9pm) slots so you never have to take leave from work."
  },
  {
    icon: "PhoneCall",
    title: "Doctor WhatsApp Follow-up",
    desc: "Dr. Abhisheak personally checks on your post-treatment recovery to ensure peace of mind."
  }
];

export const CLINIC_GALLERY = [
  {
    id: 1,
    title: "Dr. Abhisheak R Naik",
    subtitle: "Lead Dental Surgeon & Oral Radiologist",
    src: drPhoto,
    alt: "Dr. Abhisheak R Naik at SLV Dental Clinic"
  },
  {
    id: 2,
    title: "Modern Treatment Operatory",
    subtitle: "Ergonomic chair & digital sterilization",
    src: clinicChair,
    alt: "SLV Dental Clinic Treatment Operatory Chair"
  },
  {
    id: 3,
    title: "Consultation & X-Ray Suite",
    subtitle: "Chairside digital diagnostics",
    src: clinicRoom,
    alt: "SLV Dental Clinic Consultation Room"
  },
  {
    id: 4,
    title: "Birla Circle Clinic Location",
    subtitle: "1st Floor, Above Ramdev Medicals",
    src: clinicBoard,
    alt: "SLV Dental Clinic Exterior & Entrance"
  }
];
