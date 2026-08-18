import drPhoto from '../assets/dr_abhisheak_naik.jpg';
import clinicChair from '../assets/clinic_chair.jpg';
import clinicRoom from '../assets/clinic_room.jpg';
import clinicBoard from '../assets/clinic_board.jpg';

export const CLINIC_INFO = {
  name: "SLV Dental Clinic & Implant Centre",
  alternateName: "SLV Dental Care & Implant Centre",
  tagline: "Advanced Dental Solutions with Honest Diagnosis & Gentle Care",
  location: "Haralur, Bangalore",
  address: {
    line1: "#99/4, 1st Floor, Birla Circle",
    line2: "Above Ramdev Medicals, Haralur Main Road",
    area: "Haralur / HSR Layout Extension",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560102",
    landmarks: ["Directly Above Ramdev Medicals", "At Birla Circle", "Opposite Passion Apartment"]
  },
  contact: {
    phonePrimary: "+91 98333 87738",
    phoneDisplay: "+91 98333 87738",
    phoneSecondary: "+91 80 4567 8900",
    whatsappNumber: "919833387738",
    email: "info@slvdentalclinic.com", // Ready for user's email update
    practoUrl: "https://www.practo.com/bangalore/clinic/slv-dental-clinic-implant-centre-harlur",
    googleShareUrl: "https://share.google/6N8NLQaNhfyj9xOPF",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.28821558231!2d77.65453867598858!3d12.894250687413645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b6932a9341%3A0xb695eef9a8d9b158!2sSLV%20Dental%20Clinic%20And%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir//12.894250652369,77.657113568645"
  },
  doctor: {
    name: "Dr. Abhisheak R Naik",
    title: "Cosmetic/Aesthetic Dentist, Dental Surgeon & Oral Radiologist",
    degrees: "BDS, MDS - Oral Medicine and Radiology",
    experienceYears: 15,
    specialities: [
      "Cosmetic & Aesthetic Dentistry",
      "Advanced Root Canal Treatments (RCT)",
      "Dental Implants & Prosthodontics",
      "Oral Medicine & Digital Radiology",
      "Painless Wisdom Tooth Extraction",
      "Laser Periodontal & Gum Therapy"
    ],
    consultationFee: 350,
    rating: 5.0,
    votesCount: 455,
    recommendationRate: "100%",
    photo: drPhoto,
    bio: "Dr. Abhisheak R Naik is a highly trusted dental surgeon and oral radiology specialist with over 15 years of clinical excellence. Renowned across Haralur and HSR Layout for his conservative diagnostic philosophy—never recommending an unnecessary root canal or extraction when conservative care works—and his attentive post-procedure WhatsApp follow-ups."
  },
  timings: {
    summary: "Open All 7 Days a Week",
    days: "Monday – Sunday",
    sessions: [
      { name: "Morning Session", time: "10:00 AM – 01:30 PM", icon: "Sun" },
      { name: "Evening Session", time: "05:00 PM – 09:00 PM", icon: "Moon" }
    ],
    detailedSchedule: [
      { day: "Monday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Tuesday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Wednesday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Thursday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Friday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Saturday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" },
      { day: "Sunday", morning: "10:00 AM - 01:30 PM", evening: "05:00 PM - 09:00 PM", status: "Open" }
    ]
  },
  stats: [
    { value: "5.0 ★", label: "Patient Rating", sublabel: "Practo & Google Verified" },
    { value: "455+", label: "Patient Stories", sublabel: "100% Recommended" },
    { value: "15+", label: "Years Experience", sublabel: "Clinical Excellence" },
    { value: "22+", label: "Specialized Treatments", sublabel: "Painless & Advanced" }
  ]
};

export const SERVICES_CATEGORIES = [
  "All",
  "Restorative & RCT",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Oral Surgery",
  "Gums & Preventive"
];

export const SERVICES_LIST = [
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    category: "Restorative & RCT",
    icon: "Sparkles",
    tag: "Popular & Painless",
    shortDesc: "Single-sitting and multi-visit painless root canal therapy using rotary endodontics and digital apex locators.",
    benefits: [
      "Relieves severe acute toothache immediately",
      "Preserves natural tooth structure",
      "Performed under precise mini digital X-ray guidance",
      "High-grade biocompatible crown restorations"
    ],
    duration: "45 - 60 mins / sitting"
  },
  {
    id: "implants",
    title: "Dental Implants & Prosthetics",
    category: "Dental Implants",
    icon: "ShieldCheck",
    tag: "Permanent Solution",
    shortDesc: "Premium titanium & zirconia dental implants that restore natural bite strength, chewing comfort, and smile aesthetics.",
    benefits: [
      "Lifetime durable replacement for missing teeth",
      "No damage to adjacent healthy teeth",
      "Custom crown matching your natural tooth shade",
      "Natural bone preservation and facial support"
    ],
    duration: "Surgical & Restorative Phases"
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Extraction",
    category: "Oral Surgery",
    icon: "Zap",
    tag: "Quick 15-Min Procedure",
    shortDesc: "Gentle, precision surgical removal of impacted or decayed wisdom teeth with minimal trauma and swift recovery.",
    benefits: [
      "Completed in approx. 15 minutes with local anesthesia",
      "Instant relief from jaw throbbing and gum pericoronitis",
      "Preventive protection for neighboring molars",
      "Detailed post-op medication & daily follow-up"
    ],
    duration: "15 - 30 mins"
  },
  {
    id: "cosmetic",
    title: "Cosmetic & Smile Makeover",
    category: "Cosmetic Dentistry",
    icon: "Smile",
    tag: "Aesthetic Excellence",
    shortDesc: "Custom composite bonding, porcelain veneers, diastema (gap) closures, and smile enhancements.",
    benefits: [
      "Corrects chipped, discolored, or misaligned teeth",
      "Natural translucency and lifelike appearance",
      "Personalized facial aesthetic alignment",
      "Long-lasting stain resistant results"
    ],
    duration: "1 - 2 appointments"
  },
  {
    id: "scaling",
    title: "Teeth Cleaning & Polishing",
    category: "Gums & Preventive",
    icon: "Sparkles",
    tag: "Routine Preventive Care",
    shortDesc: "Ultrasonic tartar removal, plaque debridement, and enamel stain polishing for sparkling breath and gum health.",
    benefits: [
      "Eliminates calculus and stubborn coffee/tea stains",
      "Stops gum bleeding and bad breath (halitosis)",
      "Gentle ultrasonic tips safe for dental enamel",
      "Recommended once every 6 months"
    ],
    duration: "30 - 45 mins"
  },
  {
    id: "fillings",
    title: "Tooth-Coloured Fillings",
    category: "Restorative & RCT",
    icon: "Layers",
    tag: "Invisible Repair",
    shortDesc: "Nano-hybrid composite resins seamlessly matched to your enamel shade for cavity restorations.",
    benefits: [
      "Completely invisible and blends with natural tooth",
      "Direct bonding reinforces tooth structure",
      "100% Mercury-free, modern biocompatible materials",
      "Completed in a single comfortable visit"
    ],
    duration: "20 - 30 mins"
  },
  {
    id: "laser-gums",
    title: "Laser Gum Surgery & Bleeding Gums Treatment",
    category: "Gums & Preventive",
    icon: "Activity",
    tag: "Advanced Laser Tech",
    shortDesc: "Minimally invasive laser therapy for gingivitis, bleeding gums, gum recession, and periodontitis.",
    benefits: [
      "No sutures or scalpels needed in many cases",
      "Fast healing with minimal to no post-op bleeding",
      "Eliminates deep bacterial pockets under gums",
      "Promotes natural tissue reattachment"
    ],
    duration: "30 - 45 mins"
  },
  {
    id: "tmj-nightguards",
    title: "TMJ Therapy & Bruxism Night Guards",
    category: "Oral Surgery",
    icon: "Moon",
    tag: "Specialized Care",
    shortDesc: "Custom-fitted occlusal night guards to prevent teeth grinding (bruxism), relieve jaw soreness, and treat TMJ pain.",
    benefits: [
      "Protects teeth from severe wear and enamel chipping",
      "Relieves morning jaw stiffness and tension headaches",
      "Expert diagnosis of bite imbalances",
      "Comfortable medical-grade transparent splint"
    ],
    duration: "Custom Impression & Fitting"
  },
  {
    id: "dentures",
    title: "Dentures (Acrylic & Fixed Partial FPD)",
    category: "Dental Implants",
    icon: "Grid",
    tag: "Full Functionality",
    shortDesc: "Precision fixed ceramic bridges (FPD) and partial or complete lightweight acrylic dentures.",
    benefits: [
      "Restores effortless chewing and clear speech",
      "Snug, comfortable fit engineered for longevity",
      "Affordable multi-tooth restoration options",
      "Easy maintenance and hygienic materials"
    ],
    duration: "2 - 3 visits"
  },
  {
    id: "radiology",
    title: "Digital Oral Radiology & Mini X-Rays",
    category: "Restorative & RCT",
    icon: "Scan",
    tag: "In-House Diagnostics",
    shortDesc: "Instant chairside digital radiography with ultra-low radiation for rapid, high-definition bone and tooth analysis.",
    benefits: [
      "Instant on-screen visualization shown to the patient",
      "Up to 80% lower radiation compared to traditional films",
      "Pinpoints hidden interdental decay and root infections",
      "Zero wait time—done right during consultation"
    ],
    duration: "2 mins"
  },
  {
    id: "pediatric-sealants",
    title: "Dental Sealants & Child Dentistry",
    category: "Gums & Preventive",
    icon: "HeartHandshake",
    tag: "Child-Friendly",
    shortDesc: "Protective resin sealants for children's deep molars, fluoride varnish therapies, and gentle pediatric dental care.",
    benefits: [
      "Blocks cavity-causing bacteria in deep tooth grooves",
      "Non-invasive, totally painless application",
      "Calm, reassuring clinic environment for kids",
      "Instills lifelong healthy dental hygiene habits"
    ],
    duration: "20 mins"
  },
  {
    id: "emergency",
    title: "Emergency Toothache & Dental Trauma",
    category: "Oral Surgery",
    icon: "PhoneCall",
    tag: "Same-Day Priority",
    shortDesc: "Fast-track emergency relief for acute toothache, broken crowns, dental abscesses, or facial swelling.",
    benefits: [
      "Same-day emergency consultation slots",
      "Immediate pain management and diagnostics",
      "Open 7 days a week for urgent weekend dental care",
      "Direct guidance and follow-up care"
    ],
    duration: "Urgent Care"
  }
];

export const PATIENT_REVIEWS = [
  {
    id: 1,
    name: "Suraj K.",
    treatment: "RCT - Root Canal Treatment & Teeth Cleaning",
    rating: 5,
    source: "Practo Verified Story",
    date: "Verified Patient",
    tag: "Detailed Diagnosis & Empathy",
    highlight: "Dr. Abhishek did a detailed checkup and scan of the aching jaw... Showed us on the scan the exact area affected.",
    review: "My partner had a bad toothache and we chose to check up with Dr. Abhishek at SLV Dental, Harlur. Dr. Abhishek did a detailed checkup and scan of the aching jaw. He made a hypothesis regarding gum inflammation above the wisdom tooth and confirmed it using scans. He showed us on the screen the exact area affected and gave different possible options. Besides, he advised us on night grinding and a custom night guard. Another friend got an infection in her tooth and had her RCT completed here and is doing fine. Dr. Abhishek is an empathetic, extremely friendly doctor!"
  },
  {
    id: 2,
    name: "Vikram N.",
    treatment: "Wisdom Tooth Extraction",
    rating: 5,
    source: "Practo / Google Review",
    date: "Verified Patient",
    tag: "15-Min Painless Extraction",
    highlight: "Surgeon performed the extraction in a 15-minute process to be exact including anesthesia. Daily follow-ups on phone!",
    review: "Woke up one fine morning with excruciating pain throbbing through my right upper jaw. I checked with our RWA WhatsApp group and Dr. Naik was highly recommended. Booked the appointment the same evening. Dr. listened patiently, X-ray was taken, and on the appointment date, the extraction was done in a 15-minute process to be exact including anesthesia! Post care procedures were clearly explained with written instructions. Dr. followed up with me daily on the phone giving relevant advice. 10/10 recommendation for Dr. Naik!"
  },
  {
    id: 3,
    name: "Ananya M.",
    treatment: "Tooth Sensitivity & Honest Diagnosis",
    rating: 5,
    source: "Practo Verified Story",
    date: "Verified Patient",
    tag: "Honest & Trustworthy",
    highlight: "Other clinics told me it was a cavity needing RCT. Dr. Abhisheak suggested anti-sensitivity toothpaste and it worked perfectly!",
    review: "Dr. Abhisheak's diagnosis is excellent and he has a genuine intent of suggesting the right treatment. I was suffering from minor sensitivity and Dr. Abhisheak suggested to not go for any RCT at this stage and try an anti-sensitivity toothpaste — and it worked perfectly! Other popular places in Bangalore told me it needed RCT and capping. A big factor — trust — is something you will find with Dr. Abhisheak. Later I also got cavity fillings and wisdom tooth treated here. Outstanding experience and dedicated WhatsApp follow-ups."
  },
  {
    id: 4,
    name: "Meera R.",
    treatment: "Cosmetic & Aesthetic Dentistry",
    rating: 5,
    source: "Google Reviews",
    date: "Verified Patient",
    tag: "Smile Makeover & Cordial Care",
    highlight: "Dr. Abhishek is very professional, explained the cause and diagnosis in detail, and always followed up on my progress.",
    review: "It's been a very pleasant experience throughout my treatment and I would highly recommend visiting SLV Dental Clinic for any dental problems. Dr. Abhishek is very professional, explained the cause and diagnosis in details, and allowed me to ask all my queries patiently. The friendliness and cordial atmosphere in the clinic is remarkable. Thanks to Dr. Abhishek and the entire team for great care!"
  },
  {
    id: 5,
    name: "Rahul Verma",
    treatment: "Dental Scaling & Tooth Filling",
    rating: 5,
    source: "Practo Verified Story",
    date: "Verified Patient",
    tag: "Gentle & Fast Relief",
    highlight: "Clean clinic, punctual timing, and absolutely zero pain during scaling and composite filling.",
    review: "Very hygienic and well-maintained clinic right at Birla Circle. Dr. Naik is extremely gentle and transparent about the process. Consultation fee of ₹350 is very reasonable for the high quality of care provided. Highly recommend for families in Haralur and HSR."
  },
  {
    id: 6,
    name: "Deepa S.",
    treatment: "Night Guard for Teeth Grinding & TMJ Relief",
    rating: 5,
    source: "Google Reviews",
    date: "Verified Patient",
    tag: "TMJ Soreness Resolved",
    highlight: "Explained the root cause of my morning headaches and jaw pain. The night guard fit like a glove.",
    review: "I had unexplained jaw pain and morning headaches for months. Dr. Abhisheak identified nocturnal teeth grinding (bruxism) and custom-fabricated a night splint. Within two weeks the pain completely disappeared. Truly grateful for his accurate clinical diagnosis!"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "CheckCircle",
    title: "Honest & Conservative Diagnosis",
    desc: "We never recommend invasive procedures like root canals or extractions when a conservative treatment or preventive remedy works."
  },
  {
    icon: "Clock",
    title: "Open All 7 Days (Mon - Sun)",
    desc: "Flexible morning (10 AM - 1:30 PM) and evening (5 PM - 9 PM) OPD slots suited for working professionals and families."
  },
  {
    icon: "Scan",
    title: "In-House Digital Mini X-Rays",
    desc: "Chairside instant digital radiography for accurate diagnosis on large screens with ultra-low radiation."
  },
  {
    icon: "HeartPulse",
    title: "15-Minute Gentle Oral Surgery",
    desc: "Specialized painless extraction and rotary endodontics techniques designed to eliminate patient anxiety."
  },
  {
    icon: "PhoneCall",
    title: "Proactive Post-Op WhatsApp Support",
    desc: "We don't leave you after the chair; Dr. Naik personally checks in on your recovery status and answers queries."
  },
  {
    icon: "Shield",
    title: "100% Autoclave Sterilization",
    desc: "Hospital-grade multi-tier sterilization protocols and single-use disposable kits for absolute patient safety."
  }
];

export const CLINIC_GALLERY = [
  {
    id: 1,
    title: "Dr. Abhisheak R Naik",
    subtitle: "Chief Dental Surgeon & Oral Radiologist",
    src: drPhoto,
    alt: "Dr. Abhisheak R Naik at SLV Dental Clinic"
  },
  {
    id: 2,
    title: "Modern Operatory & Ergonomic Dental Chair",
    subtitle: "Advanced digital instruments & sanitised treatment zone",
    src: clinicChair,
    alt: "SLV Dental Clinic Treatment Operatory Chair"
  },
  {
    id: 3,
    title: "Consultation & Diagnostics Room",
    subtitle: "Equipped with digital radiography and patient viewing monitors",
    src: clinicRoom,
    alt: "SLV Dental Clinic Consultation Room"
  },
  {
    id: 4,
    title: "Clinic Facility & Birla Circle Landmark",
    subtitle: "Easy to locate above Ramdev Medicals on Haralur Main Road",
    src: clinicBoard,
    alt: "SLV Dental Clinic Exterior & Entrance"
  }
];

export const FAQS = [
  {
    q: "Is Root Canal Treatment (RCT) painful at SLV Dental?",
    a: "Not at all. With modern local anesthetics, rotary endodontic equipment, and digital apex locators, RCT is virtually painless and provides immediate relief from toothache. Most patients describe it as comfortable as getting a routine filling."
  },
  {
    q: "Is the clinic open on weekends (Saturdays & Sundays)?",
    a: "Yes! SLV Dental Clinic & Implant Centre is open all 7 days a week, including both Saturday and Sunday, from 10:00 AM to 01:30 PM (Morning) and 05:00 PM to 09:00 PM (Evening)."
  },
  {
    q: "How much is the initial consultation fee?",
    a: "The standard doctor consultation fee is ₹350. There are no hidden booking charges or surprise fees."
  },
  {
    q: "How long does a wisdom tooth extraction take?",
    a: "In most cases, the actual extraction takes approximately 15 minutes, including the administration of local anesthesia. Dr. Naik provides written post-care instructions and follow-ups to ensure a smooth recovery."
  },
  {
    q: "Do I need to book an appointment in advance?",
    a: "While walk-ins are welcome, we strongly recommend booking an appointment in advance via our website form, WhatsApp, or phone call to avoid waiting time."
  },
  {
    q: "Where is the clinic located in Haralur?",
    a: "We are located at #99/4, 1st Floor, Birla Circle, Haralur Main Road, Bangalore (Opposite Passion Apartment, directly Above Ramdev Medicals)."
  }
];
