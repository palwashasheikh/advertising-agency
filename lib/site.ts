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

export const servicesIntro =
  "We offer IT services to enhance your digital presence and drive business growth.";

export const services = [
  {
    title: "Graphic Designing",
    text: "Create engaging visuals, logos, and branding materials that capture your brand’s essence.",
    icon: "PenTool",
  },
  {
    title: "Website Development",
    text: "Design and develop a responsive, user-friendly website that showcases your services and products.",
    icon: "Globe",
  },
  {
    title: "Application Development",
    text: "Build custom mobile and web applications that meet your business needs and enhance customer engagement.",
    icon: "Smartphone",
  },
  {
    title: "Social Media Managing",
    text: "Develop and implement a social media strategy that boosts your online presence and drives traffic.",
    icon: "Share2",
  },
];

// TODO: replace with REAL numbers from the client. Do not publish made-up numbers.
export const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 6, suffix: " yrs", label: "Years Saudi Arabia" },
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
  text: "B-CREATIVE NETWORK AGENCY is a dynamic creative agency proudly based in Saudi Arabia and Pakistan. We are committed to combining innovation, strategy, and technology to help businesses build a powerful online presence. Trusted by clients across both regions, we focus on creativity, quality, and long-term growth.",
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