export const site_data = {
    // Site metadata and SEO
    meta: {
      title: 'chris watkins ... principal engineer ... linux + backend',
      description: 'principal engineer ... 20+ years ... linux, kubernetes, aws, ai/ml ... built infra for finance at scale.',
      url: 'https://chrisworks.dev/',
      og_image: 'https://chrisworks.dev/static/og.png',
      og_title: 'chris watkins ... principal engineer',
      og_description: 'linux + backend ... enterprise scale ... projects, case studies, contact.',
      twitter_title: 'chris watkins ... principal engineer',
      twitter_description: 'linux + backend ... enterprise scale.',
      canonical: 'https://chrisworks.dev/',
      github_profile: 'https://github.com/chris17453',
      linkedin_profile: 'https://www.linkedin.com/in/chris17453',
      rss_feed: '/rss.xml',
      sitemap: '/sitemap.xml'
    },
  
    // Personal information
    personal: {
      full_name: 'Chris Watkins',
      first_name: 'Chris',
      last_name: 'Watkins',
      title: 'Principal Engineer',
      email_user: 'chris',
      email_domain: 'watkinslabs.com',
      phone: '(877) 731-4155',
      location: 'Sugar Hill, GA',
      company: 'Watkins Labs',
      company_url: 'https://watkinslabs.com',
      profile_image: '/static/chris.webp',
      years_experience: 25
    },
  
    // Hero section data
    hero: {
      status_message: 'Looking for work...',
      headline: 'Principal Engineer',
      intro_text: "I'm an engineer with deep coding and infrastructure roots. Generally, I'm the guy you treat like McGyver and sick at systemic problems. I have close to 25 years of experience in the IT field. I've owned consulting companies, and worked for big corps. I'm passionate, adaptable, and technically hands-on. Available for principal engineer, staff engineer, or technical leadership roles.",
      cta_primary: {
        text: 'Hire Me',
        action: 'contact'
      },
      cta_secondary: {
        text: 'View Projects',
        action: 'projects'
      },
      terminal_animation: {
        lines: [
          '$ whoami',
          'chris_watkins',
          '$ experience --years',
          '24+',
          '$ skills --list',
          'linux, kubernetes, openshift, VMWare, aws, terraform, ansible, python, golang, php, c, c#',
          '$ availability --status',
          'ready_for_new_challenges',
          '$ contact --hire',
          'Initializing connection...'
        ],
        typing_speed: 50,
        line_delay: 800,
        loop_delay: 3000
      }
    },
  
    // About section data
    about: {
      title: 'About Me',
      terminal_style: true,
      content: [
        {
          text: "I have spent 25 years living and breathing technology, building, breaking, and fixing enterprise systems.",
          type: "intro"
        },
        {
          text: "I began my career as a C/PHP consultant with a strong understanding of hardware, quickly expanding into infrastructure design, racking, and stacking. I built core infrastructure and systems for manufacturing companies and local boutiques, delivering accounting platforms, inventory management, e-commerce integrations, shipping systems with FedEx and UPS, and payment processing solutions. I developed long-term relationships with clients ranging from small shops to enterprise operations, keeping them running and evolving through cloud migrations and legacy system rebuilds.",
          type: "paragraph"
        },
        {
          text: "I later explored corporate life to see what it was like not managing customers directly... yet I still found myself serving them. At Pitney Bowes, I worked as a Senior Engineer building and integrating hundreds of shipping platform integrations in C#, taking on both technical leadership and hands-on coding. When my division closed after a year, I joined E*TRADE as SRE in the infrastructure division, where I integrated systems, implemented platform scanning, developed VM automation, and integrated VMware. During COVID, I delivered critical remote workforce metrics to the C-suite. When Morgan Stanley acquired the company, I took the opportunity to seek new challenges.",
          type: "paragraph"
        },
        {
          text: "I moved to IBM as SRE/Engineer in the Financial Services Division, traveling nationwide to implement OpenShift, Turbonomics, Instana, and WatsonX solutions for banks and Fortune 500 companies. I contributed not just as a designer but as an implementer, ensuring solutions worked in the real world. When the compensation structure changed, I chose to return to independent consulting.",
          type: "paragraph"
        },
        {
          text: "After a year or so of running my own practice again, I am ready for the next leadership opportunity, bringing both the adaptability of a consultant and the process discipline of Fortune 500 environments. I lead from the front... architecting, building, and fixing systems myself when needed.",
          type: "paragraph"
        }
      ]
    },
  
    // Contact section data
    contact: {
      headline: 'Ready to Solve Your Next Challenge',
      subheadline: 'Available for principal engineer, staff engineer, or technical leadership roles. Remote preferred, open to hybrid arrangements.',
      looking_for: {
        title: "What I'm Looking For",
        items: [
          'Hard problems with no clear playbook',
          'Enterprise systems worth building',
          'Teams that value adaptability'
        ]
      },
      offering: {
        title: 'What You Get',
        items: [
          '25 years of problem solving experience',
          'Deep technical skills across the stack',
          'Enterprise architecture expertise',
          'Someone who adapts to needs'
        ]
      },
      linkedin_activity: {
        text: 'LinkedIn Stalking',
        url: 'https://www.linkedin.com/in/chris17453/recent-activity/all/'
      }
    },
  
    // Video section data
    video: {
      title: 'Hire Me .. AI Generated Demo',
      description: 'Created with Stable Diffusion, Google Veo 2, Facebook AudioGen & Suno AI, and automation. No one click interface was available, this was entirely me, the tools and the command line.',
      youtube_id: 'teLgCZQmHC0',
      caption: 'This video demonstrates nothing more than me being creative with AI tooling as an early adopter.'
    },
  
    // Projects section data
    projects: {
      title: 'Open Source Projects',
      subtitle: 'Demonstrating technical depth across multiple domains',
      technical_demos: {
        title: 'Technical Demonstrations',
        videos: [
          {
            youtube_id: 'JJKnIDl8ob0',
            title: 'Technical Deep Dive',
            description: 'Demonstrating complex system integration and problem-solving approach'
          },
          {
            youtube_id: 'tTli8XvmKPs',
            title: 'Infrastructure Automation',
            description: 'Live automation and deployment workflows in action'
          }
        ]
      }
    },
  
    // Hobbies section data
    hobbies: {
      title: 'Hardware & Creative Projects',
      subtitle: "When I'm not writing code, I'm building things that blink, beep, and occasionally explode"
    },
  
    // Experience section data
    experience: {
      title: 'Professional Experience',
      subtitle_template: '%years% years of enterprise technology leadership'
    },
  
    // Source code section data
    source_code: {
      title: "Steal This Site's Code",
      subtitle: 'Full source available • MIT Licensed • Fork it, break it, make it better',
      repo_url: 'https://github.com/chris17453/chrisworks.dev',
      repo_name: 'chrisworks.dev',
      cta_text: 'Clone This Portfolio',
      status_indicators: [
        { icon: 'active', text: 'Active development' },
        { icon: 'tech', text: 'React + Bootstrap' },
        { icon: 'performance', text: 'Performance optimized' }
      ],
      code_preview: {
        template: `<Portfolio>
    <Experience years={%years%} />
    <Projects count={%count%} status="open-source" />
    <Coffee cups={%coffee%} />
    <Bugs fixed="eventually" />
  </Portfolio>`,
        dynamic_values: {
          years: 25,
          count: 148,
          coffee: 'counter' // special value for animated counter
        }
      },
      stats: [
        { icon: 'GitCommit', label: 'Clean Code' },
        { icon: 'GitBranch', label: 'Well Structured' },
        { icon: 'GitPullRequest', label: 'PR Welcome' },
        { icon: 'Star', label: 'Star Worthy' }
      ]
    },
  
    // Footer data
    footer: {
      copyright_text: '© 2025 %name%. Ready to solve your enterprise challenges.',
      show_year: true
    },
  
    // Navigation configuration
    navigation: {
      brand_text: '%first_name% %last_name%',
      brand_url: '#home',
      sections: [
        { id: 'home', name: 'Home', enabled: true },
        { id: 'about', name: 'About', enabled: true },
        { id: 'experience', name: 'Experience', enabled: true },
        { id: 'skills', name: 'Skills', enabled: true },
        { id: 'hire-video', name: 'Hire Video', enabled: true },
        { id: 'projects', name: 'Projects', enabled: true },
        { id: 'hobbies', name: 'Hobbies', enabled: true },
        { id: 'source-code', name: 'Source Code', enabled: true },
        { id: 'contact', name: 'Contact', enabled: true }
      ]
    },
  
    // JSON-LD structured data templates
    structured_data: {
      person: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "%full_name%",
        "url": "%url%",
        "image": "%url%static/chris.webp",
        "sameAs": ["%github_profile%", "%linkedin_profile%"],
        "jobTitle": "%title%",
        "email": "mailto:%email%",
        "worksFor": {
          "@type": "Organization",
          "name": "%company%"
        },
        "knowsAbout": ["Linux", "Kubernetes", "AWS", "SRE", "AI/ML", "Networking", "Security"]
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "%url%",
        "name": "%full_name% Portfolio",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "%url%?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
  
    // Theme configuration
    theme: {
      colors: {
        primary: '#6366f1',
        secondary: '#64748b',
        success: '#00ff88',
        dark: '#000',
        light: '#fff'
      },
      gradients: {
        hero: 'linear-gradient(135deg, #624b22 0%, #15150b 100%)',
        about: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
        experience: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%)',
        skills: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        video: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        projects: 'linear-gradient(135deg, #715844 0%, #150d66 100%)',
        hobbies: 'linear-gradient(135deg, #001a0d 0%, #002619 100%)',
        contact: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        source: '#000'
      }
    }
  };
  
  // Helper function to process template strings
  export const process_template = (template, data) => {
    let processed = template;
    Object.keys(data).forEach(key => {
      const regex = new RegExp(`%${key}%`, 'g');
      processed = processed.replace(regex, data[key]);
    });
    return processed;
  };
  
  // Helper to get formatted email
  export const get_email = () => {
    return `${site_data.personal.email_user}@${site_data.personal.email_domain}`;
  };
  
  // Helper to get all template variables
  export const get_template_vars = () => {
    return {
      ...site_data.personal,
      ...site_data.meta,
      email: get_email()
    };
  };