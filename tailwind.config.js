/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	
  ],
  theme: {
    extend: {
      fontFamily:{
        'Outfit':['Outfit','sans-serif'],
        'IntoLightTw0':['Shadows-Into-Light-Two','cursive'],
        'QuickSand':["Quicksand", 'sans-serif']
       
      },
      colors:{
        // primary_color:'#f7c35f',
        primary_color:'#8d2f3c',
        // secondary_color:"#49a760",
        secondary_color:"#0e9ace",
        color_heading:'#04000b',
        dark_Green:'#1f4e3d',
        paragraph_color:'#666666',
        wave_gray:'#f7f7f5',
        footer_color:'#154c79'

      }
    },
  },
  plugins: [],
}

// #8d2f3c

// #5990bd
// #66bee4



//  light wave #f7f7f5

