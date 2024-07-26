/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx,ts}",
    "./src/*.{html,js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      }, 
      colors: {
        //light
        body: "#F6F8F9",
        body2: "#e7ecef",
        txt: "#232323",
        primary: "#593f62",
        primary2: "#bd94cb",
        violet: "#DBCDDF",
        blue: "#8499b1",
        warning: "#efcb68",
        danger: "#A00300",
        subtext: "#D3D3D3",
        //dark
        "body-black": "#232323",
        "body-black2": "#373737",
        "txt-black": "#f5f1f5",
        "primary-dark": "#c8aed1",
        "primary-dark2": "#8568A8",
        "primary-dark3": "#985DDD",
        "primary-dark4": "#bd47ff",
        "violet-dark": "#7b6d8d",
        "blue-dark": "#a5c4d4",
        "warning-dark": "#F8DF9A",
        "danger-dark": "#FF4F48",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

