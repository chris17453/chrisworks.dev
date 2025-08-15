import { Server, Award, Code, Users, Cloud, Database, Network, Settings, Monitor, Layers } from 'lucide-react';

export const skills_data = {
  intro_blurb: "I've been around technology for 25 years. I've worked with a lot of different tools and technologies. I may not use all of these daily, but I've used them enough to be productive. I'm not claiming to be an expert in everything - just someone who can figure things out and get the job done.",
  
  scale_description: "1 = I've seen it, 2 = Tourist, 3 = Need a Refresher, 4 = Can use without a Refresher, 5 = Daily use",
  
  categories: [
    {
      name: "Languages & Development",
      icon: <Code size={20} />,
      skills: [
        { name: "Python", level: 5, description: "General purpose programming", comment: "Daily driver for automation" },
        { name: "C", level: 4, description: "Systems programming language", comment: "Where it all started for me" },
        { name: "C++", level: 4, description: "Object-oriented systems language", comment: "" },
        { name: "C#", level: 3, description: ".NET framework language", comment: "" },
        { name: "PHP", level: 4, description: "Web development language", comment: "Built many businesses with this" },
        { name: "JavaScript", level: 5, description: "Frontend and backend scripting", comment: "" },
        { name: "TypeScript", level: 5, description: "Typed JavaScript", comment: "Prefer it for larger projects" },
        { name: "COBOL", level: 2, description: "Legacy business language", comment: "Yes, really - still running the world" },
        { name: "Bash/Shell", level: 5, description: "Unix shell scripting", comment: "" },
        { name: "PowerShell", level: 2, description: "Windows automation", comment: "" }
      ]
    },
    {
      name: "API & Integration",
      icon: <Layers size={20} />,
      skills: [
        { name: "REST APIs", level: 5, description: "RESTful web services", comment: "Built and consumed hundreds" },
        { name: "FastAPI", level: 4, description: "Python web framework", comment: "" },
        { name: "Flask", level: 5, description: "Python micro framework", comment: "" },
        { name: "SOAP/XML", level: 3, description: "Enterprise web services", comment: "" },
        { name: "GraphQL", level: 3, description: "Query language for APIs", comment: "Not my favorite" },
        { name: "WebSockets", level: 3, description: "Real-time bidirectional communication", comment: "" },
        { name: "API Gateway", level: 5, description: "API management layer", comment: "" },
        { name: "Message Queues", level: 3, description: "Async message passing", comment: "" }
      ]
    },
    {
      name: "Databases & Data",
      icon: <Database size={20} />,
      skills: [
        { name: "PostgreSQL", level: 5, description: "Advanced relational database", comment: "Go-to choice" },
        { name: "MySQL/MariaDB", level: 5, description: "Popular relational database", comment: "" },
        { name: "MSSQL", level: 5, description: "Microsoft SQL Server", comment: "" },
        { name: "MongoDB", level: 3, description: "Document database", comment: "" },
        { name: "Redis", level: 3, description: "In-memory data store", comment: "" },
        { name: "ETL Pipelines", level: 4, description: "Data extraction and loading", comment: "" },
        { name: "SQL Writing", level: 5, description: "Query language", comment: "" },
        { name: "Database Design", level: 5, description: "Schema architecture", comment: "" }
      ]
    },
    {
      name: "Cloud & Platforms",
      icon: <Cloud size={20} />,
      skills: [
        { name: "AWS", level: 4, description: "Amazon Web Services", comment: "" },
        { name: "GCP", level: 3, description: "Google Cloud Platform", comment: "" },
        { name: "Azure", level: 3, description: "Microsoft Cloud", comment: "When clients require it" },
        { name: "OpenShift", level: 4, description: "Enterprise Kubernetes platform", comment: "" },
        { name: "Kubernetes", level: 5, description: "Container orchestration", comment: "" },
        { name: "EKS", level: 4, description: "AWS managed Kubernetes", comment: "" },
        { name: "GKE", level: 4, description: "Google managed Kubernetes", comment: "" },
        { name: "ECS", level: 4, description: "AWS container service", comment: "" },
        { name: "Docker", level: 5, description: "Container platform", comment: "" }
      ]
    },
    {
      name: "Virtualization",
      icon: <Server size={20} />,
      skills: [
        { name: "VMware vSphere", level: 5, description: "Enterprise virtualization", comment: "" },
        { name: "KVM", level: 4, description: "Kernel-based VM", comment: "Open source preferred" },
        { name: "Xen", level: 4, description: "Hypervisor", comment: "" },
        { name: "QEMU", level: 4, description: "Machine emulator", comment: "" },
        { name: "Proxmox", level: 3, description: "Virtualization management", comment: "" },
        { name: "Hyper-V", level: 3, description: "Windows virtualization", comment: "" },
        { name: "OpenStack", level: 3, description: "Cloud infrastructure", comment: "Complex beast" }
      ]
    },
    {
      name: "Infrastructure & Networking",
      icon: <Network size={20} />,
      skills: [
        { name: "Linux Admin", level: 5, description: "System administration", comment: "" },
        { name: "Windows Server", level: 3, description: "Microsoft server OS", comment: "" },
        { name: "TCP/IP", level: .5, description: "Network protocols", comment: "" },
        { name: "DNS/BIND", level: 5, description: "Domain name system", comment: "" },
        { name: "Load Balancers", level: 5, description: "Traffic distribution", comment: "" },
        { name: "Firewalls", level: 5, description: "Network security", comment: "" },
        { name: "VPN/IPSec", level: 5, description: "Secure networking", comment: "" },
        { name: "Email (SPF/DKIM)", level: 4, description: "Email authentication", comment: "" },
        { name: "Storage/SAN", level: 5, description: "Storage area networks", comment: "" },
        { name: "Backup/DR", level: 5, description: "Disaster recovery", comment: "" }
      ]
    },
    {
      name: "Automation & DevOps",
      icon: <Settings size={20} />,
      skills: [
        { name: "Terraform", level: 4, description: "Infrastructure as code", comment: "Love it" },
        { name: "Ansible", level: 4, description: "Configuration management", comment: "" },
        { name: "Jenkins", level: 3, description: "CI/CD automation", comment: "" },
        { name: "GitLab CI", level: 3, description: "Integrated CI/CD", comment: "" },
        { name: "GitHub Actions", level: 3, description: "Workflow automation", comment: "" },
        { name: "ArgoCD", level: 3, description: "GitOps for Kubernetes", comment: "" },
        { name: "Puppet", level: 3, description: "Config management", comment: "Prefer Ansible" },
        { name: "Chef", level: 3, description: "Config management", comment: "" },
        { name: "Git", level: 5, description: "Version control", comment: "" }
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
        { name: "Datadog", level: 4, description: "Cloud monitoring", comment: "" },
        { name: "New Relic", level: 4, description: "Application performance", comment: "" },
        { name: "Splunk", level: 4, description: "Log analysis", comment: "" }
      ]
    },
    {
      name: "Leadership & Business",
      icon: <Users size={20} />,
      skills: [
        { name: "Team Leadership", level: 5, description: "Team management", comment: "" },
        { name: "Architecture Design", level: 5, description: "System architecture", comment: "" },
        { name: "Mentoring", level: 4, description: "Knowledge transfer", comment: "" },
        { name: "Business Process", level: 5, description: "Process optimization", comment: "Understanding the why matters" },
        { name: "Stakeholder Mgmt", level: 4, description: "Communication", comment: "" },
        { name: "Agile/Scrum", level: 4, description: "Project methodology", comment: "When it makes sense" },
        { name: "Cost Optimization", level: 5, description: "Financial efficiency", comment: "" },
        { name: "Vendor Management", level: 4, description: "Supplier relations", comment: "" },
        { name: "Technical Writing", level: 4, description: "Documentation", comment: "Docs that don't suck" }
      ]
    }
  ]
};



