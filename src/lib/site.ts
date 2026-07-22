export const siteConfig = {
  name: "Daily Dubai Cleaning",
  shortName: "Daily Dubai",
  url: "https://dailydubaicleaning.com",
  phone: "+971 52 320 2314",
  phoneHref: "tel:+971523202314",
  whatsapp: "971523202314",
  whatsappHref: "https://wa.me/971523202314",
  email: "info@dailydubaicleaning.com",
  address: "Dubai, United Arab Emirates",
  rating: "4.8",
  reviewCount: "480",
  hours: {
    everyday: "Open 24 Hours",
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
} as const;

/** English titles used for stable #service-* anchors across locales */
export const services = [
  {
    title: "Home Cleaning Services",
    image: "/images/home-vacuum.jpeg",
  },
  {
    title: "Office Cleaning Services",
    image: "/images/office-clean.jpeg",
  },
  {
    title: "Deep Cleaning Services",
    image: "/images/floor-scrub.jpeg",
  },
  {
    title: "Move In / Move Out Cleaning",
    image: "/images/floor-polish.jpeg",
  },
  {
    title: "Sofa & Upholstery Cleaning",
    image: "/images/sofa-clean.jpeg",
  },
  {
    title: "Window Cleaning Services",
    image: "/images/window-clean.jpeg",
  },
  {
    title: "Full Area Cleaning",
    image: "/images/carpet-clean.jpeg",
  },
  {
    title: "Paint Touch-Up",
    image: "/images/cleaner-hero.jpeg",
  },
  {
    title: "Full Home Maintenance",
    image: "/images/window-clean.jpeg",
  },
  {
    title: "CCTV Camera Home Servicing",
    image: "/images/floor-polish.jpeg",
  },
] as const;

export const serviceImages = services.map((service) => service.image);

export const blogImages = [
  "/images/home-vacuum.jpeg",
  "/images/cleaner-hero.jpeg",
  "/images/sofa-clean.jpeg",
] as const;

export const serviceAreas = [
  "Dubai Marina",
  "JBR",
  "Downtown Dubai",
  "Business Bay",
  "Jumeirah",
  "Arabian Ranches",
  "Palm Jumeirah",
  "Al Barsha",
  "Deira",
  "Bur Dubai",
  "DSO",
  "The Villa",
  "Dubai Hill",
  "JVC",
  "JLD",
  "Mira",
  "Town Square",
  "DAMAC Hills",
] as const;

export function serviceSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function serviceHref(title: string) {
  return `#service-${serviceSlug(title)}`;
}
