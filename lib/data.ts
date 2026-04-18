export const clients = [
  { name: "R&D Group", logo: "/assets/logos/partners/rd-group-logo.png" },
  {
    name: "Oromia Tourism Commission",
    logo: "/assets/logos/partners/oromia-tourism-logo.png",
  },
  {
    name: "Addis Ababa Drivers & Vehicle Licensing Authority",
    logo: "/assets/logos/partners/aadlva-logo.png",
  },
  { name: "EBC", logo: "/assets/logos/partners/ebc-logo.png" },
  { name: "Qube Communication", logo: "/assets/logos/partners/qube-logo.png" },
];

export const services = [
  {
    id: "software",
    title: "Software Development",
    icon: "💻",
    shortDescription:
      "Custom software solutions tailored to your business needs",
    fullDescription:
      "We specialize in creating robust, scalable software solutions that drive business growth. From enterprise applications to mobile apps, our team delivers cutting-edge technology solutions that transform your operations.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "System Integration",
      "API Development",
      "Cloud Solutions",
    ],
  },
  {
    id: "media",
    title: "Media & Dubbing",
    icon: "🎬",
    shortDescription: "Professional media production and dubbing services",
    fullDescription:
      "Our media and dubbing services bring your content to life across multiple languages and platforms. With state-of-the-art equipment and experienced professionals, we deliver high-quality audio and video production.",
    features: [
      "Voice Over & Dubbing",
      "Video Production",
      "Audio Post-Production",
      "Subtitling & Captioning",
      "Content Localization",
      "Studio Recording",
    ],
  },
  {
    id: "printing",
    title: "Printing Press",
    icon: "🖨️",
    shortDescription: "High-quality printing solutions for all your needs",
    fullDescription:
      "From business cards to large-format banners, our printing press delivers exceptional quality and fast turnaround times. We use the latest printing technology to ensure your materials look professional and impactful.",
    features: [
      "Digital & Offset Printing",
      "Large Format Printing",
      "Brochures & Catalogs",
      "Business Cards & Stationery",
      "Packaging Solutions",
      "Custom Print Products",
    ],
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Tourism Management System",
    client: "Oromia Tourism Commission",
    category: "software",
    image: "/assets/images/projects/tourism-management-system.jpg",
    description:
      "A comprehensive tourism management platform for tracking visitors, managing attractions, and generating analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2024",
  },
  {
    id: 2,
    title: "Vehicle Licensing Portal",
    client: "AA Drivers & Vehicle Licensing Authority",
    category: "software",
    image: "/assets/images/projects/vehicle-licensing-portal.jpg",
    description:
      "Digital transformation of vehicle licensing processes with online applications, renewals, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    year: "2024",
  },
  {
    id: 3,
    title: "Documentary Dubbing Project",
    client: "EBC",
    category: "media",
    image: "/assets/images/projects/documentary-dubbing-project.jpg",
    description:
      "Professional dubbing services for multiple documentary series in various local languages.",
    technologies: ["Pro Tools", "Adobe Audition", "Multi-language"],
    year: "2023",
  },
  {
    id: 4,
    title: "Corporate Branding Package",
    client: "R&D Group",
    category: "printing",
    image: "/assets/images/projects/corporate-branding-package.jpg",
    description:
      "Complete corporate branding materials including business cards, letterheads, brochures, and marketing collateral.",
    technologies: ["Offset Printing", "Digital Print", "UV Coating"],
    year: "2023",
  },
  {
    id: 5,
    title: "Marketing Campaign Materials",
    client: "Qube Communication",
    category: "printing",
    image: "/assets/images/projects/marketing-campaign-materials.jpg",
    description:
      "Large-scale printing of promotional materials for nationwide marketing campaign.",
    technologies: ["Large Format", "Digital Print", "Finishing"],
    year: "2024",
  },
  {
    id: 6,
    title: "ERP System Implementation",
    client: "R&D Group",
    category: "software",
    image: "/assets/images/projects/erp-system-implementation.jpg",
    description:
      "Custom enterprise resource planning system integrating inventory, HR, and financial management.",
    technologies: ["Angular", "Django", "MySQL", "Docker"],
    year: "2023",
  },
];

export const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Director, Oromia Tourism Commission",
    content:
      "GoTop Trading delivered an exceptional tourism management system that has streamlined our operations significantly.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Selam Tesfaye",
    role: "Project Manager, EBC",
    content:
      "The dubbing quality and professionalism of GoTop's media team exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Daniel Bekele",
    role: "CEO, Qube Communication",
    content:
      "From printing to software development, GoTop has been our trusted partner for all our technical needs.",
    rating: 5,
    image: "👨‍💻",
  },
  {
    name: "Marta Wolde",
    role: "Operations Manager, R&D Group",
    content:
      "Their ERP system implementation transformed our business processes. Outstanding technical expertise and support.",
    rating: 5,
    image: "👩‍🔬",
  },
  {
    name: "Tewodros Mekonnen",
    role: "IT Director, Addis Ababa Drivers & Vehicle Licensing Authority",
    content:
      "The vehicle licensing portal they developed has significantly improved our service delivery to citizens.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Hanan Ali",
    role: "Marketing Director, Qube Communication",
    content:
      "Their printing quality and design work for our campaigns has been exceptional. True professionals.",
    rating: 5,
    image: "👩‍🎨",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Ethiopian Government Services",
    slug: "digital-transformation-ethiopian-government",
    excerpt:
      "How government agencies are leveraging technology to improve citizen services and operational efficiency.",
    content: `In recent years, Ethiopia has witnessed a remarkable shift towards digital transformation across various government sectors. This movement is not just about adopting new technologies, but fundamentally changing how public services are delivered to citizens.

## The Current Landscape

Government agencies are increasingly recognizing the need to modernize their operations. From vehicle licensing to tourism management, digital solutions are streamlining processes that were once cumbersome and time-consuming.

## Key Benefits

**Improved Efficiency**: Digital systems reduce paperwork and manual processing, leading to faster service delivery.

**Enhanced Transparency**: Citizens can track their applications and transactions in real-time, reducing opportunities for corruption.

**Cost Reduction**: Automated processes lower operational costs and minimize human error.

## Case Studies

Our work with the Addis Ababa Drivers & Vehicle Licensing Authority demonstrates the transformative power of digital solutions. The new online portal has reduced processing times from weeks to hours while significantly improving user satisfaction.

## Future Outlook

As Ethiopia continues its digital journey, we expect to see more government agencies adopting comprehensive digital solutions that serve citizens better and create more efficient public administration.`,
    author: "Ahmed Hassan",
    date: "2024-12-15",
    category: "insights",
    tags: ["digital-transformation", "government", "ethiopia", "technology"],
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Company Milestone: 100+ Projects Completed",
    slug: "company-milestone-100-projects",
    excerpt:
      "Celebrating a significant achievement as we reach 100 successful project deliveries across our service areas.",
    content: `Today marks a significant milestone for GoTop Trading PLC as we celebrate the completion of our 100th project. This achievement represents not just a number, but years of dedication, innovation, and partnership with our valued clients.

## A Journey of Growth

Since our founding in 2015, we've grown from a small technology startup to a comprehensive solutions provider offering software development, media production, and printing services. Each project has been an opportunity to learn, innovate, and deliver exceptional results.

## Diverse Portfolio

Our 100+ projects span across multiple sectors:

- **Software Development**: 45+ custom applications and systems
- **Media Production**: 30+ dubbing and content localization projects
- **Printing Services**: 25+ large-scale printing campaigns

## Client Partnerships

We've had the privilege of working with prestigious organizations including:
- Oromia Tourism Commission
- Addis Ababa Drivers & Vehicle Licensing Authority
- Ethiopian Broadcasting Corporation
- R&D Group
- Qube Communication

## Looking Ahead

This milestone motivates us to continue pushing boundaries and delivering innovative solutions. We're excited about the next 100 projects and the opportunity to serve even more clients across Ethiopia and beyond.

Thank you to our clients, partners, and dedicated team for making this achievement possible.`,
    author: "Selam Tesfaye",
    date: "2024-12-10",
    category: "updates",
    tags: ["milestone", "company-news", "growth", "projects"],
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The Future of Content Localization in East Africa",
    slug: "future-content-localization-east-africa",
    excerpt:
      "Exploring emerging trends in media localization and how they're shaping content consumption across the region.",
    content: `Content localization has become increasingly important as media consumption patterns evolve across East Africa. With diverse linguistic landscapes and growing demand for local content, localization services are playing a crucial role in making global content accessible to local audiences.

## Market Growth

The demand for localized content has grown exponentially, driven by:
- Increased streaming platform adoption
- Growing local film and television production
- Educational content requirements in local languages
- Government initiatives for local language preservation

## Technological Advancements

Modern localization goes beyond simple translation:
- AI-powered translation tools improving accuracy
- Voice synthesis technology for consistent voice-over
- Cultural adaptation ensuring content resonates with local audiences
- Real-time localization for live content

## Challenges and Solutions

While the market grows, several challenges persist:
**Language Diversity**: Over 80 languages spoken across Ethiopia alone
**Cultural Nuances**: Content must be culturally appropriate
**Technical Infrastructure**: Reliable internet and equipment access

## Our Approach

At GoTop Trading, we address these challenges through:
- Native speaker translators for each language
- Cultural consultants ensuring appropriate adaptation
- State-of-the-art recording studios
- Comprehensive quality assurance processes

## Regional Impact

Localized content contributes significantly to:
- Cultural preservation and promotion
- Educational accessibility
- Economic growth in creative industries
- Cross-cultural understanding

As East Africa continues to develop its media landscape, content localization will play an increasingly vital role in connecting global content with local audiences.`,
    author: "Marta Wolde",
    date: "2024-12-05",
    category: "insights",
    tags: ["localization", "media", "east-africa", "content"],
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "New Partnership: Expanding Our Printing Capabilities",
    slug: "new-partnership-printing-capabilities",
    excerpt:
      "Announcing our strategic partnership that will enhance our printing services and expand our production capacity.",
    content: `We're excited to announce a new strategic partnership that will significantly enhance our printing capabilities and allow us to serve our clients better. This collaboration represents our commitment to continuous improvement and staying at the forefront of printing technology.

## Partnership Details

Our new partnership with a leading European printing equipment manufacturer brings:
- Access to cutting-edge printing technology
- Enhanced production capacity
- Specialized finishing capabilities
- Training for our technical team

## Service Improvements

This partnership enables us to offer:
**Enhanced Quality**: Higher resolution printing with better color accuracy
**Faster Turnaround**: Increased production capacity reduces delivery times
**New Services**: Specialty printing options including UV coating and embossing
**Eco-Friendly Options**: More sustainable printing materials and processes

## Client Benefits

Our clients will benefit from:
- Reduced production costs through improved efficiency
- Faster project turnaround times
- Access to premium printing finishes
- More sustainable printing options

## Future Plans

This partnership is just the beginning of our expansion plans. We're committed to continuously investing in our capabilities to serve our clients better and maintain our position as Ethiopia's leading printing service provider.

Stay tuned for more updates on new services and capabilities we'll be rolling out in the coming months.`,
    author: "Daniel Bekele",
    date: "2024-11-28",
    category: "updates",
    tags: ["partnership", "printing", "expansion", "technology"],
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Sustainable Technology Practices for Modern Businesses",
    slug: "sustainable-technology-practices",
    excerpt:
      "How businesses can adopt environmentally friendly technology practices while maintaining efficiency and reducing costs.",
    content: `Sustainability has become a critical consideration for modern businesses, and technology plays a pivotal role in achieving environmental goals. Ethiopian businesses are increasingly recognizing that sustainable technology practices not only benefit the environment but also improve operational efficiency and reduce long-term costs.

## Green Technology Adoption

**Cloud Computing**: Reduces the need for on-premises servers, lowering energy consumption
**Virtualization**: Maximizes server utilization, reducing hardware requirements
**Remote Work Tools**: Decreases commuting and office energy usage

## Software Development Practices

Sustainable software development involves:
- **Efficient Code**: Writing optimized code that uses fewer computational resources
- **Green Hosting**: Choosing hosting providers with renewable energy commitments
- **Lifecycle Management**: Proper decommissioning of old systems

## Media Production Sustainability

Our media services incorporate sustainable practices:
- **Digital Delivery**: Reducing physical media production and transportation
- **Energy-Efficient Studios**: LED lighting and optimized equipment
- **Remote Collaboration**: Minimizing travel for production teams

## Printing Industry Sustainability

The printing industry is making significant strides:
- **Recycled Materials**: Using paper from sustainable sources
- **Eco-Friendly Inks**: Low-VOC inks that are better for the environment
- **Waste Reduction**: Digital proofing to minimize paper waste

## Business Benefits

Adopting sustainable technology practices delivers:
**Cost Savings**: Reduced energy consumption and waste
**Brand Enhancement**: Appeal to environmentally conscious customers
**Regulatory Compliance**: Meeting emerging environmental regulations
**Future-Proofing**: Preparing for stricter environmental standards

## Implementation Strategy

For businesses looking to adopt sustainable technology practices:
1. **Assessment**: Evaluate current environmental impact
2. **Planning**: Set achievable sustainability goals
3. **Implementation**: Start with high-impact, low-cost changes
4. **Monitoring**: Track progress and adjust strategies
5. **Reporting**: Communicate achievements to stakeholders

As Ethiopia's business landscape evolves, sustainable technology practices will become increasingly important for long-term success and environmental responsibility.`,
    author: "Hanan Ali",
    date: "2024-11-20",
    category: "insights",
    tags: ["sustainability", "technology", "environment", "business"],
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Team Spotlight: Our Growing Development Team",
    slug: "team-spotlight-development-team",
    excerpt:
      "Meet the talented developers who are building innovative solutions and driving our software development success.",
    content: `Behind every successful software project is a team of dedicated professionals. Today, we're shining a spotlight on our growing development team and the talented individuals who make our software solutions possible.

## Team Growth

Over the past year, our development team has grown by 40%, allowing us to take on more complex projects and deliver solutions faster. This growth reflects our commitment to investing in top talent and staying ahead of technological advancements.

## Our Developers

**Backend Specialists**: Experts in Node.js, Python, and database design
**Frontend Developers**: React, Next.js, and modern JavaScript specialists
**Full-Stack Engineers**: Versatile developers who excel in both frontend and backend
**DevOps Engineers**: Ensuring smooth deployment and system reliability

## Skills and Expertise

Our team brings diverse skills to every project:
- Modern web frameworks and libraries
- Database design and optimization
- API development and integration
- Cloud platform expertise (AWS, Azure, Google Cloud)
- Mobile app development (React Native, Flutter)
- UI/UX design principles

## Recent Achievements

In the past quarter, our development team has:
- Launched 5 major software projects
- Implemented advanced security features across all applications
- Reduced average project delivery time by 25%
- Achieved 99.9% uptime across all hosted solutions

## Career Development

We're committed to our team's growth through:
- Regular training and certification programs
- Conference attendance and speaking opportunities
- Mentorship programs for junior developers
- Hackathons and innovation challenges

## Culture and Values

Our development team thrives on:
**Collaboration**: Regular code reviews and knowledge sharing
**Innovation**: Encouraging experimentation with new technologies
**Quality**: Maintaining high coding standards and best practices
**Work-Life Balance**: Flexible schedules and remote work options

## Future Plans

As we continue to grow, we're looking to:
- Expand our expertise in AI and machine learning
- Strengthen our mobile development capabilities
- Build stronger partnerships with tech communities
- Contribute more to open-source projects

Our development team's dedication and expertise are the foundation of our software solutions. We're proud of their achievements and excited about the innovative solutions they'll continue to deliver.`,
    author: "Tewodros Mekonnen",
    date: "2024-11-15",
    category: "updates",
    tags: ["team", "development", "software", "growth"],
    readTime: "5 min read",
    featured: false,
  },
];

export const companyInfo = {
  name: "GoTop Trading PLC",
  tagline: "We Build Software, Media & Printing Solutions",
  mission:
    "To empower businesses and organizations through innovative technology solutions, high-quality media production, and exceptional printing services.",
  vision:
    "To be the leading integrated technology and media solutions provider in Ethiopia, setting industry standards for quality, innovation, and customer satisfaction.",
  about:
    "GoTop Trading PLC is a multi-faceted company specializing in software development, media production and dubbing, and professional printing services. With years of experience serving prestigious clients across government agencies, media organizations, and private enterprises, we have established ourselves as a trusted partner for comprehensive business solutions. Our team of skilled professionals combines technical expertise with creative excellence to deliver outstanding results that drive our clients' success.",
  email: "info@gotop.et",
  phone: "+251911879421",
  address: "Addis Ababa, Ethiopia",
  founded: "2015",
};
