/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],


  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        purple: {
          10: '#660099',
          20: '#3d005b',
        },

        yellow: {
          10: '#eae0cc',
        },

        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
          100: '#F9F9F9',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          10: '#023047',
          20: "#065982",
          30: '#008ECC',
          50: '#007AFF',
          70: '#021639',
        },
        background: {
          10: '#008631',
          20: '#00AB41',
        }
      },
      screens: {
        xs: '400px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },

      fontFamily: {
        code: 'code',
        dmono: 'dmono',
        spartan: 'spartan',
      },
    },

  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
