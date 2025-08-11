import { Server, Award, Code, Users } from 'lucide-react';

export const professional_experience = [
  {
    title: "Founder & Principal Solutions Architect",
    company: "Watkins Labs",
    date: "January 2024 – Present",
    location: "Sugar Hill, GA",
    description: "Provides specialized consulting for corporations managing legacy infrastructure and modernization challenges. Develops hybrid solutions bridging decades-old systems with contemporary platforms.",
    achievements: [
      "Modernized DOS, COBOL, and end-of-life systems for continued business operation",
      "Built custom frameworks enabling seamless compatibility between legacy and modern environments",
      "Delivered sustainable support for systems with minimal vendor backing",
      "Transitioned VMware environments to cost-effective alternatives while maintaining operational continuity"
    ],
    tech: ["Python", "PHP", "Perl", "COBOL", "C", "C++", "Linux", "VMware",'Teraform']
  },
  {
    title: "Senior Site Reliability Engineer",
    company: "IBM Financial Services Division", 
    date: "July 2021 – January 2024",
    location: "Hybrid/Travel",
    description: "Architected and delivered enterprise solutions for top-tier financial institutions while supporting strategic sales initiatives. Collaborated directly with IBM WatsonX team on AI implementations for banking clients.",
    achievements: [
      "Designed AWS-based infrastructures integrating IBM MQ, WatsonAIOps, and large language models",
      "Developed proof-of-concept systems for document analysis and process automation in regulated environments",
      "Optimized OpenShift, monitoring tools, and multi-cloud architectures for financial services",
      "Served as technical liaison between engineering teams and enterprise stakeholders"
    ],
    tech: ["AWS", "OpenShift", "Kubernetes", "IBM WatsonX", "Python", "Instana", "Turbonomic"]
  },
  {
    title: "Principal Site Reliability Engineer",
    company: "E*TRADE",
    date: "June 2018 – February 2021", 
    location: "Alpharetta, GA",
    description: "Enhanced infrastructure reliability and operational efficiency across enterprise trading platform supporting millions of users. Led SRE adoption across multiple business units.",
    achievements: [
      "Automated management of 20,000+ virtual machines across VMware and AWS environments",
      "Migrated legacy distributed systems to cloud-native architectures",
      "Implemented comprehensive monitoring, alerting, and incident response procedures",
      "Architected DDB, an open-source in-memory database enabling SQL-like queries on flat files"
    ],
    tech: ["Terraform", "Ansible", "Kubernetes", "Python", "VMware", "AWS", "Prometheus"]
  },
  {
    title: "Senior Software Engineer",
    company: "Insight Global",
    date: "February 2018 – May 2018",
    location: "Atlanta, GA", 
    description: "Modernized legacy build environments through containerization and CI/CD pipeline development.",
    achievements: [
      "Redesigned outdated build systems using modern container technologies",
      "Contributed to enterprise message bus development for third-party system connectivity"
    ],
    tech: ["Docker", "Ansible", "Terraform", "Kafka"]
  },
  {
    title: "Senior Software Developer",
    company: "Pitney Bowes",
    date: "January 2017 – February 2018",
    location: "Seattle, WA",
    description: "Developed enterprise shipping platform components serving global logistics operations.",
    achievements: [
      "Designed microservices for worldwide shipping rate processing and optimization",
      "Built specialized reporting and barcode management systems",
      "Implemented Git version control and conducted technical training"
    ],
    tech: ["C#", "ASP.NET", "JavaScript", "MSSQL", "AWS S3/EC2"]
  },
  {
    title: "Founder & Principal Solutions Architect", 
    company: "DataModerated",
    date: "July 2001 – December 2016",
    location: "Multi-location",
    description: "Led technical consulting practice specializing in enterprise system migrations and infrastructure modernization. Managed team of engineers while maintaining hands-on technical involvement.",
    achievements: [
      "Delivered architecture and implementation services for complex business systems",
      "Successfully transitioned multiple legacy environments to modern platforms",
      "Developed numerous EDI and API solutions for seamless business process automation",
      "Managed technical staff while maintaining direct client relationships"
    ],
    tech: ["C", "C++", "C#", "Python", "Perl", "Multiple database platforms", "VMware", "KVM"]
  }
];

export const enterprise_solutions = [
  {
    title: "IBM WatsonX Banking AI Implementation",
    description: "Architected AI/ML solutions for top-tier financial institutions, integrating document analysis and process automation in highly regulated environments.",
    tech: ["IBM WatsonX", "AWS", "Python", "Banking APIs"],
    impact: "Reduced document processing time by 80%"
  },
  {
    title: "E*TRADE Infrastructure Automation",
    description: "Automated management of 20,000+ virtual machines across VMware and AWS environments, enabling seamless scaling and migration capabilities.",
    tech: ["VMware", "AWS", "Terraform", "Ansible", "Python"],
    impact: "Enabled zero-downtime migrations"
  },
  {
    title: "Legacy System Modernization",
    description: "Integrated DOS, COBOL, and end-of-life systems with modern platforms, extending system life while enabling new functionality.",
    tech: ["COBOL", "C/C++", "Python", "Custom APIs"],
    impact: "Extended system life by 10+ years"
  },
  {
    title: "High-Availability Message Infrastructure", 
    description: "Designed enterprise messaging solutions bridging AWS MQ and RDMQ for mission-critical hybrid cloud environments.",
    tech: ["AWS MQ", "RDMQ", "High Availability Architecture"],
    impact: "99.99% uptime achieved"
  }
];

export const project_categories = [
  {
    category: "Enterprise Infrastructure",
    icon: <Server className="me-2" size={20} />,
    projects: [
      {
        name: "AWS MQ + RDMQ HA",
        description: "High availability messaging infrastructure bridging AWS MQ and RDMQ for enterprise hybrid cloud environments",
        url: "https://github.com/chris17453/aws-mq-rdmq-ha",
        tech: ["AWS MQ", "RDMQ", "Python"]
      },
      {
        name: "Homelab Infrastructure",
        description: "Enterprise-grade home infrastructure with 3.5TB RAM, 306 cores running production-equivalent environments",
        url: "https://github.com/chris17453/homelab",
        tech: ["Enterprise Hardware", "RedHat", "VMware"]
      },
      {
        name: "Cloud Seeder",
        description: "Automated Rancher Kubernetes cluster deployment in VMware environments",
        url: "https://github.com/chris17453/cloud-seeder",
        tech: ["Kubernetes", "VMware", "Rancher"]
      },
      {
        name: "VOIP Integration",
        description: "Voice agent modules for SIP/FreePBX enterprise telephony systems",
        url: "https://github.com/chris17453/echomatrix",
        tech: ["SIP", "FreePBX", "VOIP"]
      }
    ]
  },
  {
    category: "AI/ML Innovation",
    icon: <Award className="me-2" size={20} />,
    projects: [
      {
        name: "CGAN MNIST Refactored",
        description: "Custom AI model training for handwritten text recognition with AI-generated font capabilities",
        url: "https://github.com/chris17453/cgan-MNIST-refactored",
        tech: ["TensorFlow", "Python", "CGAN"]
      },
      {
        name: "WordPress AI Generator",
        description: "Controlled AI article generation for WordPress with precision prompting and content management",
        url: "https://github.com/chris17453/wp-rss-article-re-gen",
        tech: ["WordPress", "AI APIs", "PHP"]
      },
      {
        name: "Image to SVG Converter",
        description: "AI-powered tool for converting images to scalable vector graphics",
        url: "https://github.com/chris17453/imagetosvg",
        tech: ["Python", "AI", "SVG Processing"]
      }
    ]
  },
  {
    category: "Developer Productivity",
    icon: <Code className="me-2" size={20} />,
    projects: [
      {
        name: "Flort CLI Tool",
        description: "Command-line utility for concatenating files optimized for AI processing workflows",
        url: "https://github.com/watkinslabs/flort",
        tech: ["Python", "CLI"]
      },
      {
        name: "TTY to GIF",
        description: "Terminal session recorder that creates animated GIFs from text output",
        url: "https://github.com/chris17453/ttygif",
        tech: ["Python", "Terminal Processing"]
      },
      {
        name: "VS Code Extensions",
        description: "File transfer utility and Flort integration for VS Code, plus 50+ published themes",
        url: "https://marketplace.visualstudio.com/search?term=watkins%20labs",
        tech: ["TypeScript", "VS Code API"]
      }
    ]
  },
  {
    category: "Database Innovation",
    icon: <Users className="me-2" size={20} />,
    projects: [
      {
        name: "DDB Database Engine",
        description: "Stateless database engine providing SQL interface for flat files, adopted by multiple global organizations",
        url: "https://github.com/chris17453/ddb",
        tech: ["Python", "SQL", "File Processing"]
      }
    ]
  }
];