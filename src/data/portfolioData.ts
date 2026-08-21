import { Project, Experience, SkillCategory, EducationItem, AwardItem, CoreWebVitalMetric } from '../types';

export const PERSONAL_INFO = {
  name: 'Bhupender',
  title: 'Senior JavaScript Developer / Frontend Engineer',
  tagline: 'Crafting high-performance single-page architectures, modular frontend ecosystems, and RESTful web applications with sub-second speeds and scalable code.',
  headline: 'Senior JavaScript Developer | Frontend Engineer | Web Performance | JavaScript Architecture | REST APIs | AI-Assisted Development',
  email: 'Bs9910849088@gmail.com',
  location: 'India',
  availability: 'Available for Senior Frontend & Architecture roles',
  yearsOfExperience: '5+ Years',
  modulesCount: '10+ Modules',
  apiCount: '20+ REST APIs',
  awardCount: '1 (Hidden Gem 2026)',
  bio: `Senior JavaScript Developer / Frontend Engineer with 5+ years of professional experience architecting, scaling, and maintaining high-throughput production web applications.

My core specialty is JavaScript-driven frontend engineering—spanning modular single-page architectures, framework-independent SPA navigation via the History API, reusable component systems, browser APIs, asynchronous REST API pipelines, Core Web Vitals optimization, and production debugging.

At VSPAGY, I own the complete frontend of an enterprise platform comprising 10+ major modules. I lead frontend architecture, feature planning, API integration, testing, code reviews, and server deployments while collaborating across the full stack with Java, JSP/Servlets, MySQL, and ArangoDB.

I bring hands-on mastery in optimizing Core Web Vitals (LCP, FCP, CLS) through lazy loading, intelligent code splitting, asset pipelines, and performance profiling. Furthermore, I leverage AI-assisted tools (ChatGPT, GitHub Copilot, Google Gemini) to accelerate prototyping, explore edge cases, and enhance engineering velocity with rigorous code validation.`,
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'vspagy',
    company: 'VSPAGY',
    role: 'Senior Software Developer',
    location: 'Noida / Remote, India',
    period: 'Aug 2023 – Present',
    current: true,
    type: 'Full-time',
    description: 'Leading and owning the complete frontend architecture of a flagship enterprise single-page application platform that scaled into 10+ major functional modules.',
    highlights: [
      'Engineered framework-independent SPA navigation engine using the Browser History API, URL parsing, and dynamic asynchronous component loading.',
      'Designed modular frontend architecture separating service layers, API gateways, reusable utility libraries, and state management.',
      'Built a complete reusable UI design system including custom sections, loaders, interactive modals, tabs, data tables, and dynamic navigation bars.',
      'Integrated and maintained 20+ production REST APIs with resilient error handling, request interceptors, and caching layers.',
      'Collaborated across backend tiers using Java, JSP/Servlets, MySQL, and ArangoDB for seamless end-to-end data contracts.',
      'Drove Core Web Vitals improvements through strategic lazy loading, image optimization, script deferral, and deep browser performance profiling.',
      'Owned end-to-end delivery lifecycle: architecture planning, sprints, testing, rigorous code reviews, production debugging, and server deployment.'
    ],
    techStack: ['JavaScript (ES6+)', 'SPA Architecture', 'Browser History API', 'REST APIs', 'Java', 'JSP / Servlets', 'MySQL', 'ArangoDB', 'HTML5', 'CSS3/Sass', 'Git'],
    modulesOwned: [
      'Interactive Video Campaign Builder',
      'Real-time Analytics & Reporting Dashboard',
      'Dynamic Template Customizer & Canvas Studio',
      'User Management & Role-Based Access Control',
      'Asset Management & Media CDN Pipeline',
      'Automated Workflow & Trigger Engine',
      'Audience Segmentation & Filter Matrix',
      'API Gateway & Webhook Manager',
      'Billing, Invoicing & Subscription Tier Portal',
      'Audit Logging & System Diagnostics Suite'
    ],
    keyMetrics: [
      { label: 'Platform Modules Owned', value: '10+' },
      { label: 'APIs Integrated', value: '20+' },
      { label: 'Experience Tier', value: 'Senior Lead' },
      { label: 'Award', value: 'Hidden Gem Q1 2026' }
    ],
    awardReceived: 'Hidden Gem — Q1 (July 2026) for outstanding performance, dedication, and exceptional contributions'
  },
  {
    id: 'keyideas',
    company: 'Keyideas',
    role: 'UI Developer',
    location: 'Gurugram, India',
    period: 'May 2022 – Aug 2023',
    current: false,
    type: 'Full-time',
    description: 'Independently owned complete commercial client websites from pixel-perfect UI implementation through production deployment and maintenance.',
    highlights: [
      'Converted complex Adobe XD design specifications into pixel-perfect, highly accessible, and responsive production web interfaces.',
      'Engineered reusable UI component systems including product cards, dynamic faceted filters, price sliders, interactive modals, and multimedia carousels.',
      'Developed custom lightweight jQuery plugins and modular vanilla JavaScript helper functions to reduce dependency weight.',
      'Collaborated closely with visual UI/UX designers and backend developers to ensure seamless API integrations and UX consistency.',
      'Applied frontend performance optimization techniques across multi-page client portals, resolving cross-browser compatibility and production layout issues.'
    ],
    techStack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass/SCSS', 'Bootstrap', 'Adobe XD', 'REST APIs', 'Responsive Web Design'],
    keyMetrics: [
      { label: 'Client Websites Delivered', value: '15+' },
      { label: 'Design Fidelity', value: '100% Adobe XD' },
      { label: 'Custom JS Plugins', value: '12+' }
    ]
  },
  {
    id: 'clt',
    company: 'CLT',
    role: 'Frontend Developer',
    location: 'New Delhi, India',
    period: 'Dec 2020 – May 2022',
    current: false,
    type: 'Full-time',
    description: 'Architected and built frontend applications from scratch for an Online UPSC Education Platform and an Online Fruit & Vegetable Ordering E-commerce system.',
    highlights: [
      'Built complete responsive frontend architectures from ground zero with high uptime and rapid mobile loading speeds.',
      'Engineered UPSC e-learning interface featuring modular video lecture players, dynamic syllabus navigators, and interactive test assessment engines.',
      'Developed online grocery & fresh produce ordering interface with live shopping cart calculations, item counter state, and category filtering.',
      'Integrated PHP backend server endpoints, handling JSON payloads, user authentication states, and order placement flows.',
      'Designed custom web graphics, hero banners, and vector assets using Photoshop, Canva, and CorelDRAW.'
    ],
    techStack: ['JavaScript', 'jQuery', 'Bootstrap 4/5', 'HTML5', 'CSS3', 'PHP Integration', 'Photoshop', 'Canva', 'CorelDRAW'],
    keyMetrics: [
      { label: 'Apps Built from Scratch', value: '2 Major Platforms' },
      { label: 'User Flow Optimization', value: 'Fast Mobile Checkout' },
      { label: 'Asset Creation', value: 'UI & Vector Graphics' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'vspagy-spa',
    title: 'Enterprise Single-Page Platform (10+ Modules)',
    subtitle: 'High-Throughput Modular Architecture & Vanilla SPA Routing Engine',
    category: 'Enterprise SPA',
    featured: true,
    companyOrContext: 'VSPAGY Production Platform',
    period: '2023 – Present',
    summary: 'Flagship enterprise video & campaign personalization platform with 10+ interconnected modules, framework-agnostic client-side routing, and real-time state synchronization.',
    challenge: 'Managing high-complexity enterprise workflows across 10 distinct modules without heavy monolithic bundle penalties, while maintaining smooth 60fps transitions and zero-refresh navigation.',
    solution: 'Designed a modular architecture using the Browser History API, an internal event bus for pub/sub state distribution, dynamic script injection for lazy-loaded modules, and optimized REST API contracts.',
    architectureHighlights: [
      'Custom History API SPA Router with query param preservation & route guard security',
      'Centralized API Service Layer handling 20+ endpoints with retry strategies and request deduplication',
      'Extensible design token system and reusable UI library (modals, loaders, data grids, tabs)',
      'Cross-tier collaboration with Java Servlets, MySQL relational records, and ArangoDB graph/document data'
    ],
    metrics: [
      { label: 'Modules Scaled', value: '10+ Active' },
      { label: 'API Endpoints', value: '20+ Integrated' },
      { label: 'Page Transitions', value: '< 80ms' }
    ],
    tags: ['JavaScript ES6+', 'SPA Architecture', 'History API', 'REST APIs', 'Java', 'MySQL', 'ArangoDB', 'Performance'],
    demoType: 'router'
  },
  {
    id: 'the-wild-oasis',
    title: 'The Wild Oasis — Luxury Hotel Management',
    subtitle: 'Modern Full-Featured React ERP & Booking Dashboard',
    category: 'React Applications',
    featured: true,
    companyOrContext: 'Modern React Showcase',
    period: '2024 – 2025',
    summary: 'Comprehensive cabin booking and hotel management application built with React, Supabase backend, React Query for server state caching, and interactive analytics charts.',
    challenge: 'Handling complex operational workflows: check-ins/check-outs, cabin availability collision detection, dynamic pricing with breakfast add-ons, and real-time statistical breakdowns.',
    solution: 'Implemented React Query for optimistic updates and automatic caching, compound component patterns for modals and menus, customized Dark/Light theme provider, and Recharts visualization.',
    architectureHighlights: [
      'Optimistic mutations with instant UI rollback on server errors',
      'Compound Component Pattern for flexible Dialogs, Menus, and Table layouts',
      'Advanced filtering, multi-column sorting, and URL-synced pagination',
      'Comprehensive authentication & authorization state guard'
    ],
    metrics: [
      { label: 'Server State', value: 'React Query Caching' },
      { label: 'Form Validation', value: 'React Hook Form' },
      { label: 'Dashboard Stats', value: 'Real-time Analytics' }
    ],
    tags: ['React', 'React Query', 'Supabase', 'Tailwind CSS', 'Compound Components', 'State Management']
  },
  {
    id: 'fast-react-pizza',
    title: 'Fast React Pizza Delivery Engine',
    subtitle: 'Live Order Lifecycle, Cart State & GPS Geolocation Ordering',
    category: 'React Applications',
    featured: true,
    companyOrContext: 'React Production App',
    period: '2024',
    summary: 'High-speed online pizza ordering web app featuring dynamic menu fetching, instant cart modifiers, priority pricing calculation, and real-time order tracking.',
    challenge: 'Creating a seamless zero-friction checkout flow where users can dynamically toggle priority delivery, fetch their precise GPS coordinates for delivery address, and track order progress by ID.',
    solution: 'Built with Redux Toolkit / React state architecture, remote API sync, custom geolocation hook using the Browser Geolocation API, and persistent local cart state.',
    architectureHighlights: [
      'Redux slice architecture managing complex cart quantities, pricing multipliers, and customer metadata',
      'Browser Geolocation API integration with automatic reverse-geocoding fallback',
      'Priority delivery add-on with automatic 20% surcharge computation and estimated delivery ETA',
      'Live order lookup by tracking token with real-time status steps (Preparing, Baking, On the way)'
    ],
    metrics: [
      { label: 'Checkout Speed', value: '< 3 Clicks' },
      { label: 'Cart Synchronization', value: 'Instant 0-Lag' },
      { label: 'Interactive Demo', value: 'Playable Live' }
    ],
    tags: ['React', 'Redux / State', 'Browser Geolocation', 'REST APIs', 'Interactive Demo', 'Tailwind CSS'],
    demoType: 'pizza'
  },
  {
    id: 'travel-list',
    title: 'Travel List — Smart Packing Organizer',
    subtitle: 'Reactive State Engine with Dynamic Completion Analytics',
    category: 'React Applications',
    featured: false,
    companyOrContext: 'React State Management App',
    period: '2024',
    summary: 'Interactive travel preparation and luggage inventory management system with multi-criteria sorting, item count modifiers, and real-time packing progress analytics.',
    challenge: 'Providing instantaneous UI responsiveness during rapid item toggling, dynamic re-sorting by packing status, item name, or input order, with persistent local memory.',
    solution: 'Engineered declarative state flow in React, derived state calculations for summary metrics without re-render thrashing, and accessible keyboard-driven interactions.',
    architectureHighlights: [
      'Derived state architecture calculating packed percentage and remaining items in O(n) time',
      'Multi-mode sorting algorithm: by input chronology, alphabetical description, or packed status',
      'Bulk actions with confirmation modals (Clear all, Mark all packed)',
      'Custom numerical quantity selectors with immediate UI updates'
    ],
    metrics: [
      { label: 'State Model', value: 'Declarative React' },
      { label: 'Sorting Modes', value: '3 Criteria' },
      { label: 'Interactive Demo', value: 'Playable Live' }
    ],
    tags: ['React', 'State Architecture', 'Derived State', 'Interactive Demo', 'UX Design'],
    demoType: 'travel'
  },
  {
    id: 'react-quiz',
    title: 'React Quiz Engine & Assessment Suite',
    subtitle: 'High-Performance Timed Quiz with useReducer State Machine',
    category: 'React Applications',
    featured: false,
    companyOrContext: 'Interactive Engineering Project',
    period: '2024',
    summary: 'Full-featured timed technical assessment platform utilizing a state machine pattern with useReducer, countdown timer synchronizer, and high-score persistence.',
    challenge: 'Synchronizing strict countdown timers with user answer selections, scoring systems, and stage transitions (Ready -> Active -> Finished) without timing drift.',
    solution: 'Designed an immutable state reducer handling 7 distinct action types, timer tick intervals with cleanup lifecycles, and interactive question progress bars.',
    architectureHighlights: [
      'Immutable useReducer state machine preventing race conditions and undefined states',
      'Timer tick engine with interval cleanup on unmount to prevent memory leaks',
      'Dynamic scoring algorithm weighting points based on difficulty and time remaining',
      'Local storage persistence for historical high scores'
    ],
    metrics: [
      { label: 'State Predictability', value: '100% Reducer' },
      { label: 'Timer Accuracy', value: 'Exact ms sync' },
      { label: 'Interactive Demo', value: 'Playable Live' }
    ],
    tags: ['React', 'useReducer', 'State Machine', 'Timer Engine', 'Interactive Demo'],
    demoType: 'quiz'
  },
  {
    id: 'upsc-portal',
    title: 'UPSC Online Education Platform',
    subtitle: 'Interactive Learning Management System & Exam Simulator',
    category: 'Vanilla JS & APIs',
    featured: false,
    companyOrContext: 'CLT Production Client',
    period: '2021 – 2022',
    summary: 'Comprehensive online education web portal for civil service aspirants with video lecture playlists, syllabus tracker, and online test simulation.',
    challenge: 'Delivering fluid streaming video and interactive mock test experiences on low-bandwidth connections across India.',
    solution: 'Built lightweight responsive frontend using vanilla JavaScript, Bootstrap, asynchronous AJAX data polling, and asset compression.',
    architectureHighlights: [
      'Custom JavaScript video playlist controller with playback speed memory',
      'Dynamic syllabus completion tracker stored in client cache',
      'PHP REST API integration for test submissions and ranking calculation'
    ],
    metrics: [
      { label: 'Bandwidth Saved', value: '40% Compression' },
      { label: 'Responsive Layout', value: 'Mobile First' }
    ],
    tags: ['JavaScript', 'Bootstrap', 'REST APIs', 'PHP Backend', 'AJAX', 'Responsive Web Design']
  },
  {
    id: 'core-web-vitals-lab',
    title: 'Core Web Vitals & Frontend Performance Suite',
    subtitle: 'Sub-Second LCP, Zero CLS, and Code Splitting Architecture',
    category: 'Performance & Architecture',
    featured: true,
    companyOrContext: 'Architecture & Performance Lab',
    period: '2024 – Present',
    summary: 'Engineering methodologies and real-world benchmark optimizations applied across VSPAGY and client applications to achieve 95+ Google Lighthouse scores.',
    challenge: 'Taming bloated enterprise JavaScript bundles, eliminating Cumulative Layout Shift (CLS) on dynamic content, and accelerating Largest Contentful Paint (LCP).',
    solution: 'Implemented code splitting via dynamic imports, critical CSS extraction, WebP/AVIF responsive image sets, font display swap, and layout size reservation.',
    architectureHighlights: [
      'Dynamic script splitting reducing initial bundle size by 55%',
      'Aspect-ratio placeholders and skeleton screens completely eliminating CLS',
      'Intersection Observer lazy loading for images and non-critical widget components',
      'Browser DevTools Performance profiling to eliminate long JavaScript tasks (>50ms)'
    ],
    metrics: [
      { label: 'LCP Score', value: '1.1s (from 3.8s)' },
      { label: 'CLS Score', value: '0.00 (Zero Shift)' },
      { label: 'Lighthouse Score', value: '98/100' }
    ],
    tags: ['Web Performance', 'Core Web Vitals', 'LCP Optimization', 'CLS Elimination', 'Lazy Loading', 'DevTools'],
    demoType: 'vitals'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Core JavaScript & Modern Frontend',
    iconName: 'Code2',
    description: 'Expert-level vanilla JavaScript, modern ES6+, DOM manipulation, and React ecosystem.',
    skills: [
      { name: 'JavaScript (ES6+ / Modern)', level: 96, years: '5+ yrs', isTopSkill: true, tag: 'Core' },
      { name: 'Modern React (18/19)', level: 88, years: '2+ yrs', isTopSkill: true, tag: 'Framework' },
      { name: 'DOM & Browser APIs', level: 94, years: '5+ yrs', isTopSkill: true, tag: 'Core' },
      { name: 'HTML5 & Semantic Markup', level: 98, years: '5+ yrs', isTopSkill: true, tag: 'Markup' },
      { name: 'CSS3, Sass/SCSS & Flex/Grid', level: 95, years: '5+ yrs', isTopSkill: true, tag: 'Styling' },
      { name: 'Tailwind CSS & Bootstrap', level: 92, years: '4+ yrs', isTopSkill: true, tag: 'Styling' },
      { name: 'jQuery & Legacy JS Modernization', level: 95, years: '4+ yrs', isTopSkill: false, tag: 'Library' }
    ]
  },
  {
    category: 'SPA Architecture & Web Performance',
    iconName: 'Zap',
    description: 'Architecting scalable single-page systems and sub-second Core Web Vitals optimization.',
    skills: [
      { name: 'SPA Architecture & History API', level: 95, years: '4+ yrs', isTopSkill: true, tag: 'Architecture' },
      { name: 'Core Web Vitals (LCP, FCP, CLS)', level: 92, years: '3+ yrs', isTopSkill: true, tag: 'Performance' },
      { name: 'Lazy Loading & Code Splitting', level: 90, years: '3+ yrs', isTopSkill: true, tag: 'Performance' },
      { name: 'State Management & Store Design', level: 88, years: '4+ yrs', isTopSkill: true, tag: 'Architecture' },
      { name: 'Browser DevTools Profiling', level: 90, years: '4+ yrs', isTopSkill: false, tag: 'Performance' },
      { name: 'Modular Component Systems', level: 94, years: '5+ yrs', isTopSkill: true, tag: 'Architecture' }
    ]
  },
  {
    category: 'REST APIs, Backend & Databases',
    iconName: 'Server',
    description: 'Full data lifecycle integration, server collaboration, and multi-model database queries.',
    skills: [
      { name: 'REST API Integration (20+ Endpoints)', level: 95, years: '5+ yrs', isTopSkill: true, tag: 'APIs' },
      { name: 'Java & JSP / Servlets', level: 82, years: '2+ yrs', isTopSkill: true, tag: 'Backend' },
      { name: 'MySQL Database', level: 84, years: '3+ yrs', isTopSkill: true, tag: 'Database' },
      { name: 'ArangoDB (Multi-model)', level: 78, years: '2+ yrs', isTopSkill: false, tag: 'Database' },
      { name: 'Asynchronous AJAX / Fetch / Axios', level: 96, years: '5+ yrs', isTopSkill: true, tag: 'Networking' },
      { name: 'PHP Integration Basics', level: 75, years: '2+ yrs', isTopSkill: false, tag: 'Backend' }
    ]
  },
  {
    category: 'AI-Assisted Engineering & Tooling',
    iconName: 'Sparkles',
    description: 'Leveraging AI coding tools with rigorous verification to multiply engineering velocity.',
    skills: [
      { name: 'Google Gemini & AI PoC Prototyping', level: 90, years: '2+ yrs', isTopSkill: true, tag: 'AI Dev' },
      { name: 'GitHub Copilot Workflow', level: 92, years: '2+ yrs', isTopSkill: true, tag: 'AI Dev' },
      { name: 'ChatGPT Technical Research & Debugging', level: 94, years: '3+ yrs', isTopSkill: true, tag: 'AI Dev' },
      { name: 'Git & GitHub Version Control', level: 90, years: '5+ yrs', isTopSkill: true, tag: 'Tooling' },
      { name: 'Adobe XD, Photoshop, CorelDRAW', level: 85, years: '4+ yrs', isTopSkill: false, tag: 'Design' },
      { name: 'Vite & Modern Build Tooling', level: 88, years: '2+ yrs', isTopSkill: false, tag: 'Tooling' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'ducat-java',
    title: 'Java Expert — Grade A',
    institution: 'Ducat IT Training Institute',
    gradeOrScore: 'Grade A',
    period: 'Feb 2020 – Aug 2020',
    description: 'Intensive certification covering Core Java, OOP principles, Collections framework, Exception handling, Multi-threading, JSP/Servlets, JDBC, and relational database connectivity.',
    skillsAcquired: ['Core Java', 'OOP Principles', 'JSP / Servlets', 'JDBC & MySQL', 'Backend Architecture']
  },
  {
    id: 'arth-diploma',
    title: 'IT-Expert — Advanced Diploma',
    institution: 'Arth Institute of Commerce & Vocational Studies',
    gradeOrScore: 'Advanced Diploma',
    period: '2016 – 2018',
    description: 'Comprehensive 2-year curriculum in computer fundamentals, programming logic, web technologies, UI design principles, and enterprise IT practices.',
    skillsAcquired: ['Computer Fundamentals', 'Web Design', 'Programming Foundations', 'Software Engineering']
  },
  {
    id: 'higher-secondary',
    title: 'Higher Secondary Education',
    institution: 'Board of Secondary Education',
    period: '2016',
    description: 'Completed Higher Secondary schooling with academic foundation in Arts and Humanities.',
    skillsAcquired: ['Analytical Thinking', 'Communication', 'Research & Problem Solving']
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'hidden-gem-2026',
    title: 'Hidden Gem — Q1 Award',
    organization: 'VSPAGY',
    date: 'July 2026',
    quarter: 'Q1 2026',
    description: 'Prestigious corporate award recognizing outstanding performance, technical ownership, unwavering dedication, and exceptional architectural contributions across VSPAGY’s 10+ platform modules.',
    iconName: 'Trophy'
  }
];

export const CORE_WEB_VITALS_BENCHMARKS: CoreWebVitalMetric[] = [
  {
    name: 'Largest Contentful Paint',
    acronym: 'LCP',
    target: '< 2.5s',
    optimizedValue: '1.1s',
    unoptimizedValue: '3.8s',
    description: 'Measures perceived loading speed by marking when the main page content has likely loaded.',
    technique: 'Asset preloading, critical CSS inlining, WebP conversion, dynamic JS code-splitting.',
    status: 'Good'
  },
  {
    name: 'First Contentful Paint',
    acronym: 'FCP',
    target: '< 1.8s',
    optimizedValue: '0.6s',
    unoptimizedValue: '2.1s',
    description: 'Marks the time at which the first text or image is rendered to the user screen.',
    technique: 'Server response tuning, deferring non-critical scripts, font-display swap.',
    status: 'Good'
  },
  {
    name: 'Cumulative Layout Shift',
    acronym: 'CLS',
    target: '< 0.1',
    optimizedValue: '0.00',
    unoptimizedValue: '0.28',
    description: 'Measures visual stability by quantifying unexpected layout shifts during load.',
    technique: 'Explicit aspect-ratio reservation, CSS skeleton loaders, font pre-allocation.',
    status: 'Good'
  },
  {
    name: 'Interaction to Next Paint',
    acronym: 'INP',
    target: '< 200ms',
    optimizedValue: '35ms',
    unoptimizedValue: '240ms',
    description: 'Assesses responsiveness by measuring latency of user clicks, taps, and key presses.',
    technique: 'Debouncing event handlers, breaking long JavaScript execution tasks, web workers.',
    status: 'Good'
  }
];
