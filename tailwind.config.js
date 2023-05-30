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
        'sidebar-image': "url('/images/sidebar/sidebar7.svg')",
        'nav-image': "url('/images/sidebar/sidebar8.svg')",
        // Agrega más clases de fondo de pantalla aquí
      }
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