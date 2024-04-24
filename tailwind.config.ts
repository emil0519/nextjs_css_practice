import { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { flex: { "1/3": "1 1 33%" } },
  },
  plugins: [],
};

export default config;
