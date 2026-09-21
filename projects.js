// ==========================================
// PROJECTS DATA - Add/Edit/Remove projects here
// ==========================================

export const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    image: 'assets/images/project1.jpg',
    shortDescription: 'A complete brand identity system for a modern tech startup.',
    description: 'This project involved creating a comprehensive brand identity including logo design, color palette, typography system, and brand guidelines. The goal was to establish a strong visual presence that communicates innovation and trustworthiness.',
    link: 'https://example.com/project1',
    featured: true,
    category: 'Branding'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    image: 'assets/images/project2.jpg',
    shortDescription: 'A full-featured online shopping experience with modern UI.',
    description: 'Designed and developed a complete e-commerce platform with product browsing, shopping cart, checkout flow, and user account management. Focused on creating an intuitive and enjoyable shopping experience.',
    link: 'https://example.com/project2',
    featured: false,
    category: 'Web Design'
  },
  {
    id: 3,
    title: 'Mobile App Interface',
    image: 'assets/images/project3.jpg',
    shortDescription: 'Clean and intuitive mobile application design.',
    description: 'Created a mobile-first interface design for a productivity application. The design emphasizes clarity, ease of use, and visual hierarchy to help users accomplish their tasks efficiently.',
    link: 'https://example.com/project3',
    featured: false,
    category: 'UI/UX'
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    image: 'assets/images/project4.jpg',
    shortDescription: 'Data visualization dashboard for business insights.',
    description: 'Developed a comprehensive analytics dashboard with interactive charts, real-time data updates, and customizable widgets. The interface makes complex data accessible and actionable.',
    link: 'https://example.com/project4',
    featured: false,
    category: 'Web Design'
  },
  {
    id: 5,
    title: 'Landing Page Design',
    image: 'assets/images/project5.jpg',
    shortDescription: 'High-converting landing page for SaaS product.',
    description: 'Designed a conversion-focused landing page with clear value proposition, compelling visuals, and strategic call-to-action placement. Resulted in significant improvement in sign-up rates.',
    link: 'https://example.com/project5',
    featured: false,
    category: 'Web Design'
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    image: 'assets/images/project6.jpg',
    shortDescription: 'Creative social media content and campaign strategy.',
    description: 'Created a cohesive social media campaign including post designs, story templates, and content strategy. The campaign increased engagement and brand awareness across platforms.',
    link: 'https://example.com/project6',
    featured: false,
    category: 'Branding'
  }
];

// Get featured project
export function getFeaturedProject() {
  return projects.find(project => project.featured) || projects[0];
}

// Get all projects
export function getAllProjects() {
  return projects;
}