/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        main: "#030e27",
        // main: "#015c75",
        secondary: "#fd5d14",
        white: "#fff",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('https://res.cloudinary.com/midefulness/image/upload/v1699884591/Pelican%20Holdings/tailwindCssBackground/img-1_b0nuo0.png')",
        'bg-img-2': "url('https://res.cloudinary.com/midefulness/image/upload/v1699884592/Pelican%20Holdings/tailwindCssBackground/img-2_kpuax4.png')",
        'feature-bg': "url('https://res.cloudinary.com/midefulness/image/upload/v1699884596/Pelican%20Holdings/tailwindCssBackground/feature-bg_fyox5u.png')",
        'feature-product-bg': "url('https://res.cloudinary.com/midefulness/image/upload/v1699882124/Pelican%20Holdings/backgrounds/product-background_woyldy.png')",
        'feature-contact-bg': "url('https://res.cloudinary.com/midefulness/image/upload/v1699882114/Pelican%20Holdings/backgrounds/contact-us_ihiwc9.png')",
        'feature-contact-24-bg': "url('https://res.cloudinary.com/midefulness/image/upload/v1699882113/Pelican%20Holdings/backgrounds/contact-us-24_nuc8w7.png')",
        pattern: "url('https://res.cloudinary.com/midefulness/image/upload/v1699884560/Pelican%20Holdings/tailwindCssBackground/pattern_swjjuk.png')",
        'pattern-2': "url('https://res.cloudinary.com/midefulness/image/upload/v1699884562/Pelican%20Holdings/tailwindCssBackground/pattern-bg_o734gb.png')",
        'company-profile-bg':"url('https://res.cloudinary.com/midefulness/image/upload/c_fill,w_2000,h_1125,ar_16:9,g_auto/v1699906767/Pelican%20Holdings/Construction-amico_vuebn5.png')",
        'camp-bg1':"url('https://res.cloudinary.com/midefulness/image/upload/v1699907653/Pelican%20Holdings/3377_ldbhzx.jpg')",
        'camp-bg2':"url('https://res.cloudinary.com/midefulness/image/upload/v1699907820/Pelican%20Holdings/23598_p3fwhc.jpg')",
        // 'camp-bg3':"url('https://res.cloudinary.com/midefulness/image/upload/v1699982384/Pelican%20Holdings/4806_hnwqdn.jpg')",
        'camp-bg3':"url('https://res.cloudinary.com/midefulness/image/upload/v1699297484/Pelican%20Holdings/7-scaled_wxgdue.jpg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
