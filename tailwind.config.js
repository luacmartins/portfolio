module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
   },
   purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'accent-1': '#333',
         },
         width: {
            104: '26rem',
         },
         margin: {
            104: '26rem'
         }
      },
   },
   variants: {},
   plugins: [],
}
