import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-1",
    "border-2",
    "border-black",
    "p-2",
    "mx-2",
    "text-center",
    "hover:underline",
  ],
  theme: {
    extend: {
      colors: {
        background: "#d5def5",
        nav_background: "#8594e4",
        text: "#141010",
        page_title_color: "#6643b5",
      },
    },
  },
  plugins: [],
};
export default config;
