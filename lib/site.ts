export const site = {
  name: "B-Creative",
  tagline: "Creative + IT under one roof",
  phone: "+966597630124",
  whatsapp: "https://wa.me/966597630124",
  email: "bcreativenetworkagency@gmail.com",
  address: "Hayee Shatee 1, Cornich, Jeddah, Saudi Arabia",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Branding",
    text: "A clear identity that makes your business look like the market leader.",
    icon: "Sparkles",
    points: ["Brand strategy", "Logo and visual identity", "Brand guidelines"],
  },
  {
    title: "Graphic Design",
    text: "Designs that sell, ready for print and for screens.",
    icon: "PenTool",
    points: ["Social media graphics", "Brochures and flyers", "Banners and posters"],
  },
  {
    title: "Websites",
    text: "Fast, mobile-friendly sites built to bring you leads.",
    icon: "Globe",
    points: ["Business and landing pages", "Portfolio and blog sites", "Basic SEO included"],
  },
  {
    title: "Apps",
    text: "Custom tools that match how your business actually works.",
    icon: "Smartphone",
    points: ["Mobile apps", "Web applications", "Customer-facing tools"],
  },
  {
    title: "Social Media",
    text: "Steady content and ads that grow your audience.",
    icon: "Share2",
    points: ["Content and scheduling", "Ad campaign management", "Monthly reports"],
  },
  {
    title: "IT & ERP Support",
    text: "Reliable systems and a team you can call when something breaks.",
    icon: "Server",
    points: ["ERP support", "Digital systems", "Ongoing maintenance"],
  },
];

// TODO: replace with REAL numbers from the client. Do not publish made-up numbers.
export const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 3, suffix: " yrs", label: "In Jeddah" },
  { value: 3, suffix: " days", label: "Typical design delivery" },
];



// TODO: replace with real projects the client has permission to show.
export const work = [
  { title: "Project One", category: "Branding", from: "#7c3aed", to: "#22d3ee" },
  { title: "Project Two", category: "Website", from: "#ec4899", to: "#7c3aed" },
  { title: "Project Three", category: "Social Media", from: "#22d3ee", to: "#10b981" },
  { title: "Project Four", category: "Graphic Design", from: "#f59e0b", to: "#ec4899" },
  { title: "Project Five", category: "App", from: "#6366f1", to: "#22d3ee" },
  { title: "Project Six", category: "Branding", from: "#10b981", to: "#7c3aed" },
];




export const about = {
  text: "B-Creative is a full-service advertising agency in Saudi Arabia and Pakistan, offering creative and IT solutions. We combine branding, social media marketing, graphic design, website development, ERP support and digital systems to help businesses grow online and offline.",
  locations: ["Saudi Arabia", "Pakistan"],
};

export const ceo = {
  name: "Muhammad Bilal",
  role: "Founder & CEO",
  photo: "/team/ceo.jpeg",
  text: "Muhammad Bilal is the Founder and CEO of B-Creative, an advertising and IT agency based in Jeddah, KSA. With a vision to merge creativity with technology, he leads a team that delivers branding, digital marketing, website development and IT solutions. Under his leadership, B-Creative helps businesses grow through smart design and reliable tech.",
};

// Names and roles only. No personal phone or email on a public site.
export const team: { name: string; role: string; photo?: string }[] = [
  { name: "Muhammad Bilal Mustafa", role: "Application Developer", photo: "/team/bilal.jpeg" },
  { name: "Palwasha Khan", role: "Website Developer", photo: "/team/palwasha.jpg" },
  { name: "Zubaria Khalid", role: "Graphic Designer", photo: "/team/zubaria.jpeg" },
  { name: "Akasha Rahman", role: "Social Media Manager", photo: "/team/akasha.jpeg" },
];

export const approach = [
  "Understand your business goals and requirements",
  "Develop tailored solutions that meet your needs",
  "Collaborate and deliver high-quality services",
  "Provide ongoing support and maintenance",
];

export const benefits = [
  "Enhanced brand identity and online presence",
  "Increased customer engagement and conversion rates",
  "Improved digital marketing and outreach",
  "Competitive edge in the market",
];

export const achievements = [
  {
    year: "2026",
    parts: [
      { t: "We’re proud to provide Graphic Design Services for " },
      { t: "Albaik", b: true },
      { t: ", " },
      { t: "Abeer Medical Group", b: true },
      { t: ", and " },
      { t: "L’Oréal Paris Hair Serum", b: true },
      { t: "." },
    ],
  },
  {
    year: "2025",
    parts: [
      { t: "We’re proud to provide Graphic Design Services for " },
      { t: "Arura Gold", b: true },
      { t: ", " },
      { t: "Dental Care Clinic", b: true },
      { t: " and in collaboration work in " },
      { t: "Creative Solution", b: true },
      { t: " with " },
      { t: "NADEC", b: true },
      { t: " and " },
      { t: "Hyundai", b: true },
      { t: "." },
    ],
  },
] as { year: string; parts: { t: string; b?: boolean }[] }[];