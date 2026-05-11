export type Persona = {
  slug: string;
  who: string;   // e.g. "Families"
  what: string;  // e.g. "Vertical Bike Racks"

  lp001: {
    bannerText: string;
    heroLabel: string;
    h1Line1: string;
    h1Emphasis: string;
    h1Line2: string;
    subheadline: string;
  };

  lp002: {
    authorName: string;
    authorDesc: string;
    h1Main: string;
    h1Emphasis: string;
    h1Suffix: string;
    summary: string;
  };

  utmCampaign: string;
};

export const personas: Persona[] = [
  {
    slug: 'families',
    who: 'Families',
    what: 'Vertical Bike Racks',
    utmCampaign: 'families',

    lp001: {
      bannerText: "The Bike Rack Buyer's Guide — Australian Review · 2026",
      heroLabel: "Buyer's Guide · Vertical Bike Racks · Australia",
      h1Line1: 'Vertical Bike Racks in Australia:',
      h1Emphasis: 'A Practical Guide',
      h1Line2: 'for Families Transporting Multiple Bikes',
      subheadline:
        'We compared six of the most popular vertical bike racks available in Australia — including price, weight, capacity, warranty and usability — so you can pick the right one without the guesswork.',
    },

    lp002: {
      authorName: 'Sarah M., Brisbane Mum of Three',
      authorDesc: 'Published · Mid-Season Sale, 2025',
      h1Main: '7 Reasons Why Vertical Bike Racks Are',
      h1Emphasis: "Every Family's",
      h1Suffix: 'Secret Weapon for Weekend Rides',
      summary:
        "We discovered why families across Australia are switching from platform racks — and why once you go vertical, you'll never go back. After three years of wrestling with a roof rack and losing car boots to platform racks, we found the solution that changed our weekends completely.",
    },
  },

  {
    slug: 'mountain-bikers',
    who: 'Mountain Bikers',
    what: 'Vertical Bike Racks',
    utmCampaign: 'mountain-bikers',

    lp001: {
      bannerText: "The MTB Buyer's Guide — Australian Review · 2026",
      heroLabel: "Buyer's Guide · Vertical Bike Racks · Australia",
      h1Line1: 'Vertical Bike Racks in Australia:',
      h1Emphasis: 'The MTB Hauler',
      h1Line2: 'Built for Serious Trail Riders',
      subheadline: 'We tested six vertical racks with loaded trail rigs...',
    },

    lp002: {
      authorName: 'Jake T., Toowoomba Trail Rider',
      authorDesc: 'Published · Mid-Season Sale, 2025',
      h1Main: '7 Reasons Vertical Bike Racks Are',
      h1Emphasis: "Every MTB Rider's",
      h1Suffix: 'Secret Weapon for Trail Days',
      summary: 'Why serious mountain bikers are ditching roof racks...',
    },
  },

  // Add new personas below — copy a block above and adjust the strings.
];

export function getPersona(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}
