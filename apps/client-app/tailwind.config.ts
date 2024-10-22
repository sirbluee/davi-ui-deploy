import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Issue
<<<<<<< HEAD
    "../../node_modules/ms-ui-components/**/*.{js,ts,jsx,tsx}",
=======
    "../../packages/ui-components/src/**/*.{js,ts,jsx,tsx,mdx}",
    // "../../node_modules/ms-ui-components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
>>>>>>> 7c9356266955a91b40147dda94588f90f854bc6b
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
