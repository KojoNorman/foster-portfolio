export interface Venture {
  id: string;
  monogram: 'WRC' | 'MEW' | 'NVX' | 'VOT' | 'BME' | 'GRD';
  name: string;
  category: string;
  tier: 'primary' | 'exploration';
  proposition: string;
  description: string;
  currentBuildState: string;
  problemAddressed: string;
  beneficiaries: string;
  status: 'Active' | 'Prototype in development' | 'Concept in development' | 'Early-stage exploration';
  featured?: boolean;
  tags: string[];
  ctaLabel: string;
}

export interface CoreValue {
  letter: string;
  title: string;
  detail: string;
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

export interface AnalyticsConfig {
  enabled: boolean;
  provider: 'umami' | 'plausible' | 'goatcounter' | 'custom-only';
  websiteId: string;
  scriptUrl: string;
  domain: string;
  debugOnLocalhost: boolean;
}

export interface FormDeliveryConfig {
  web3FormsAccessKey: string;
  emailJsServiceId: string;
  emailJsTemplateId: string;
  emailJsPublicKey: string;
}

export const siteData = {
  meta: {
    title: 'Foster Normanyo | Marketing, Technology & Entrepreneurship',
    description:
      'Meet Foster Normanyo, a Ghanaian marketing and technology professional exploring digital systems, entrepreneurship and solutions for African businesses and communities.',
    siteUrl: 'https://fosternormanyo.netlify.app',
    ogImage: '/og-image.jpg',
  },

  analytics: {
    enabled: true,
    provider: 'umami',
    websiteId: '8d5556fd-e162-4350-bc7c-6d17bdacf9c1',
    scriptUrl: 'https://cloud.umami.is/script.js',
    domain: 'fosternormanyo.netlify.app',
    debugOnLocalhost: true,
  } as AnalyticsConfig,

  formDelivery: {
    web3FormsAccessKey: '1b5150fc-3657-4a85-a3f7-20d2da3df2ef',
    emailJsServiceId: '',
    emailJsTemplateId: '',
    emailJsPublicKey: '',
  } as FormDeliveryConfig,

  profile: {
    name: 'Foster Normanyo',
    navDescriptor: 'MARKETING · TECHNOLOGY · ENTREPRENEURSHIP',
    eyebrow: 'GHANA · BUSINESS · TECHNOLOGY',
    heroHeadline:
      'Building at the intersection of business, technology and African opportunity.',
    heroSupporting:
      "I'm Foster Normanyo, a marketing and technology professional exploring how digital systems and entrepreneurship can solve practical problems for African businesses and communities.",
    availabilityLine:
      'Open to mentorship, funded postgraduate study and venture collaboration.',
    portraitLabel: 'Marketing | Salesforce | Entrepreneurship',
    hasPortraitPhoto: true,
    portraitPath: '/images/portrait.jpg',
    portraitAlt:
      'Portrait of Foster Normanyo, marketing and technology professional in Accra, Ghana',
    showCvDownload: true,
    cvPath: '/documents/foster-normanyo-cv.pdf',
    email: 'fosternormanyo23@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/normanyo-foster',
    trailblazerUrl: 'https://www.salesforce.com/trailblazer/fnorman',
  },

  about: {
    sectionNumber: '01',
    title: 'A little about my work',
    lead: 'Grounded in a First Class Bachelor of Technology in Marketing from Accra Technical University and certified training in Salesforce administration, my work sits where commercial strategy meets practical operations.',
    body: 'Through hands-on experience in internal auditing, monitoring and evaluation, and teaching, I have seen how structured data, clear communication, and reliable digital workflows improve everyday decisions. Today, I channel that operational discipline into developing and testing venture concepts tailored for education, trade, and institutional trust across Ghana and Africa.',
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
    guidingPrinciples: {
      vision:
        "To establish and lead a diversified conglomerate that sets the standard for operational excellence, financial robustness, and sustainable development in Ghana's private sector.",
      mission:
        'To identify high-potential opportunities across industries and build them into self-sustaining, profitable enterprises that generate wealth while solving critical local challenges through technology and disciplined management.',
      // Adjustable parameter: E·I·I·S ("EYES" — Vision-Led) or W·I·S·E
      acronymBadge: 'E·I·I·S ("EYES" Framework)',
      coreValues: [
        {
          letter: 'E',
          title: 'Excellence',
          detail: 'Setting rigorous standards in research, operational execution, and service delivery.',
        },
        {
          letter: 'I',
          title: 'Integrity',
          detail: 'Building institutional trust through transparent auditing, honest claims, and accountability.',
        },
        {
          letter: 'I',
          title: 'Innovation',
          detail: 'Applying practical technology and structured workflows to solve everyday local bottlenecks.',
        },
        {
          letter: 'S',
          title: 'Sustainability',
          detail: 'Designing resilient business models equipped to generate lasting community and commercial value.',
        },
      ] as CoreValue[],
    },
  },

  venturesSection: {
    sectionNumber: '02',
    title: 'Ideas shaped by real-world problems',
    intro:
      "I'm exploring how thoughtful products and digital systems can address practical challenges in education, business, trade and governance. Below are the three primary ventures I am currently focusing on, followed by early-stage concepts under exploration.",
    otherConceptsTitle: "Other concepts I'm exploring",
    otherConceptsIntro:
      'Early-stage architectures and local prototypes exploring institutional governance, community finance, and workflow coordination.',
    ventures: [
      {
        id: 'write-right-consult',
        monogram: 'WRC',
        name: 'Write Right Consult',
        category: 'Academic and professional support',
        tier: 'primary',
        proposition:
          'Structured academic consulting, research methodology guidance, and professional document preparation.',
        description:
          'Providing structured writing and document-support services for students and professionals, including academic projects, CVs, presentations and integrated marketing communications planning.',
        currentBuildState:
          'Currently active: Delivering one-on-one academic consulting, research structuring, and CV/career documentation services.',
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
        tier: 'primary',
        proposition:
          'Web-based learning workbooks, guided instructional videos, and progress tracking for pre-tertiary students.',
        description:
          'Developing digital workbooks, instructional videos, quizzes and progress tracking to make structured learning resources more accessible to pre-tertiary learners in Ghana.',
        currentBuildState:
          'Prototype in local development: Core web interface and workbook structures are being coded and tested on localhost alongside educational video series.',
        problemAddressed:
          'Many pre-tertiary learners and families lack structured, interactive revision and assessment tools that align with classroom learning outside school hours.',
        beneficiaries: 'Learners, parents, teachers and schools.',
        status: 'Prototype in development',
        featured: false,
        tags: ['EdTech', 'Digital learning', 'Assessment', 'Educational access'],
        ctaLabel: 'Discuss this venture',
      },
      {
        id: 'navix',
        monogram: 'NVX',
        name: 'NAVIX',
        category: 'African trade and SME innovation',
        tier: 'primary',
        proposition:
          'Export-readiness concept exploring how Ghanaian agro-processing SMEs can prepare for regional markets.',
        description:
          'An AI-assisted export-readiness concept exploring how Ghanaian agro-processing SMEs can better understand compliance and documentation requirements for regional and continental markets.',
        currentBuildState:
          'Concept in development: Localhost UI prototype and compliance workflow mapping in progress; AI readiness assessment engine is part of the intended product roadmap.',
        problemAddressed:
          'Small and medium agro-processors face fragmented compliance information and documentation barriers when preparing to trade under regional and AfCFTA frameworks.',
        beneficiaries: 'Ghanaian agro-processing SMEs and export-support organisations.',
        status: 'Concept in development',
        featured: false,
        tags: ['SME innovation', 'Trade readiness', 'Digital tools', 'AfCFTA'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'votentra',
        monogram: 'VOT',
        name: 'VOTENTRA',
        category: 'Digital governance infrastructure',
        tier: 'exploration',
        proposition:
          'Concept exploring a structured digital voting system for university and association elections.',
        description:
          'Exploring how multi-tenant database design and verification mechanics can support transparent institutional elections.',
        currentBuildState:
          'Concept in development: Database schema and local prototype architecture under exploration; not yet deployed in live institutional elections.',
        problemAddressed:
          'Universities and associations need verifiable digital election workflows that reduce administrative friction.',
        beneficiaries: 'Universities, student bodies, and associations.',
        status: 'Concept in development',
        featured: false,
        tags: ['Digital governance', 'Institutional systems', 'Election processes'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'boame',
        monogram: 'BME',
        name: 'BoaMe',
        category: 'Community fintech & event workflows',
        tier: 'exploration',
        proposition:
          'Concept for digital community contributions and automated Nsawa donation record-keeping.',
        description:
          'Exploring how Mobile Money workflows and automated digital receipts can replace error-prone paper ledger books at community events.',
        currentBuildState:
          'Early-stage exploration: Workflow architecture and localhost interface concept in progress.',
        problemAddressed:
          'Manual paper-based contribution tracking at community gatherings often leads to reconciliation delays.',
        beneficiaries: 'Families, event organisers, and community associations.',
        status: 'Early-stage exploration',
        featured: false,
        tags: ['FinTech concept', 'Mobile Money', 'Digital records'],
        ctaLabel: 'Explore the idea',
      },
      {
        id: 'the-grid',
        monogram: 'GRD',
        name: 'The Grid',
        category: 'Digital systems & workflow coordination',
        tier: 'exploration',
        proposition:
          'Early-stage web concept exploring modular business workflow and resource coordination.',
        description:
          'Exploring a unified web workspace concept to help emerging local teams organize digital operations and shared resources.',
        currentBuildState:
          'Early-stage exploration: Initial UI layout and concept framing on localhost.',
        problemAddressed:
          'Growing teams often rely on disconnected tools that fragment day-to-day operational tracking.',
        beneficiaries: 'Emerging businesses, creators, and project teams.',
        status: 'Early-stage exploration',
        featured: false,
        tags: ['Digital workflows', 'Web concept', 'Operations'],
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
          'Feedback, pilot partnerships, or research exchange around Write Right Consult, My E-Workbook, NAVIX, or early-stage concepts.',
      },
      {
        title: 'Speaking and other professional enquiries',
        description:
          'Panels, youth innovation dialogues, consulting projects, and professional networking.',
      },
    ],
  },
};
