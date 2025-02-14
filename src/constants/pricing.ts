export const PLANS = [
    {
        name: "Starter",
        info: "For individuals & small teams",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Basic workflow automation" },
            { text: "Up to 100 AI actions/month", limit: "100 actions" },
            { text: "3 platform integrations" },
            { text: "Community support", tooltip: "Discord community access" },
            { text: "Basic AI models", tooltip: "GPT-3.5 level automation" },
            { text: "Email support", tooltip: "48hr response time" },
        ],
        btn: {
            text: "Start Automating",
            href: "/auth/sign-up?plan=starter",
            variant: "default",
        }
    },
    {
        name: "Professional",
        info: "For growing businesses",
        price: {
            monthly: 99,
            yearly: Math.round(99 * 12 * (1 - 0.15)), // 15% discount
        },
        features: [
            { text: "Advanced workflow builder" },
            { text: "1,000 AI actions/month", limit: "1K actions" },
            { text: "10 platform integrations" },
            { text: "Priority support", tooltip: "24/7 chat support" },
            { text: "Advanced AI models", tooltip: "GPT-4 & Claude-2 access" },
            { text: "Custom triggers", tooltip: "Create custom automation rules" },
            { text: "Team collaboration", tooltip: "Up to 5 team members" },
        ],
        btn: {
            text: "Boost Productivity",
            href: "/auth/sign-up?plan=professional",
            variant: "primary",
        }
    },
    {
        name: "Enterprise",
        info: "For large organizations",
        price: {
            monthly: 499,
            yearly: Math.round(499 * 12 * (1 - 0.20)), // 20% discount
        },
        features: [
            { text: "Unlimited automation" },
            { text: "Custom AI model training" },
            { text: "Unlimited integrations" },
            { text: "Dedicated support", tooltip: "24/7 priority support" },
            { text: "SLA guarantees", tooltip: "99.9% uptime" },
            { text: "Advanced analytics", tooltip: "Real-time workflow insights" },
            { text: "Enterprise security", tooltip: "SOC 2 & GDPR compliance" },
        ],
        btn: {
            text: "Contact Sales",
            href: "/enterprise-contact",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Multi-platform automation",
        tooltip: "Connect all your business apps",
    },
    {
        text: "AI Action Credits",
        tooltip: "Number of AI-powered automations per month",
    },
    {
        text: "Smart Integrations",
        tooltip: "Pre-built connectors for popular services",
    },
    {
        text: "Real-time Monitoring",
        tooltip: "Live tracking of automation performance",
    },
    {
        text: "Team Collaboration",
        tooltip: "Role-based access control",
    },
    {
        text: "Custom AI Models",
        tooltip: "Train models on your business data",
    },
    {
        text: "Compliance Certifications",
        tooltip: "Enterprise-grade security standards",
    },
];

export const WORKSPACE_LIMIT = 5; // Number of team members in base plan