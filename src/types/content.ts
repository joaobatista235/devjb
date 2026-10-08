export type IconName =
  | "arrow-up-right" | "arrow-right" | "check" | "plus" | "minus"
  | "monitor-smartphone" | "layout-grid" | "images" | "message-circle"
  | "share-2" | "map-pin" | "search" | "messages-square"
  | "sliders-horizontal" | "smartphone" | "zap" | "sparkles";

export type Link = { label: string; href: string };

export type Intro = { eyebrow: string; title: string; description: string };

export type FeatureItem = { icon: IconName; title: string; description: string };
export type ServiceItem = FeatureItem & { preview?: "responsive" };

export type HeroContent = Intro & {
  secondaryCta: Link;
  tagline: string;
  highlights: string[];
};

export type ValueContent = Omit<Intro, "description"> & {
  context: string;
  segmentsLabel: string;
  segments: string[];
};

export type ServicesContent = Intro & { primary: ServiceItem[]; reach: ServiceItem[] };

export type StepItem = { title: string; description: string };
export type ProcessContent = Intro & { steps: StepItem[] };

export type ConceptTheme = {
  stage: string;
  window: string;
  chrome: string;
  panel: string;
  accent: string;
  shape: { colors: [string, string, string]; width: string; height: string };
};

export type ConceptContent = {
  caption: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  theme: ConceptTheme;
};

export type ProjectsContent = Intro & {
  status: string;
  mockup: { label: string; menu: string[]; cta: string };
  concepts: ConceptContent[];
};

export type DifferentialsContent = Intro & { items: FeatureItem[] };
export type InvestmentContent = Intro;

export type FaqItem = { question: string; answer: string };
export type FaqContent = Intro & { items: FaqItem[] };

export type FinalCtaContent = Intro;
export type FooterContent = { copyright: string; signature: string };

export type SiteContent = {
  brand: string;
  nav: Link[];
  cta: Link;
  hero: HeroContent;
  value: ValueContent;
  services: ServicesContent;
  process: ProcessContent;
  projects: ProjectsContent;
  differentials: DifferentialsContent;
  investment: InvestmentContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
};
