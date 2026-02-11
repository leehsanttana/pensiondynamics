export const siteConfig = {
  name: "Landing Page Boilerplate",
  description:
    "Projeto de Boilerplate de Landing Page com Next.js 16, TypeScript, Tailwind CSS e Shadcn UI.",
  url: "https://acme.com",
  ogImage: "https://acme.com/og.png",

  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ],

  cta: {
    label: "Comece agora",
    href: "#cta",
  },

  footerLinks: [
    {
      title: "Produto",
      links: [
        { label: "Features", href: "#features" },
        { label: "Preços", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Carreiras", href: "#careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidade", href: "#privacy" },
        { label: "Termos", href: "#terms" },
      ],
    },
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
