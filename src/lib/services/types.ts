export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  imageAlt: string;
  overview: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  ctaHeading: string;
  ctaBody: string;
};
