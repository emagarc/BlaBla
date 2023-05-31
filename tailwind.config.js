/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '0.125rem',  // Agrega valores personalizados a la escala de medidas
        '1.5': '0.375rem',
      },
      backgroundImage: {
        'home-image': "url('/images/message/message6.svg')",
        'sidebar-image': "url('/images/message/honeycomb.svg')",
        'nav-image': "url('/images/sidebar/sidebar8.svg')",
        'empty-image': "url('/images/message/message1.svg')",
        'header-image': "url('/images/nav/g10.svg')",
        // Agrega más clases de fondo de pantalla aquí
      },
      backgroundSize: {
        'auto-100': 'auto 100%',
      },
      transformOrigin: {
        '0': '0%',
      },
      rotate: {
        '-45': '-45deg',
      },
      boxShadow: {
      'white': '0 0px 25px 0 rgba(0, 0, 0, 0.5)',
      },
      scale: {
        '101': '1.01',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    })
  ],
}