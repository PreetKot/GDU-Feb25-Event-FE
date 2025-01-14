/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        deepCrimson: "#7B2D26", //Represents bravery, battles, and magic. (red)
        darkSapphire: "#1C3B57", //Evokes mystery and dungeons (blue)
        goldenrod: "#C49A3E", //Symbolizes treasure, artifacts, and royal heritage. (yellow)

        // Secondary Colors
        forestGreen: "#2E4F3A", //Reflects nature and druids
        charcoalGray: "#383838", //For stone and dungeon textures.
        mysticPurple: "#6C3B90", //For arcane magic and spell effects

        // Accent Colors
        burntOrange: "#D35400", //For fire spells or dramatic highlights.
        iceBlue: "#76C7E4", //For frosty or celestial themes
        silver: "#B0C4DE", //For metallic elements like swords or armor.
      },
    },
  },
  plugins: [],
};