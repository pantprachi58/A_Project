export const siteConfig = {
  name: "Ankush Painuly",
  brand: "Ankush",
  brandSuffix: "Painuly",
  tagline: "Capturing Moments That Matter",
  aboutBio:
    "With over 10 years of experience in portrait, wedding, nature, landscape, commercial, and event photography, I specialize in creating timeless images that tell your unique story. My approach combines technical excellence with genuine human connection, ensuring every shoot feels natural and authentic.",
  aboutSecondary:
    "With over 10 years of experience in photography, I specialize in capturing authentic moments and creating timeless memories. My passion lies in wedding photography, portrait sessions, and commercial work.",
  location: "Dehradun, Uttarakhand",
  email: "ankushpainuly398@gmail.com",
  phone: "+91 81714 76174",
  social: {
    instagram: "https://www.instagram.com/ankush_frames/",
    facebook: "https://facebook.com/ankushpainuly",
    linkedin: "https://www.linkedin.com/in/ankush-painuly-1890b020b/",
  },
};

export const stats = [
  { id: "years", label: "Years Experience", value: "10+" },
  { id: "clients", label: "Happy Clients", value: "500+" },
  { id: "shoots", label: "Shoots", value: "10k+" },
  { id: "awards", label: "Awards Won", value: "15+" },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

// The six bookable packages shown as flip-cards in the Services section.
export const services = [
  {
    key: "Wedding",
    title: "Wedding Photography",
    desc: "We capture your special day with the most beautiful moments and emotions.",
    img: "/images/wedding-photo.jpg",
    price: "Starting from ₹50,000",
    priceColor: "#f9a8d4",
    features: ["Full day coverage", "Pre-wedding consultation", "Online gallery", "Edited photos", "2 photographers"],
  },
  {
    key: "Pre Wedding",
    title: "Pre Wedding Shoots",
    desc: "Our pre-wedding shoots will make your journey towards the wedding memorable.",
    img: "/images/prewedding-photo.jpg",
    price: "Starting from ₹35,000",
    priceColor: "#fda4af",
    features: ["4-hour session", "Multiple locations", "Outfit changes", "100+ edited photos", "Love story album"],
  },
  {
    key: "Portrait",
    title: "Portrait Sessions",
    desc: "Professional portraits that tell your unique story with artistic flair.",
    img: "/images/portrait-photo.jpg",
    price: "Starting from ₹15,000",
    priceColor: "#93c5fd",
    features: ["2-hour session", "Multiple locations", "Wardrobe consultation", "50+ edited photos", "Online gallery"],
  },
  {
    key: "Event",
    title: "Event Coverage",
    desc: "Complete event documentation for special occasions and celebrations.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    price: "Starting from ₹20,000",
    priceColor: "#fdba74",
    features: ["Corporate events", "Birthday parties", "Anniversaries", "Live coverage", "Same-day edits"],
  },
  {
    key: "Commercial",
    title: "Commercial Photography",
    desc: "High-quality commercial photography that elevates your business.",
    img: "/images/commercial-photo.jpg",
    price: "Starting from ₹25,000",
    priceColor: "#86efac",
    features: ["Product photography", "Corporate headshots", "Brand campaigns", "High-res files", "Quick turnaround"],
  },
  {
    key: "Fashion",
    title: "Fashion Photography",
    desc: "Professional fashion photography that brings your creative vision to life.",
    img: "/images/fashion-photo.jpg",
    price: "Starting from ₹30,000",
    priceColor: "#d8b4fe",
    features: ["Editorial shoots", "Model portfolios", "Fashion campaigns", "Studio setup", "Creative direction"],
  },
];

// The full category set previewed on the homepage Portfolio section; each
// card links out to /portfolio?category=X (matching the live site's behavior).
export const portfolioPreview = [
  { key: "Wedding", title: "Weddings", desc: "We capture your special day with the most beautiful moments and emotions.", img: "/images/wedding-photo.jpg" },
  { key: "Pre Wedding", title: "Pre Wedding", desc: "Our pre-wedding shoots will make your journey towards the wedding memorable.", img: "/images/prewedding-photo.jpg" },
  { key: "Portrait", title: "Portraits", desc: "Professional portraits that tell your unique story with artistic flair.", img: "/images/portrait-photo.jpg" },
  {
    key: "Event",
    title: "Events",
    desc: "Complete event documentation for special occasions and celebrations.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  { key: "Commercial", title: "Commercial", desc: "High-quality commercial photography that elevates your business.", img: "/images/commercial-photo.jpg" },
  { key: "Fashion", title: "Fashion", desc: "Professional fashion photography that brings your creative vision to life.", img: "/images/fashion-photo.jpg" },
  {
    key: "Maternity",
    title: "Maternity",
    desc: "Celebrate the beautiful journey of motherhood with elegant maternity photography.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "Engagement",
    title: "Engagement",
    desc: "Romantic sessions that capture your love story beautifully, one frame at a time.",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "Celebrity",
    title: "Celebrity Shoots",
    desc: "High-profile celebrity shoots delivered with a polished, editorial finish.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "Client Edits",
    title: "Client Edits",
    desc: "Professional retouching and edits delivered with a fast, reliable turnaround.",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "Reels",
    title: "Reels",
    desc: "Dynamic video reels capturing moments in motion with cinematic storytelling.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    key: "Motion Graphics",
    title: "Motion Graphics",
    desc: "Creative motion graphics and animated visuals that bring your brand and stories to life.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
];

export const portfolioCategories = ["All", ...portfolioPreview.map((p) => p.key)];

export const portfolioItems = [
  { id: 1, title: "Wedding Ceremony", category: "Wedding", img: "/images/wedding-photo.jpg" },
  {
    id: 2,
    title: "Reception Celebration",
    category: "Wedding",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  { id: 3, title: "Beautiful Pre Wedding Photography", category: "Pre Wedding", img: "/images/prewedding-photo.jpg" },
  {
    id: 4,
    title: "Romantic Moments",
    category: "Pre Wedding",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
  },
  { id: 5, title: "Bridal Portrait", category: "Portrait", img: "/images/portrait-photo.jpg" },
  {
    id: 6,
    title: "Studio Portrait",
    category: "Portrait",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Natural Light Portrait",
    category: "Portrait",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Professional Event Coverage",
    category: "Event",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  { id: 9, title: "Professional Commercial Photography", category: "Commercial", img: "/images/commercial-photo.jpg" },
  {
    id: 10,
    title: "Product Photography",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  { id: 11, title: "Fashion Editorial", category: "Fashion", img: "/images/fashion-photo.jpg" },
  {
    id: 12,
    title: "Street Style",
    category: "Fashion",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Maternity Session",
    category: "Maternity",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "Engagement Session",
    category: "Engagement",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "Couple Portrait",
    category: "Engagement",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    title: "Celebrity Shoot",
    category: "Celebrity",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "Client Edits",
    category: "Client Edits",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 18,
    title: "Reels Video Content",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 19,
    title: "Motion Graphics",
    category: "Motion Graphics",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Client",
    rating: 5,
    comment:
      "Ankush captured our wedding so beautifully. Every photo feels like a story. Truly grateful we found him!",
  },
  {
    id: 2,
    name: "Rohan Verma",
    role: "Pre-Wedding Client",
    rating: 5,
    comment:
      "The pre-wedding shoot was so much fun and the pictures came out stunning. Highly recommend his work!",
  },
  {
    id: 3,
    name: "Ananya Kapoor",
    role: "Portrait Client",
    rating: 5,
    comment:
      "Professional, patient, and incredibly talented. My portrait session felt effortless and the results were amazing.",
  },
  {
    id: 4,
    name: "Studio Nine Brand",
    role: "Commercial Client",
    rating: 4,
    comment:
      "Great eye for detail and lighting. Our product shoot elevated our brand's entire online presence.",
  },
];
