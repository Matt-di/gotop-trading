export const clients = [
  { name: "R&D Group", logo: "🔬" },
  { name: "Oromia Tourism Commission", logo: "🏛️" },
  { name: "Addis Ababa Drivers & Vehicle Licensing Authority", logo: "🚗" },
  { name: "EBC", logo: "📺" },
  { name: "Qube Communication", logo: "📡" },
];

export const services = [
  {
    id: "software",
    title: "Software Development",
    icon: "💻",
    shortDescription: "Custom software solutions tailored to your business needs",
    fullDescription: "We specialize in creating robust, scalable software solutions that drive business growth. From enterprise applications to mobile apps, our team delivers cutting-edge technology solutions that transform your operations.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "System Integration",
      "API Development",
      "Cloud Solutions"
    ]
  },
  {
    id: "media",
    title: "Media & Dubbing",
    icon: "🎬",
    shortDescription: "Professional media production and dubbing services",
    fullDescription: "Our media and dubbing services bring your content to life across multiple languages and platforms. With state-of-the-art equipment and experienced professionals, we deliver high-quality audio and video production.",
    features: [
      "Voice Over & Dubbing",
      "Video Production",
      "Audio Post-Production",
      "Subtitling & Captioning",
      "Content Localization",
      "Studio Recording"
    ]
  },
  {
    id: "printing",
    title: "Printing Press",
    icon: "🖨️",
    shortDescription: "High-quality printing solutions for all your needs",
    fullDescription: "From business cards to large-format banners, our printing press delivers exceptional quality and fast turnaround times. We use the latest printing technology to ensure your materials look professional and impactful.",
    features: [
      "Digital & Offset Printing",
      "Large Format Printing",
      "Brochures & Catalogs",
      "Business Cards & Stationery",
      "Packaging Solutions",
      "Custom Print Products"
    ]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Tourism Management System",
    client: "Oromia Tourism Commission",
    category: "software",
    image: "🏛️",
    description: "A comprehensive tourism management platform for tracking visitors, managing attractions, and generating analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2024"
  },
  {
    id: 2,
    title: "Vehicle Licensing Portal",
    client: "AA Drivers & Vehicle Licensing Authority",
    category: "software",
    image: "🚗",
    description: "Digital transformation of vehicle licensing processes with online applications, renewals, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    year: "2024"
  },
  {
    id: 3,
    title: "Documentary Dubbing Project",
    client: "EBC",
    category: "media",
    image: "📺",
    description: "Professional dubbing services for multiple documentary series in various local languages.",
    technologies: ["Pro Tools", "Adobe Audition", "Multi-language"],
    year: "2023"
  },
  {
    id: 4,
    title: "Corporate Branding Package",
    client: "R&D Group",
    category: "printing",
    image: "🔬",
    description: "Complete corporate branding materials including business cards, letterheads, brochures, and marketing collateral.",
    technologies: ["Offset Printing", "Digital Print", "UV Coating"],
    year: "2023"
  },
  {
    id: 5,
    title: "Marketing Campaign Materials",
    client: "Qube Communication",
    category: "printing",
    image: "📡",
    description: "Large-scale printing of promotional materials for nationwide marketing campaign.",
    technologies: ["Large Format", "Digital Print", "Finishing"],
    year: "2024"
  },
  {
    id: 6,
    title: "ERP System Implementation",
    client: "R&D Group",
    category: "software",
    image: "🔬",
    description: "Custom enterprise resource planning system integrating inventory, HR, and financial management.",
    technologies: ["Angular", "Django", "MySQL", "Docker"],
    year: "2023"
  }
];

export const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Director, Oromia Tourism Commission",
    content: "GoTop Trading delivered an exceptional tourism management system that has streamlined our operations significantly.",
    rating: 5
  },
  {
    name: "Selam Tesfaye",
    role: "Project Manager, EBC",
    content: "The dubbing quality and professionalism of GoTop's media team exceeded our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Daniel Bekele",
    role: "CEO, Qube Communication",
    content: "From printing to software development, GoTop has been our trusted partner for all our technical needs.",
    rating: 5
  }
];

export const companyInfo = {
  name: "GoTop Trading PLC",
  tagline: "We Build Software, Media & Printing Solutions",
  mission: "To empower businesses and organizations through innovative technology solutions, high-quality media production, and exceptional printing services.",
  vision: "To be the leading integrated technology and media solutions provider in Ethiopia, setting industry standards for quality, innovation, and customer satisfaction.",
  about: "GoTop Trading PLC is a multi-faceted company specializing in software development, media production and dubbing, and professional printing services. With years of experience serving prestigious clients across government agencies, media organizations, and private enterprises, we have established ourselves as a trusted partner for comprehensive business solutions. Our team of skilled professionals combines technical expertise with creative excellence to deliver outstanding results that drive our clients' success.",
  email: "info@gotoptrading.com",
  phone: "+251 11 123 4567",
  address: "Addis Ababa, Ethiopia",
  founded: "2018"
};
