import {
  Building2,
  CalendarHeart,
  Camera,
  Car,
  ChefHat,
  Clock,
  Flower2,
  GraduationCap,
  HeartHandshake,
  Home,
  Lamp,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  Video,
  Zap
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type GalleryCategory =
  | 'Exterior'
  | 'Entrance'
  | 'Main Hall'
  | 'Stage'
  | 'Dining'
  | 'Rooms'
  | 'Parking'
  | 'Lighting'
  | 'Other';

export type VenueImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
  showInGallery?: boolean;
  section?: 'hero' | 'about' | 'functions' | 'dining' | 'rooms';
};

export type GoogleReview = {
  reviewerName: string;
  starRating: number | null;
  excerpt: string;
  attribution: 'Google Review';
  isPlaceholder?: boolean;
};

export type NearbyLandmark = {
  name: string;
  approximateDistance: string | null;
  approximateTravelTime: string | null;
  icon: LucideIcon;
  verificationNote?: string;
};

const googleMapsUrl = 'https://maps.app.goo.gl/V9XTVBspNWg9tjUS9?g_st=ac';

export const venue = {
  name: 'Kashi Vishwanatha Kalyana Mantapa',
  tagline: 'A Traditional Wedding Venue Next to Kashi Vishwanatha Temple',
  addressShort: '26/1, NITTE Meenakshi College Rd, BSF Campus, Gantiganahalli, Karnataka 560119',
  homeLocationNote: '5mins from NITTE and Manipal Academy; 20mins from Yelahanka New Town.',
  addressLines: [
    '26/1, NITTE Meenakshi College Rd',
    'BSF Campus',
    'Gantiganahalli',
    'Karnataka 560119'
  ],
  temple: 'Kashi Vishwanatha Temple',
  phoneDisplay: '079755 11055',
  phoneHref: 'tel:07975511055',
  whatsappUrl:
    'https://wa.me/917975511055?text=Namaste%2C%20I%20would%20like%20to%20enquire%20about%20Kashi%20Vishwanatha%20Kalyana%20Mantapa.%0A%0APreferred%20date%3A%0AFunction%3A%0AExpected%20number%20of%20guests%3A%0A%0APlease%20let%20me%20know%20about%20availability%20and%20booking%20details.%0A%0AThank%20you.',
  mapsUrl: googleMapsUrl,
  googleRating: {
    rating: 4.4,
    maxRating: 5,
    reviewCount: 253,
    reviewCountAsOf: 'September 2026',
    reviewCountDisplay: '250+',
    listingUrl: googleMapsUrl
  },
  reviews: [
    {
      reviewerName: 'Doctor seena',
      starRating: 5,
      excerpt: 'Very good place for all type of functions like marriage etc with 250 people for dinner in one batch and big hall.',
      attribution: 'Google Review'
    },
    {
      reviewerName: 'Harshan kumar',
      starRating: 5,
      excerpt: "It's good function hall, best and clean. Lake view in the front makes it more attractive.",
      attribution: 'Google Review'
    },
    {
      reviewerName: 'Pappu Sharma',
      starRating: 5,
      excerpt: 'Good place for wedding celebration.',
      attribution: 'Google Review'
    },
    {
      reviewerName: 'Kannan Murali',
      starRating: 4,
      excerpt: 'Good place and no issue for parking.',
      attribution: 'Google Review'
    }
  ] satisfies GoogleReview[],
  nearbyLandmarks: [
    {
      name: 'NITTE Meenakshi Institute of Technology',
      approximateDistance: 'very nearby',
      approximateTravelTime: '5mins',
      icon: GraduationCap,
      verificationNote: 'Very near to the venue on the Nitte Meenakshi College Road / Gantiganahalli corridor.'
    },
    {
      name: 'Manipal Academy of Higher Education',
      approximateDistance: 'very nearby',
      approximateTravelTime: '5mins',
      icon: GraduationCap,
      verificationNote: 'Very near to the venue; useful for guests coming from the NITTE / MAHE area.'
    },
    {
      name: 'Yelahanka New Town',
      approximateDistance: 'nearby by road',
      approximateTravelTime: '20mins',
      icon: Building2,
      verificationNote: 'Approximate travel time from Yelahanka New Town; Bengaluru traffic can change timing.'
    }
  ] satisfies NearbyLandmark[],
  capacities: {
    mainHall: '750-1,000',
    hallSize: '120 x 75 ft',
    stage: '44 x 18 ft',
    dining: '200-250',
    rooms: '10',
    parking: '300-350'
  },
  pricing: [
    { label: 'Full Day', price: '₹1,50,000', note: 'Timing: 2 PM - 2 PM' },
    { label: 'Half Day', price: '₹1,00,000', note: 'Timing to be confirmed directly with the venue' },
    { label: 'Advance', price: '₹50,000', note: 'Adjusted against the final rental amount' }
  ],
  pricingNotes: [
    'No security deposit.',
    'No GST.',
    'Extra hours are negotiable.',
    'Please call the venue directly to check availability and confirm your booking.'
  ],
  functions: [
    { title: 'Wedding Ceremonies', icon: HeartHandshake },
    { title: 'Engagements', icon: Flower2 },
    { title: 'Receptions', icon: Sparkles },
    { title: 'Naming Ceremonies', icon: CalendarHeart }
  ],
  highlights: [
    { value: '750-1,000', label: 'Guest Capacity', icon: Users },
    { value: '120 x 75 ft', label: 'Main Hall', icon: Home },
    { value: '200-250', label: 'Dining Capacity', icon: Utensils },
    { value: '10', label: 'Guest Rooms', icon: Home },
    { value: '300-350', label: 'Car Parking', icon: Car },
    { value: '100%', label: 'Vegetarian', icon: ChefHat }
  ],
  facilities: [
    { label: '120 x 75 ft main hall', icon: Home },
    { label: '750-1,000 guest capacity', icon: Users },
    { label: '44 x 18 ft stage', icon: Sparkles },
    { label: 'Main hall with fans', icon: Lamp },
    { label: '200-250 dining capacity', icon: Utensils },
    { label: '5 AC rooms', icon: Home },
    { label: '5 Non-AC rooms', icon: Home },
    { label: 'Separate bride room', icon: Flower2 },
    { label: 'Separate groom room', icon: HeartHandshake },
    { label: '300-350 car parking opposite the choultry', icon: Car },
    { label: 'CCTV available', icon: Video },
    { label: 'Generator backup', icon: Zap },
    { label: 'Chairs included', icon: Users },
    { label: 'Tables included', icon: Users },
    { label: 'Utensils provided', icon: Utensils },
    { label: 'Catering can be arranged', icon: ChefHat },
    { label: 'Previous-day access for decoration', icon: Clock },
    { label: 'Building and serial lighting provided', icon: Sparkles }
  ] satisfies Array<{ label: string; icon: LucideIcon }>,
  faqs: [
    {
      question: 'What functions are hosted?',
      answer: 'The venue is intended for traditional family functions including weddings, engagements, receptions and naming ceremonies. For date availability and arrangements, families should call the manager directly.'
    },
    {
      question: 'Is the venue vegetarian?',
      answer: 'Yes. Kashi Vishwanatha Kalyana Mantapa is a 100% vegetarian venue. This is an important part of the venue experience and is clearly followed for functions hosted here.'
    },
    {
      question: 'What is the hall capacity?',
      answer: 'The main hall can accommodate approximately 750-1,000 people, making it suitable for large wedding ceremonies and family gatherings. The final arrangement may depend on decoration, seating layout and function requirements.'
    },
    {
      question: 'How large is the hall?',
      answer: 'The main hall measures 120 x 75 ft. It is a spacious fan-cooled hall designed for wedding and family-function gatherings.'
    },
    {
      question: 'How many people can the dining area accommodate?',
      answer: 'The dining area can accommodate approximately 200-250 people at a time. Families can plan dining batches based on the expected number of guests and the function schedule.'
    },
    {
      question: 'Are rooms available?',
      answer: 'Yes. The venue has 5 AC rooms and 5 Non-AC rooms. Separate bride and groom rooms are also available for the wedding party.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes. Parking for approximately 300-350 cars is available opposite the Kalyana Mantapa. Guests should use the parking area opposite the choultry as guided by the venue team.'
    },
    {
      question: 'Is there a security deposit?',
      answer: 'No security deposit is currently charged. The required advance amount is adjusted against the final rental amount.'
    },
    {
      question: 'What is the advance?',
      answer: 'The advance is ₹50,000. This amount is adjusted against the final rental amount and is not treated as a separate security deposit.'
    },
    {
      question: 'Is GST charged?',
      answer: 'No GST is charged on the venue rental as per the currently confirmed information.'
    },
    {
      question: 'Can decoration be done the previous day?',
      answer: 'Yes. Previous-day access is available for decoration, which helps decorators prepare the hall before the function day.'
    },
    {
      question: 'Can the venue arrange catering?',
      answer: 'Yes. Catering can be arranged by the venue. Customers may discuss dining expectations, guest count and timing directly with the manager.'
    },
    {
      question: 'How do I check availability?',
      answer: 'Please call the venue directly to check availability and confirm your booking. Calling is recommended because the manager also handles offline and walk-in bookings.'
    }
  ],
  icons: { Camera, MapPin, Phone, ShieldCheck }
};

const photoVersion = '20260924-about-realistic-v4';
const photo = (filename: string) =>
  `${import.meta.env.BASE_URL}venue-photos/${filename}?v=${photoVersion}`;

export const venueImages: VenueImage[] = [
  {
    src: photo('temple-entrance-steps.jpg'),
    alt: 'Temple-style entrance steps with Ganesha idol, gold elephant decor and floral trim',
    category: 'Entrance',
    featured: true,
    section: 'hero'
  },
  {
    src: photo('decorated-main-hall-about-realistic.png'),
    alt: 'Decorated main hall at Kashi Vishwanatha Kalyana Mantapa with floral mandap, red aisle and guest seating',
    category: 'Main Hall',
    section: 'about'
  },
  {
    src: photo('hero-exterior-front.jpg'),
    alt: 'Front exterior of Kashi Vishwanatha Kalyana Mantapa with entrance steps, gate and temple-adjacent setting',
    category: 'Exterior',
    showInGallery: false
  },
  {
    src: photo('floral-stage-peacock-sofa.jpg'),
    alt: 'Reception stage with floral backdrop, marble-style panels, gold stands and peacock-design sofa',
    category: 'Stage',
    section: 'functions'
  },
  {
    src: photo('white-floral-reception-stage.jpg'),
    alt: 'White floral wedding reception stage with layered floral arches and warm lighting',
    category: 'Stage',
    section: 'functions'
  },
  {
    src: photo('red-gold-wedding-stage.jpg'),
    alt: 'Red and gold wedding stage backdrop with flower borders and decorative hanging lights',
    category: 'Stage',
    section: 'functions'
  },
  {
    src: photo('traditional-decorated-entry-arch.jpg'),
    alt: 'Traditional decorated entrance arch with pillars, drapes, flowers and greenery',
    category: 'Entrance',
    section: 'functions'
  },
  {
    src: photo('20260914_161744.jpg'),
    alt: 'Dining hall from a wide angle with polished floor, pillars and arranged tables',
    category: 'Dining',
    section: 'dining'
  },
  {
    src: photo('20260914_162520.jpg'),
    alt: 'Guest room with bed, wardrobe, fan and air conditioner',
    category: 'Rooms',
    section: 'rooms'
  },
  {
    src: photo('20260914_162548.jpg'),
    alt: 'Attached bathroom with sink, toilet, shower and water heater',
    category: 'Rooms'
  }
];
export const galleryImages = venueImages.filter((image) => image.showInGallery !== false);

export const getImagesForSection = (section: VenueImage['section']) =>
  venueImages.filter((image) => image.section === section);

export const heroImage = venueImages.find((image) => image.section === 'hero' || image.featured);
