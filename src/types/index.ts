export type Language = 'en' | 'pl' | 'ru' | 'uk';

export interface LocaleContent {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    testimonials: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

