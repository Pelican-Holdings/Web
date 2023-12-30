import { CompanyValue, Product } from "@/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  // { href: "/contact", key: "contact_us", label: "Contact Us" },
];

export const NAV_LINKS_MOBILE = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Delivery and Transportation",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700066929/Pelican%20Holdings/Our%20Services/truck_n4hrjp.png",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Furnace Oil Heating and Mixing Plants",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700066926/Pelican%20Holdings/Our%20Services/fuel_oxifzp.png",
    variant: "orange",
    description:
      "Our furnace oil plant consists of heating and mixing plant which could produce 100,000 of fuel oil to the market.",
  },
  {
    title: "Decanting Plant",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700067098/Pelican%20Holdings/Our%20Services/oil-refinery_1_soczlp.png",
    variant: "green",
    description:
      "Our plant is supported by two modern decanting plant and we are able to produce bulk 60/70 and 80/100 Bitumen with the total capacity of 100,000 liters per day.",
  },
  {
    title: "Storage Facilities",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700067035/Pelican%20Holdings/Our%20Services/oil-tank_o9volt.png",
    variant: "green",
    description:
      "Our plant consists of bitumen and Emulsion storage tanks and we are able to store more than 400,000 liters of bitumen, cut back bitumen and bituminous emulsion in barrel and liquid form.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["Home", "About Us", "Services", "Products", "Contact Us"],
  },
  {
    title: "Our Services",
    links: [
      "Delivery and Transport",
      "Furnace Oil Heating and Mixing Plants",
      "Decanting Plant",
      "Storage Facilities",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Office", value: "(+94)76 626 9150" },
    { label: "Email", value: "holdingspelican@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "https://res.cloudinary.com/midefulness/image/upload/v1699884233/Pelican%20Holdings/footer/facebook_oyavk1.svg",
    "https://res.cloudinary.com/midefulness/image/upload/v1699884234/Pelican%20Holdings/footer/instagram_laopjl.svg",
    "https://res.cloudinary.com/midefulness/image/upload/v1699884234/Pelican%20Holdings/footer/twitter_drx3d4.svg",
    "https://res.cloudinary.com/midefulness/image/upload/v1699884233/Pelican%20Holdings/footer/youtube_rpek6v.svg",
    "https://res.cloudinary.com/midefulness/image/upload/v1699884235/Pelican%20Holdings/footer/wordpress_s2tpn4.svg",
  ],
};

export const products: Product[] = [
  {
    id: 1,
    name: "Bitumen 80/100",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699718014/Pelican%20Holdings/Bitumen_80_sdrg96.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Bitumen 60/70",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297500/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-19.37.07_rb2wbj.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "CSS 1-(Cationic Slow Setting1)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297498/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.55-2_nmcr9p.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "CRS 1-(Cationic Rapid Setting1)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297500/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-17.32.27_ym67h9.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "CRS 2-(Cationic Rapid Setting2)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297498/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.55-1-1_vxiod6.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "MC 30-(Medium Curing 30)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.57-1_ns3jqs.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "MC 70-(Medium Curing 70)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-05-at-17.21.57_tjoynl.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Fuel Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069235/Pelican%20Holdings/New%20products/Pelican_Holdings_Fuel_Oil_n0gxqu.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    name: "Water Proof Coating",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297502/Pelican%20Holdings/WhatsApp-Image-2020-08-20-at-19.37.09_pyc3nq.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    name: "Cold Pre Mix",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297502/Pelican%20Holdings/WhatsApp-Image-2020-08-21-at-23.51.23_lkkrrw.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    name: "Solid and Hollow Cement Block",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297499/Pelican%20Holdings/WhatsApp-Image-2020-08-06-at-09.19.53-1_mxvr07.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 12,
    name: "Paving Blocks/Interlocks",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069268/Pelican%20Holdings/New%20products/Pelican_Holding_Paving_blocks_irjqyz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const otherProducts: Product[] = [
  {
    id: 1,
    name: "Cinnamon and Spices",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069315/Pelican%20Holdings/New%20products/Pelican_Holdings_Cinnamon_and_spieces_v1pqxu.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Cinnamon Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069219/Pelican%20Holdings/New%20products/Pelican_Holdings_Cinnamon_Oil_vqn7lq.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Coconut Coir Products",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069346/Pelican%20Holdings/New%20products/Pelican_Holdings_Coconut_coir_products_r4uwlf.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Handmade Products",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699718014/Pelican%20Holdings/Bitumen_80_sdrg96.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Ladies Garment Items",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069332/Pelican%20Holdings/New%20products/Pelican_Holdings_Ladies_Garments_uyrssi.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "King Coconut Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699718014/Pelican%20Holdings/Bitumen_80_sdrg96.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Handicraft",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1699718014/Pelican%20Holdings/Bitumen_80_sdrg96.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const companyExternalValues: CompanyValue[] = [
  {
    id: 1,
    name: "SUPERIOR QUALITY GOODS",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700054392/Pelican%20Holdings/values/goods_jqmg1v.png",
    description:
      "We provide you with the finest products, crafted from premium bitumen obtained from refineries in the Middle East. a line of consistently high-quality bitumen-based goods that meet or exceed international market standards.",
  },
  {
    id: 2,
    name: "TECHNICAL LEADERSHIP",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700054255/Pelican%20Holdings/values/goal_grjkeh.png",
    description:
      "We create our items with the most advanced and innovative extraction techniques and cutting-edge technology to make them available to you in the most convenient manner possible.",
  },
  {
    id: 3,
    name: "SERVICE EXCELLENCE",
    icon: "https://res.cloudinary.com/midefulness/image/upload/v1700054138/Pelican%20Holdings/values/service_jb1jhg.png",
    description:
      "Our service spans quality assurance, efficient supply chain management, innovation, and customer-centricity. Providing excellent treatment and paying close attention to our customers and procedures is one of our top priorities.",
  },
];

export const companyValues = [
  "Customer Commitment and Satisfaction",
  "Quality",
  "Teamwork - Synergy",
  "Think out of the box - Innovative and Creative",
  "Integrity",
  "Respect for people",
];

export const companyVision =
  "To become a leading integrated construction solutions and materials provider to the local and global markets";

export const companyMission =
  "Pelican Holdings is committed to provide high quality construction products and services consistently meeting customer’s expectation with on-time delivery." +
  "Pelican Holdings is committed to achieve sustainable business growth and market share by implementing marketing strategies to create values for all stakeholders with continuous innovation." +
  "Pelican Holdings is committed to achieve quality, environmental and safety standards, people empowerment and healthy working environment.";

export const companyPassion =
  "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.";

export const slidesData = [
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297498/Pelican%20Holdings/1035-scaled_gwwqke.jpg",
    title: "We are Since 2013",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
  {
    imageUrl:
      // "https://res.cloudinary.com/midefulness/image/upload/v1699723656/Pelican%20Holdings/4997_zzmlnr.jpg",
      "https://res.cloudinary.com/midefulness/image/upload/v1699297505/Pelican%20Holdings/1_xprxhd.jpg",
    title: "OUR PASSION TO DELIVER QUALITY PRODUCTS...",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
  {
    imageUrl:
      // "https://res.cloudinary.com/midefulness/image/upload/v1699799048/Pelican%20Holdings/construction-workers-hardhats-plan-skyscraper-using-blueprint-teamwork-generated-by-ai_ojum9x.jpg",
      "https://res.cloudinary.com/midefulness/image/upload/v1699297462/Pelican%20Holdings/2_x8nxso.jpg",
    title: "Since 2013",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
  {
    imageUrl:
      // "https://res.cloudinary.com/midefulness/image/upload/v1699297505/Pelican%20Holdings/1_xprxhd.jpg",
      "https://res.cloudinary.com/midefulness/image/upload/v1699297461/Pelican%20Holdings/1_c2unoe.jpg",
    title: "OUR PASSION TO DELIVER QUALITY PRODUCTS...",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
];

export const slidesCardData = [
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297484/Pelican%20Holdings/7-scaled_wxgdue.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297490/Pelican%20Holdings/IMG_20200829_092654-e1598722337701_wqbqnx.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297482/Pelican%20Holdings/IMG_20200829_092436_qx5nyw.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297478/Pelican%20Holdings/IMG_20200829_091958_vbn7yk.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297467/Pelican%20Holdings/2-scaled_rsuamg.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297467/Pelican%20Holdings/4_ilnwj6.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297467/Pelican%20Holdings/3-scaled_chzey4.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/midefulness/image/upload/v1699297461/Pelican%20Holdings/1_c2unoe.jpg",
  },
];
