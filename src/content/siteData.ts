export interface Venture {
  id: string;
  monogram: 'WRC' | 'MEW' | 'NVX' | 'VOT' | 'BME' | 'GRD';
  name: string;
  category: string;
  proposition: string;
  description: string;
  problemAddressed: string;
  beneficiaries: string;
  status: 'Concept' | 'Prototype' | 'In development' | 'Active';
  featured?: boolean;
  tags: string[];
  ctaLabel: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organisation: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  statusText: string;
  verificationUrl?: string;
}

export const siteData = {
  meta: {
    title: 'Foster Normanyo | Marketing, Technology & Entrepreneurship',
    description:
      'Meet Foster Normanyo, a Ghanaian marketing and technology professional exploring digital systems, entrepreneurship and solutions for African businesses and communities.',
    siteUrl: 'https://fosternormanyo.netlify.app',
    ogImage: '/og-image.jpg',
  },

  // Add this block right after the `meta` object inside src/content/siteData.ts:
  analytics: {
    enabled: true,
    // Options: 'umami' | 'plausible' | 'goatcounter' | 'custom-only'
    provider: 'umami' as 'umami' | 'plausible' | 'goatcounter' | 'custom-only',
    // Paste your Website ID here once you create your free Umami/GoatCounter account
    websiteId: '',
    // Default script URL for Umami Cloud (or replace with your self-hosted/provider URL)
    scriptUrl: 'https://cloud.umami.is/script.js',
    // Your live domain for Plausible or GoatCounter
    domain: 'fosternormanyo.netlify.app',
    // Prints tracked events (CV downloads, Venture clicks, Form submits) in browser console on localhost
    debugOnLocalhost: true,
  },

  profile: {
    name: 'Foster Normanyo',
    navDescriptor: 'MARKETING · TECHNOLOGY · ENTREPRENEURSHIP',
    eyebrow: 'GHANA · BUSINESS · TECHNOLOGY',
    heroHeadline:
      'Building at the intersection of business, technology and African opportunity.',
    heroSupporting:
      "I'm Foster Normanyo, a marketing and technology professional exploring how digital systems and entrepreneurship can solve practical problems for African businesses and communities.",
    portraitLabel: 'Marketing | Salesforce | Entrepreneurship',
    // Enabled for your ready portrait.jpg file
    hasPortraitPhoto: true,
    portraitPath: '/images/portrait.jpg',
    portraitAlt:
      'Portrait of Foster Normanyo, marketing and technology professional in Accra, Ghana',
    // Enabled for your ready foster-normanyo-cv.pdf file
    showCvDownload: true,
    cvPath: '/documents/foster-normanyo-cv.pdf',
    // Verified Contact & Profile Links
    email: 'fosternormanyo23@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/normanyo-foster',
    trailblazerUrl: 'https://www.salesforce.com/trailblazer/fnorman',
  },

  about: {
    sectionNumber: '01',
    title: 'A little about my work',
    lead: 'Grounded in a First Class Bachelor of Technology in Marketing from Accra Technical University and certified training in Salesforce administration, my work sits where commercial strategy meets practical operations.',
    body: 'Through hands-on experience in internal auditing, monitoring and evaluation, and teaching, I have seen how structured data, clear communication, and reliable digital workflows improve everyday decisions. Today, I channel that operational discipline into developing and testing venture solutions tailored for education, trade, financial inclusion, and institutional trust across Ghana and Africa.',
    focusAreas: [
      {
        title: 'Business & Marketing',
        description:
          'Customer engagement, market understanding, operational processes and commercial thinking.',
      },
      {
        title: 'Digital Systems',
        description:
          'Salesforce, data organisation, customer relationship processes and technology-enabled workflows.',
      },
      {
        title: 'Innovation & Entrepreneurship',
        description:
          'Exploring solutions for education, business growth, trade and institutional challenges.',
      },
    ],
  },

  venturesSection: {
    sectionNumber: '02',
    title: 'Ideas shaped by real-world problems',
    intro:
      "I'm exploring how thoughtful products and digital systems can address practical challenges in education, business, trade and governance.",
    ventures: [
      {
        id: 'write-right-consult',
        monogram: 'WRC',
        name: 'Write Right Consult',
        category: 'Academic and professional support',
        proposition:
          'Structured academic consulting, research methodology guidance, and professional document preparation.',
        description:
          'Providing structured writing and document-support services for students and professionals, including academic projects, CVs, presentations and integrated marketing communications planning.',
        problemAddressed:
          'Students and early-career professionals often struggle to translate strong domain ideas into properly structured academic theses, research frameworks, and career documents.',
        beneficiaries: 'Students, graduates and early-career professionals.',
        status: 'Active',
        featured: true,
        tags: ['Academic support', 'Communication', 'Professional development'],
        ctaLabel: 'Discuss this venture',
      },
      {
        id: 'my-e-workbook',
        monogram: 'MEW',
        name: 'My E-Workbook',
        category: 'Education technology',
        proposition:
          'Accessible web-based learning workbooks, guided videos, and progress tracking for pre-tertiary students.',
        description:
          'Exploring digital workbooks, instructional videos, quizzes and progress tracking to make structured learning resources more accessible to pre-tertiary learners in Ghana.',
        problemAddressed:
          'Many pre-tertiary learners and families lack structured, interactive revision and assessment tools that align with classroom learning outside school hours.',
        beneficiaries: 'Learners, parents, teachers and schools.',
        status: 'In development',
        featured: false,
        tags: ['EdTech', 'Digital learning', 'Assessment', 'Educational access'],
        ctaLabel: 'Discuss this venture',
      },
      {
        id: 'navix',
        monogram: 'NVX',
        name: 'NAVIX',
        category: 'African trade and SME innovation',
        proposition:
          'AI-assisted cross-border trade readiness platform in development for Ghanaian agro-processing SMEs.',
        description:
          'An AI-assisted export-readiness platform exploring how Ghanaian agro-processing SMEs can better understand and prepare for the requirements of regional and continental markets.',
        problemAddressed:
          'Small and medium agro-processors face fragmented compliance information and documentation barriers when preparing to trade under regional and AfCFTA frameworks.',
        beneficiaries: 'Ghanaian agro-processing SMEs and export-support organisations.',
        status: 'In development',
        featured: false,
        tags: ['SME innovation', 'Trade readiness', 'Digital tools', 'AfCFTA'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'votentra',
        monogram: 'VOT',
        name: 'VOTENTRA',
        category: 'Digital governance infrastructure',
        proposition:
          'Multi-tenant institutional e-voting system in development focused on verification and auditability.',
        description:
          'Developing a secure, structured digital voting system for institutional elections, with a longer-term interest in trustworthy digital election infrastructure.',
        problemAddressed:
          'Universities, student bodies, and professional associations need transparent, verifiable digital election processes that reduce administrative friction and build voter trust.',
        beneficiaries: 'Universities, associations and eligible institutions.',
        status: 'In development',
        featured: false,
        tags: ['Digital governance', 'Institutional systems', 'Election processes', 'Trust'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'boame',
        monogram: 'BME',
        name: 'BoaMe',
        category: 'Community fintech & event workflows',
        proposition:
          'Digital financial platform in development for Mobile Money contributions and automated Nsawa donation tracking.',
        description:
          'Developing a structured digital platform that simplifies community contributions, Mobile Money integration, and transparent record-keeping for local events and social support.',
        problemAddressed:
          'Traditional paper-based contribution tracking at community gatherings and funerals is prone to manual reconciliation errors and delayed reporting.',
        beneficiaries: 'Families, event organisers, and community associations in Ghana.',
        status: 'In development',
        featured: false,
        tags: ['FinTech', 'Mobile Money', 'Digital records', 'Community systems'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'the-grid',
        monogram: 'GRD',
        name: 'The Grid',
        category: 'Digital systems & venture ecosystem',
        proposition:
          'Structured digital platform currently in local development connecting business workflows and user coordination.',
        description:
          'Exploring a modular web platform designed to streamline digital coordination, resource discovery, and structured operational workflows.',
        problemAddressed:
          'Growing teams and local businesses often rely on disconnected tools that make coordinating workflows and tracking digital operations difficult.',
        beneficiaries: 'Emerging businesses, creators, and professional networks.',
        status: 'In development',
        featured: false,
        tags: ['Digital workflows', 'Web platform', 'Operations', 'Innovation'],
        ctaLabel: 'Explore the idea',
      },
    ] as Venture[],
  },

  experienceSection: {
    sectionNumber: '03',
    title: 'Experience that informs my thinking',
    intro:
      'Hands-on work across financial reconciliation, monitoring and evaluation, classroom instruction, and CRM administration grounds how I approach digital systems.',
    items: [
      {
        id: 'brich',
        role: 'Internal Auditor / Monitoring & Evaluation',
        organisation: 'Brich Company Limited (Tuatuagye Division), Accra',
        period: 'Professional Experience',
        summary:
          'Conducted operational audits, field verification, and systematic account reconciliations to strengthen financial accuracy and customer trust.',
        highlights: [
          'Executed passbook-versus-system reconciliations and direct customer confirmations to verify account integrity.',
          'Investigated operational discrepancies, documented audit trails, and tracked corrective follow-up actions.',
          'Prepared structured monitoring and evaluation reports to support executive decision-making and process accountability.',
        ],
      },
      {
        id: 'salesforce',
        role: 'Salesforce Administration & Digital Learning',
        organisation: 'Trailblazer Ecosystem & Credentialed Practice',
        period: 'Continuous Professional Development',
        summary:
          'Earned Salesforce Certified Administrator and Salesforce Certified Associate credentials while designing structured CRM workflows and data management processes.',
        highlights: [
          'Configured user management, security models, custom objects, and automated process flows in Salesforce environments.',
          'Active participant in regional Trailblazer Community learning initiatives and digital business skill-building.',
        ],
      },
      {
        id: 'teaching',
        role: 'Educator — English Language & ICT',
        organisation: 'Classroom & Foundational Instruction',
        period: 'Educational Practice',
        summary:
          'Taught English Language and Information & Communications Technology, building practical digital literacy and clear communication habits with learners.',
        highlights: [
          'Translated technical ICT concepts into accessible, step-by-step lessons for pre-tertiary learners.',
          'Observed firsthand the learning resource gaps that later inspired the development of My E-Workbook.',
        ],
      },
    ] as ExperienceItem[],
    education: {
      degree: 'Bachelor of Technology (B.Tech) in Marketing — First Class Honours',
      institution: 'Accra Technical University, Ghana',
      additional: 'Higher National Diploma (HND) in Marketing, Accra Technical University',
    },
  },

  skillsSection: {
    sectionNumber: '04',
    title: 'The tools and thinking I bring',
    groups: [
      {
        category: 'Marketing and Business',
        items: [
          'Marketing strategy & planning',
          'Customer engagement',
          'Market understanding',
          'Business communication',
        ],
      },
      {
        category: 'CRM and Digital Systems',
        items: [
          'Salesforce administration',
          'Customer data processes',
          'Workflow thinking',
          'Digital campaign coordination',
        ],
      },
      {
        category: 'Data and Operations',
        items: [
          'Spreadsheet analysis',
          'Passbook & system reconciliation',
          'Monitoring and evaluation',
          'Operational reporting',
        ],
      },
      {
        category: 'Entrepreneurship and Innovation',
        items: [
          'Problem framing',
          'Concept development',
          'Business & academic research',
          'Early-stage product thinking',
        ],
      },
    ] as SkillGroup[],
    credentials: [
      {
        title: 'Salesforce Certified Administrator',
        issuer: 'Salesforce',
        statusText: 'Verified on Trailblazer',
        verificationUrl: 'https://www.salesforce.com/trailblazer/fnorman',
      },
      {
        title: 'Salesforce Certified Associate',
        issuer: 'Salesforce',
        statusText: 'Verified on Trailblazer',
        verificationUrl: 'https://www.salesforce.com/trailblazer/fnorman',
      },
    ] as Credential[],
  },

  futureSection: {
    sectionNumber: '05',
    title: "What I'm exploring next",
    copy: "I'm interested in the systems, people and opportunities that help African ideas become useful, sustainable solutions. My current interests include digital business, innovation and entrepreneurship, customer relationship management technology, and postgraduate study that strengthens my ability to contribute to these areas.",
    blocks: [
      {
        number: '01',
        title: 'Innovation and entrepreneurship',
        detail:
          'Testing practical business models and digital tools that solve everyday operational challenges for African learners, SMEs, and institutions.',
      },
      {
        number: '02',
        title: 'Digital business, CRM and customer analytics',
        detail:
          'Deepening expertise in enterprise CRM systems, customer lifecycle data, and technology-enabled workflows that help organizations scale responsibly.',
      },
      {
        number: '03',
        title: 'Funded postgraduate study and international academic collaboration',
        detail:
          'Pursuing rigorous postgraduate education and research partnerships in digital business, marketing technology, and innovation management.',
      },
    ],
  },

  connectSection: {
    sectionNumber: '06',
    headline: 'Good ideas grow through meaningful connections.',
    supportingCopy:
      "I'm open to thoughtful conversations about mentorship, postgraduate study, innovation, digital business and collaborations that create practical value for African communities.",
    paths: [
      {
        title: 'Mentorship and professional guidance',
        description:
          'Insights from experienced leaders in technology, CRM, marketing, and African enterprise.',
      },
      {
        title: 'Scholarships and postgraduate opportunities',
        description:
          'Discussions with university representatives, academic advisors, and scholarship foundations.',
      },
      {
        title: 'Venture collaboration',
        description:
          'Feedback, pilot partnerships, or research exchange around Write Right Consult, My E-Workbook, NAVIX, VOTENTRA, BoaMe, or The Grid.',
      },
      {
        title: 'Speaking and other professional enquiries',
        description:
          'Panels, youth innovation dialogues, consulting projects, and professional networking.',
      },
    ],
  },
};