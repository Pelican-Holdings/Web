import { Product } from "@/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about_us', label: 'About Us' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/product', key: 'product ', label: 'Product ' },
  { href: '/contact', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'Home',
      'About Us',
      'Services',
      'Products',
      'Contact Us',
    ],
  },
  {
    title: 'Our Services',
    links: ['Decanting Plant', 'Storage Facilities', 'Delivery and Transport','1','2'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Office', value: '(+94)76 626 9150' },
    { label: 'Email', value: 'holdingspelican@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Bitumen 80/100',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699718014/Pelican%20Holdings/Bitumen_80_sdrg96.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Bitumen 60/70',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297500/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-19.37.07_rb2wbj.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    name: 'CSS 1-(Cationic Slow Setting1)',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297498/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.55-2_nmcr9p.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    name: 'CRS 1-(Cationic Rapid Setting1)',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297500/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-17.32.27_ym67h9.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    name: 'CRS 2-(Cationic Rapid Setting2)',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297498/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.55-1-1_vxiod6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 6,
    name: 'MC 30-(Medium Curing 30)',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.57-1_ns3jqs.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 7,
    name: 'MC 70-(Medium Curing 70)',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.57_tjoynl.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 8,
    name: 'Water Proof Coating',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297502/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-19.37.09_pyc3nq.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 9,
    name: 'Cold Pre Mix',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297502/Pelican%20Holdings/WhatsApp-Image-2020-08-21-at-23.51.23_lkkrrw.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 10,
    name: 'Solid and Hollow Cement Block',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-06-at-09.19.53-1_mxvr07.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 11,
    name: 'Paving Blocks/Interlocks',
    price: 19.99,
    image: 'https://res.cloudinary.com/midefulness/image/upload/v1699297501/Pelican%20Holdings/WhatsApp-Image-2020-08-06-at-09.19.54_ut0ktn.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];