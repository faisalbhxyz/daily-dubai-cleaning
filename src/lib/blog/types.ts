export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  /** Short direct answer for AEO / featured snippets */
  directAnswer: string;
  faq: BlogFaq[];
  sections: BlogSection[];
  ctaHeading: string;
  ctaBody: string;
  featured?: boolean;
};
