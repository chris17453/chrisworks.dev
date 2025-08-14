import { Server, Award, Code, Users, Cloud, Database, Network, Settings, Monitor, Layers } from 'lucide-react';

export const skills_data = {
  intro_blurb: "I've been around technology for 25 years. I've worked with a lot of different tools and technologies. I may not use all of these daily, but I've used them enough to be productive. I'm not claiming to be an expert in everything - just someone who can figure things out and get the job done.",
  
  scale_description: "1 = Basic familiarity, 2 = Can work with documentation, 3 = Comfortable/Productive, 4 = Advanced knowledge, 5 = Deep expertise",
  
  categories: [
    {
      name: "Languages & Development",
      icon: <Code size={20} />,
      skills: [
        { name: "Python", level: 3.5, description: "General purpose programming", comment: "Daily driver for automation" },
        { name: "C", level: 3.5, description: "Systems programming language", comment: "Where it all started for me" },
        { name: "C++", level: 3, description: "Object-oriented systems language", comment: "" },
        { name: "C#", level: 3, description: ".NET framework language", comment: "" },
        { name: "PHP", level: 3.5, description: "Web development language", comment: "Built many businesses with this" },
        { name: "JavaScript", level: 3, description: "Frontend and backend scripting", comment: "" },
        { name: "TypeScript", level: 3, description: "Typed JavaScript", comment: "Prefer it for larger projects" },
        { name: "COBOL", level: 3, description: "Legacy business language", comment: "Yes, really - still running the world" },
        { name: "Bash/Shell", level: 3.5, description: "Unix shell scripting", comment: "" },
        { name: "PowerShell", level: 3, description: "Windows automation", comment: "" }
      ]
    },
    {
      name: "API & Integration",
      icon: <Layers size={20} />,
      skills: [
        { name: "REST APIs", level: 3.5, description: "RESTful web services", comment: "Built and consumed hundreds" },
        { name: "FastAPI", level: 3, description: "Python web framework", comment: "" },
        { name: "Flask", level: 3, description: "Python micro framework", comment: "" },
        { name: "SOAP/XML", level: 3, description: "Enterprise web services", comment: "" },
        { name: "GraphQL", level: 2.5, description: "Query language for APIs", comment: "Not my favorite" },
        { name: "WebSockets", level: 3, description: "Real-time bidirectional communication", comment: "" },
        { name: "API Gateway", level: 3, description: "API management layer", comment: "" },
        { name: "Message Queues", level: 3, description: "Async message passing", comment: "" }
      ]
    },
    {
      name: "Databases & Data",
      icon: <Database size={20} />,
      skills: [
        { name: "PostgreSQL", level: 3.5, description: "Advanced relational database", comment: "Go-to choice" },
        { name: "MySQL/MariaDB", level: 3.5, description: "Popular relational database", comment: "" },
        { name: "MSSQL", level: 3, description: "Microsoft SQL Server", comment: "" },
        { name: "MongoDB", level: 2.5, description: "Document database", comment: "" },
        { name: "Redis", level: 3, description: "In-memory data store", comment: "" },
        { name: "ETL Pipelines", level: 3, description: "Data extraction and loading", comment: "" },
        { name: "SQL Writing", level: 3.5, description: "Query language", comment: "" },
        { name: "Database Design", level: 3, description: "Schema architecture", comment: "" }
      ]
    },
    {
      name: "Cloud & Platforms",
      icon: <Cloud size={20} />,
      skills: [
        { name: "AWS", level: 3.5, description: "Amazon Web Services", comment: "" },
        { name: "GCP", level: 3, description: "Google Cloud Platform", comment: "" },
        { name: "Azure", level: 2.5, description: "Microsoft Cloud", comment: "When clients require it" },
        { name: "OpenShift", level: 3.5, description: "Enterprise Kubernetes platform", comment: "" },
        { name: "Kubernetes", level: 3.5, description: "Container orchestration", comment: "" },
        { name: "EKS", level: 3, description: "AWS managed Kubernetes", comment: "" },
        { name: "GKE", level: 3, description: "Google managed Kubernetes", comment: "" },
        { name: "ECS", level: 3, description: "AWS container service", comment: "" },
        { name: "Docker", level: 3.5, description: "Container platform", comment: "" }
      ]
    },
    {
      name: "Virtualization",
      icon: <Server size={20} />,
      skills: [
        { name: "VMware vSphere", level: 3.5, description: "Enterprise virtualization", comment: "" },
        { name: "KVM", level: 3.5, description: "Kernel-based VM", comment: "Open source preferred" },
        { name: "Xen", level: 3, description: "Hypervisor", comment: "" },
        { name: "QEMU", level: 3, description: "Machine emulator", comment: "" },
        { name: "Proxmox", level: 3, description: "Virtualization management", comment: "" },
        { name: "Hyper-V", level: 2.5, description: "Windows virtualization", comment: "" },
        { name: "OpenStack", level: 2.5, description: "Cloud infrastructure", comment: "Complex beast" }
      ]
    },
    {
      name: "Infrastructure & Networking",
      icon: <Network size={20} />,
      skills: [
        { name: "Linux Admin", level: 3.5, description: "System administration", comment: "" },
        { name: "Windows Server", level: 3, description: "Microsoft server OS", comment: "" },
        { name: "TCP/IP", level: 3.5, description: "Network protocols", comment: "" },
        { name: "DNS/BIND", level: 3.5, description: "Domain name system", comment: "" },
        { name: "Load Balancers", level: 3, description: "Traffic distribution", comment: "" },
        { name: "Firewalls", level: 3, description: "Network security", comment: "" },
        { name: "VPN/IPSec", level: 3, description: "Secure networking", comment: "" },
        { name: "Email (SPF/DKIM)", level: 3, description: "Email authentication", comment: "" },
        { name: "Storage/SAN", level: 3, description: "Storage area networks", comment: "" },
        { name: "Backup/DR", level: 3, description: "Disaster recovery", comment: "" }
      ]
    },
    {
      name: "Automation & DevOps",
      icon: <Settings size={20} />,
      skills: [
        { name: "Terraform", level: 3.5, description: "Infrastructure as code", comment: "Love it" },
        { name: "Ansible", level: 3.5, description: "Configuration management", comment: "" },
        { name: "Jenkins", level: 3, description: "CI/CD automation", comment: "" },
        { name: "GitLab CI", level: 3, description: "Integrated CI/CD", comment: "" },
        { name: "GitHub Actions", level: 3, description: "Workflow automation", comment: "" },
        { name: "ArgoCD", level: 3, description: "GitOps for Kubernetes", comment: "" },
        { name: "Puppet", level: 2.5, description: "Config management", comment: "Prefer Ansible" },
        { name: "Chef", level: 2.5, description: "Config management", comment: "" },
        { name: "Git", level: 3.5, description: "Version control", comment: "" }
      ]
    },
    {
      name: "Monitoring & Observability",
      icon: <Monitor size={20} />,
      skills: [
        { name: "Prometheus", level: 3, description: "Metrics collection", comment: "" },
        { name: "Grafana", level: 3, description: "Visualization platform", comment: "" },
        { name: "ELK Stack", level: 3, description: "Log aggregation", comment: "" },
        { name: "Nagios", level: 3, description: "Infrastructure monitoring", comment: "Old reliable" },
        { name: "Zabbix", level: 3, description: "Network monitoring", comment: "" },
        { name: "Datadog", level: 3, description: "Cloud monitoring", comment: "" },
        { name: "New Relic", level: 3, description: "Application performance", comment: "" },
        { name: "Splunk", level: 3, description: "Log analysis", comment: "" }
      ]
    },
    {
      name: "Leadership & Business",
      icon: <Users size={20} />,
      skills: [
        { name: "Team Leadership", level: 3.5, description: "Team management", comment: "" },
        { name: "Architecture Design", level: 3.5, description: "System architecture", comment: "" },
        { name: "Mentoring", level: 3.5, description: "Knowledge transfer", comment: "" },
        { name: "Business Process", level: 3.5, description: "Process optimization", comment: "Understanding the why matters" },
        { name: "Stakeholder Mgmt", level: 3, description: "Communication", comment: "" },
        { name: "Agile/Scrum", level: 3, description: "Project methodology", comment: "When it makes sense" },
        { name: "Cost Optimization", level: 3.5, description: "Financial efficiency", comment: "" },
        { name: "Vendor Management", level: 3, description: "Supplier relations", comment: "" },
        { name: "Technical Writing", level: 3, description: "Documentation", comment: "Docs that don't suck" }
      ]
    }
  ]
};

