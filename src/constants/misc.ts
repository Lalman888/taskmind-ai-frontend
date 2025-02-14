// import { BarChart3Icon, BrainCircuit, FolderOpenIcon, Sparkl } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
      icon: "BrainCircuit",
      title: "Workflow Analysis",
      description: "AI scans your existing processes to identify automation opportunities and patterns"
    },
    {
      icon: "Sparkles",
      title: "AI Optimization",
      description: "Machine learning models suggest predictive adjustments and auto-generate workflows"
    },
    {
      icon: "Infinity",
      title: "Continuous Adaptation",
      description: "Real-time monitoring and self-improving algorithms optimize performance daily"
    }
  ] as const;

export const FEATURES = [
    {
        title: "Link shortening",
        description: "Create short links that are easy to remember and share.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Sarah Chen",
        title: "CTO at TechFlow",
        username: "@sarah_cto",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        review: "TaskMind AI revolutionized our customer support - automated 80% of routine queries while maintaining 98% satisfaction scores. The AI's ability to understand context is unmatched."
    },
    {
        name: "Raj Patel",
        title: "Operations Director",
        username: "@raj_ops",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        review: "From CRM updates to Slack notifications, our workflows now run autonomously. Saved 120+ hours/month in manual work. The predictive analytics module is particularly impressive."
    },
    {
        name: "Emily Torres",
        title: "Startup Founder",
        username: "@emily_ai",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        rating: 4,
        review: "Incredible ROI - automated 50+ processes in first month. Wish the learning curve was gentler, but support team helped us through implementation."
    },
    {
        name: "Michael Ng",
        title: "Enterprise Architect",
        username: "@mike_arch",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        review: "Finally an AI solution that truly integrates with our legacy systems. The adaptive workflow engine eliminated 90% of our manual data entry."
    },
    {
        name: "Lisa Woodward",
        title: "COO at HealthBridge",
        username: "@lisa_health",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 5,
        review: "Compliance automation transformed our audit process - reduced preparation time from 3 weeks to 3 days. GDPR-ready features gave our legal team peace of mind."
    },
    {
        name: "David Kim",
        title: "Sales VP",
        username: "@david_sales",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 4,
        review: "AI-powered lead scoring boosted conversions by 40%. The Salesforce integration needs more customization options, but overall exceptional value."
    },
    {
        name: "Priya Sharma",
        title: "E-commerce Director",
        username: "@priya_ecom",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        review: "Automated our entire order-to-delivery process. The AI's ability to handle exceptions without human intervention is game-changing."
    },
    {
        name: "James Cole",
        title: "IT Manager",
        username: "@james_it",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        review: "Implemented across 14 departments with zero downtime. The real-time process optimization feature alone paid for the platform in 3 months."
    },
    {
        name: "Maria Gonzalez",
        title: "Customer Success Lead",
        username: "@maria_cs",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        rating: 4,
        review: "Transformed our ticket resolution times. Would love more granular reporting, but the AI-driven suggestions are incredibly accurate."
    },
] as const;