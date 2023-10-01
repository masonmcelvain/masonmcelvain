/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./helpers/**/*.{js,ts,jsx,tsx,mdx}",
      "./markdown/**/*.{js,ts,jsx,tsx,mdx}",
      "./packages/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {},
      fontFamily: {
         body: [
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
         ],
         heading: [
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
         ],
         mono: [
            "ui-monospace",
            "SFMono-Regular",
            "SF Mono",
            "Menlo",
            "Consolas",
            "Liberation Mono",
            "monospace",
         ],
      },
   },
   plugins: [],
};
