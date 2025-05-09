import { CompanyValue, Product } from "@/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/tourism", key: "tourism", label: "Tourism" }
  // { href: "/contact", key: "contact_us", label: "Contact Us" },
];

export const NAV_LINKS_MOBILE = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
  { href: "/tourism", key: "tourism", label: "Tourism" }
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
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746654756/delivery_fzancx.png",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Furnace Oil Heating and Mixing Plants",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746654764/barrel_w7265a.png",
    variant: "orange",
    description:
      "Our furnace oil plant consists of heating and mixing plant which could produce 100,000 of fuel oil to the market.",
  },
  {
    title: "Decanting Plant",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746654906/oil_nkzss9.png",
    variant: "green",
    description:
      "Our plant is supported by two modern decanting plant and we are able to produce bulk 60/70 and 80/100 Bitumen with the total capacity of 100,000 liters per day.",
  },
  {
    title: "Storage Facilities",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746654955/oil-tank_xtq5lv.png",
    variant: "green",
    description:
      "Our plant consists of bitumen and Emulsion storage tanks and we are able to store more than 400,000 liters of bitumen, cut back bitumen and bituminous emulsion in barrel and liquid form.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { label: "Home", url: "/" },
      { label: "About Us", url: "/about" },
      { label: "Services", url: "/services" },
      { label: "Products", url: "/products" },
      { label: "Tourism", url: "/tourism" },
      { label: "Contact Us", url: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Bitumen Emulsions", url: "/services" },
      { label: "Logistics and Transportation", url: "/services" },
      { label: "Furnace Oil Heating and Mixing Plants", url: "/services" },
      { label: "Decanting Plant", url: "/services" },
      { label: "Storage Facilities", url: "/services" },
      { label: "Amano and Roofing Solutions", url: "/services" },
      { label: "Tourism", url: "/services" },
    ],
  }
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
    {
      icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646570/facebook_ah51rx.svg",
      url: "https://web.facebook.com/holdingspelican/?_rdc=1&_rdr",
    },
    {
      icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646595/instagram_crshlx.svg",
      url: "https://www.instagram.com",
    },
    {
      icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646623/twitter_rwnrqw.svg",
      url: "https://www.twitter.com",
    },
    {
      icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646629/youtube_hxkszh.svg",
      url: "https://www.youtube.com",
    },
  ],
};

export const fuelProducts: Product[] = [
  {
    id: 1,
    name: "Fuel Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069235/Pelican%20Holdings/New%20products/Pelican_Holdings_Fuel_Oil_n0gxqu.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const products: Product[] = [
  {
    id: 1,
    name: "Bitumen 80/100",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656903/WhatsApp-Image-2020-08-05-at-12.04.16-500x400_inpmlq.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Bitumen 60/70",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746655865/WhatsApp-Image-2020-08-20-at-19.37.07_o7v2au.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "CSS 1-(Cationic Slow Setting1)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656124/WhatsApp-Image-2020-08-05-at-17.21.54-1_qfl5r7.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "CRS 1-(Cationic Rapid Setting1)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656394/WhatsApp-Image-2020-08-20-at-17.32.27-500x400_mmr1pl.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "CRS 2-(Cationic Rapid Setting2)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656524/WhatsApp-Image-2020-08-05-at-17.21.55-1-500x400_rnstbm.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "MC 30-(Medium Curing 30)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656702/WhatsApp-Image-2020-08-05-at-17.21.57-1-500x400_ogdrti.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "MC 70-(Medium Curing 70)",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656728/WhatsApp-Image-2020-08-05-at-17.21.57-500x400_zbakud.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    name: "Water Proof Coating",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746656601/Pelican_Holdings_Water_proof_coating-min_cdfevg.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    name: "Cold Pre Mix",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746618344/Pelican_Holdings_Coal_pre_mix_zhs51y.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    name: "Solid and Hollow Cement Block",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746618404/Pelican_Holdings_Solid_Hollow_cement_blocks_jiksxf.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 12,
    name: "Paving Blocks/Interlocks",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746618409/Pelican_Holding_Paving_blocks_bkq20j.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 13,
    name: "Furnance Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746655937/Pelican_Furnance_Oil_s8q4wm.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const spicesProducts: Product[] = [
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
]

export const coconutCoirProducts: Product[] = [
  {
    id: 1,
    name: "Coconut Coir Products",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069346/Pelican%20Holdings/New%20products/Pelican_Holdings_Coconut_coir_products_r4uwlf.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "King Coconut Oil",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700068719/Pelican%20Holdings/New%20products/Pelican_Holdings_Coconut_Oil_pev27a.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const handicraftProducts: Product[] = [
  {
    id: 1,
    name: "Handicraft",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1709229769/Pelican%20Holdings/New%20products/Pelican_Holdings2_Handicraft_zaprrt.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const handmadeProducts: Product[] = [
  {
    id: 1,
    name: "Handmade Products",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1709229775/Pelican%20Holdings/New%20products/Pelican_Holdings2_Hand_made_gk0heb.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const ladiesGarmentProducts: Product[] = [
  {
    id: 1,
    name: "Ladies Garment Items",
    price: 19.99,
    image:
      "https://res.cloudinary.com/midefulness/image/upload/v1700069332/Pelican%20Holdings/New%20products/Pelican_Holdings_Ladies_Garments_uyrssi.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

// export const otherProducts: Product[] = [
  
  
// ]

export const companyExternalValues: CompanyValue[] = [
  {
    id: 1,
    name: "SUPERIOR QUALITY GOODS",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746653584/goods_wnulyt.png",
    description:
      "We provide you with the finest products, crafted from premium bitumen obtained from refineries in the Middle East. a line of consistently high-quality bitumen-based goods that meet or exceed international market standards.",
  },
  {
    id: 2,
    name: "TECHNICAL LEADERSHIP",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746653664/goal_hupp7d.png",
    description:
      "We create our items with the most advanced and innovative extraction techniques and cutting-edge technology to make them available to you in the most convenient manner possible.",
  },
  {
    id: 3,
    name: "SERVICE EXCELLENCE",
    icon: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746653594/service_vubxti.png",
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
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746644839/1035_cf5xma.jpg",
    title: "We are Since 2013",
    mainTitle: "PELICAN HOLDINGS",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
  {
    imageUrl: "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746644523/602_dd3amw.jpg",
    title: "OUR PASSION TO DELIVER QUALITY PRODUCTS...",
    mainTitle: "BITUMEN AND BITUMINOUS PRODUCTS",
    description:
      "To deliver quality products exceeding the expectations of the customers and maintain a cutting edge over the rest of the market players thus makes our company a unique one.",
  },
  {
    imageUrl:"https://res.cloudinary.com/ddhygfpyk/image/upload/v1746638690/Pelican__Furnence_Oil_image_hprysw.avif",
    title: "Furnace Oil",
    mainTitle: "Powering Industries with Efficiency",
    description: "Seamless delivery of furnace oil to meet industrial energy demands, ensuring reliability, cost-effectiveness, and operational excellence."
  },
  {
    imageUrl:"https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646032/8332_jtfkij.jpg",
    title: "Logistics and Transportation",
    mainTitle: "Streamlining Supply Chain Solutions",
    description: "Reliable logistics and transportation services to optimize supply chains, ensuring timely deliveries, cost savings, and enhanced business operations."
  },
  {
    imageUrl:"https://res.cloudinary.com/ddhygfpyk/image/upload/v1746644975/804_pujotb.jpg",
    title: "Import and Export ",
    mainTitle: "Connecting Global Markets Efficiently",
    description: "Comprehensive import and export solutions for smooth international trade, ensuring reliability, compliance, and timely delivery across global supply chains."
  },
  {
    imageUrl:"https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646322/29703_a70bur.jpg",
    title: "Tourism",
    mainTitle: "Explore the World with Ease",
    description: "Tailored tourism services offering memorable journeys, seamless planning, and exceptional experiences to connect you with the beauty of diverse destinations worldwide."
  },
];

export const slidesCardData = [
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650978/image_19_zk9o6l.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650974/IMG_20200829_092436_kvqyzg.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650968/IMG_20200829_091958_krf1zn.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746644523/602_dd3amw.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646322/29703_a70bur.jpg",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746638690/Pelican__Furnence_Oil_image_hprysw.avif",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746638691/Pelican__Logistics_and_Transportation_image_c1e63a.avif",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746644975/804_pujotb.jpg",
  },
];
