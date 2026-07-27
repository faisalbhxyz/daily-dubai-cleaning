export type Dictionary = {
  meta: {
    tagline: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterDescription: string;
    keywords: string[];
  };
  nav: { href: string; label: string }[];
  header: {
    whatsappNow: string;
    chatWhatsApp: string;
    callAria: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    mobileNav: string;
    showServices: string;
    hideServices: string;
  };
  language: {
    switchTo: string;
    en: string;
    ar: string;
  };
  hero: {
    title: string;
    lead: string;
    whatsappUs: string;
    imageAlt: string;
    traits: string[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    checks: string[];
    cta: string;
    imageAlt: string;
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    included: string;
    more: string;
    whatsappUs: string;
    items: {
      title: string;
      description: string;
      items: string[];
    }[];
  };
  quote: {
    eyebrow: string;
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    sqft: string;
    sqftPlaceholder: string;
    service: string;
    select: string;
    serviceOptions: string[];
    consent: string;
    submit: string;
    success: string;
    guaranteeTitle: string;
    guaranteeBody: string;
    imageAlt: string;
    whatsappMessage: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    ctaTitle: string;
    ctaBody: string;
    items: { question: string; answer: string }[];
  };
  areas: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    viewAll: string;
    readArticle: string;
    home: string;
    blogLabel: string;
    quickAnswer: string;
    faqTitle: string;
    bookNow: string;
    freeQuote: string;
    indexTitle: string;
    indexLead: string;
    indexMetaTitle: string;
    indexMetaDescription: string;
  };
  footer: {
    goal: string;
    whatsappUs: string;
    newsletter: string;
    email: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribed: string;
    slogan: string;
    quickLinks: string;
    contactInfo: string;
    workingHours: string;
    everyDay: string;
    open24Hours: string;
    rights: string;
    footerNav: string;
  };
  sticky: {
    callNow: string;
    whatsappNow: string;
    quickContact: string;
  };
  floating: {
    call: string;
    chat: string;
  };
};
