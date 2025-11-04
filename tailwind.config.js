/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(154,179,161)',
        forest: '#2F4730',
        earth: '#8C6A4E',
        cream: '#F5EFE6'
      },
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif']
      },
      backgroundImage: {
        'texture-leaves': "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80')"
      }
    }
  },
  plugins: []
};
