import { Server, Award, Code, Users, Cloud, Database, Network, Settings, Monitor, Layers } from 'lucide-react';

let img_version="1.0.2";

export const project_categories = [
    {
      category: "Enterprise Infrastructure",
      icon: <Server className="me-2" size={20} />,
      projects: [
        {
          name: "AWS MQ + RDMQ HA",
          description: "High availability messaging infrastructure bridging AWS MQ and RDMQ for enterprise hybrid cloud environments",
          url: "https://github.com/chris17453/aws-mq-rdmq-ha",
          tech: ["AWS MQ", "RDMQ", "Python"],
          image: `/static/rqdm.png?v=${img_version}`
        },
        {
          name: "Homelab Infrastructure",
          description: "Enterprise-grade home infrastructure with 3.5TB RAM, 306 cores running production-equivalent environments",
          url: "https://github.com/chris17453/homelab",
          tech: ["Enterprise Hardware", "RedHat", "VMware"],
          image: `/static/homelab.png?v=${img_version}`
        },
        {
          name: "Cloud Seeder",
          description: "Automated Rancher Kubernetes cluster deployment in VMware environments",
          url: "https://github.com/chris17453/cloud-seeder",
          tech: ["Kubernetes", "VMware", "Rancher"],
          image: `/static/cloud-seeder.png?v=${img_version}`
        },
        {
          name: "VOIP Integration",
          description: "Voice agent modules for SIP/FreePBX enterprise telephony systems",
          url: "https://github.com/chris17453/echomatrix",
          tech: ["SIP", "FreePBX", "VOIP"],
          image: `/static/voip.jpg?v=${img_version}`
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
          tech: ["TensorFlow", "Python", "CGAN"],
          image: "/static/minst.gif"
        },
        {
          name: "WordPress AI Generator",
          description: "Controlled AI article generation for WordPress with precision prompting and content management",
          url: "https://github.com/chris17453/wp-rss-article-re-gen",
          tech: ["WordPress", "AI APIs", "PHP"],
          image: "/static/ai-article.jpg"
        },
        {
          name: "Image to SVG Converter",
          description: "AI-powered tool for converting images to scalable vector graphics",
          url: "https://github.com/chris17453/imagetosvg",
          tech: ["Python", "AI", "SVG Processing"],
          image: "/static/img2svg.svg"
        }
      ]
    },
    {
      category: "Developer Productivity",
      icon: <Code className="me-2" size={20} />,
      projects: [
        {
          name: "Resumate",
          description: "Command-line utility for building a professioanl Resume from yaml",
          url: "https://github.com/chris17453/resumate",
          tech: ["Python", "CLI"],
          image: "/static/resumate.png"
        },

        {
          name: "Flort CLI Tool",
          description: "Command-line utility for concatenating files optimized for AI processing workflows",
          url: "https://github.com/watkinslabs/flort",
          tech: ["Python", "CLI"],
          image: "/static/flort.png"
        },
        {
          name: "TTY to GIF",
          description: "Terminal session recorder that creates animated GIFs from text output",
          url: "https://github.com/chris17453/ttygif",
          tech: ["Python", "Terminal Processing"],
          image: "/static/ttygif.webp"
        },
        {
          name: "VS Code Extensions",
          description: "File transfer utility and Flort integration for VS Code, plus 50+ published themes",
          url: "https://marketplace.visualstudio.com/search?term=watkins%20labs&target=VSCode&category=All%20categories&sortBy=Relevance",
          tech: ["TypeScript", "VS Code API"],
          image: "/static/theme.png"
        }
      ]
    },
    {
      category: "Database Innovation",
      icon: <Users className="me-2" size={20} />,
      projects: [
        {
          name: "DDB Database Engine",
          description: "Stateless database engine providing SQL interface for flat files, adopted by multiple global organizations. E-Trade, IBM, HP",
          url: "https://github.com/chris17453/ddb",
          tech: ["Python", "SQL", "File Processing"],
          image: "/static/ddb.png"
        }
      ]
    }
  ];
  