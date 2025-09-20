/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // srcフォルダ内の全ての.js, .jsx, .ts, .tsxファイルを対象
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

