import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sora": "var(--font-sora)",
        "inter": "var(--font-inter)",
      },
      colors: {
        'dark-bg': '#060714',
        'gray-white': '#7780A1',
        'primary-purple-transparent': '#514CFF26',
        'primary-purple': '#514CFF',
        'white-dark': '#262840',
        'light-dark': '#0607141A'
      }
    },
  },
  plugins: [],
};
export default config;
