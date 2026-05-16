import type { LucideIcon } from "lucide-react";

import {
    // Home,
    Landmark,
    UserRound,
    FolderKanban,
    Newspaper,
    Images,
    Mail,
    MessageSquare,
    // ShieldCheck,
    Megaphone,
    Building2,
} from "lucide-react";

export type NavChild = {
    label: string;
    description?: string;
    href?: string;
    icon?: LucideIcon;
};

export type NavItem = {
    label: string;
    href?: string;
    children?: NavChild[];
    featured?: {
        title: string;
        description: string;
        href: string;
    };
};

export const navConfig: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },

    {
        label: "About District",
        children: [
            {
                label: "District Overview",
                description: "Learn about District #2 Gbarpolu County",
                href: "/about",
                icon: Landmark,
            },
            {
                label: "Representative Profile",
                description: "Meet the district representative and leadership",
                href: "/representative",
                icon: UserRound,
            },
            {
                label: "Office Updates",
                description: "Latest updates from the representative office",
                href: "/updates",
                icon: Megaphone,
            },
        ],

        featured: {
            title: "About the Office",
            description:
                "Official information about the Representative Office of District #2 Gbarpolu County.",
            href: "/about",
        },
    },

    {
        label: "Projects & Development",
        children: [
            {
                label: "Community Projects",
                description: "Track ongoing district development projects",
                href: "/projects",
                icon: FolderKanban,
            },
            {
                label: "Infrastructure Updates",
                description: "Roads, schools, healthcare, and public works",
                href: "/development",
                icon: Building2,
            },
        ],

        featured: {
            title: "Development Programs",
            description:
                "Explore initiatives improving communities across the district.",
            href: "/projects",
        },
    },

    {
        label: "Media & News",
        children: [
            {
                label: "News & Announcements",
                description: "Official district news and announcements",
                href: "/news",
                icon: Newspaper,
            },
            {
                label: "Photo & Video Gallery",
                description: "Events, activities, and district programs",
                href: "/gallery",
                icon: Images,
            },
        ],

        featured: {
            title: "District Media Center",
            description:
                "Stay updated with news, media, and public announcements.",
            href: "/news",
        },
    },

    {
        label: "Citizen Services",
        children: [
            {
                label: "Contact Office",
                description: "Reach out to the representative office",
                href: "/contact",
                icon: Mail,
            },
            {
                label: "Citizen Feedback",
                description: "Submit feedback, requests, or concerns",
                href: "/feedback",
                icon: MessageSquare,
            },
        ],

        featured: {
            title: "Community Engagement",
            description:
                "Connect with the office and share your voice with district leadership.",
            href: "/feedback",
        },
    },

    // {
    //     label: "Admin",
    //     href: "/admin",
    // },
];

