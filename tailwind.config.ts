import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
    colors: {
      white: "#FFFFFF",
      "yellow-5": "#EEB004",
      "black-100": "#151726",
      "black-90": "#364155",
      "black-80": "#4F596B",
      "black-70": "#687180",
      "black-60": "#818895",
      "black-50": "#9BA0AA",
      "black-40": "#B4B8BF",
      "black-30": "#C8C8C8",
      "black-10": "#E6E7EA",
      "black-5": "#F7F7F7",
      "black-0": "#E3E3E3",
      "green-100": "#03B660",
      "green-80": "#3DCB76",
      "green-70": "#55D287",
      "green-60": "#6DD898",
      "green-50": "#85DFA9",
      "green-40": "#9EE5BA",
      "green-30": "#B6ECCB",
      "green-20": "#CEF2DD",
      "green-10": "#E7F9EE",
      "green-5": "#F3FCF6",
      "cienna-100": "#E78854",
      "cienna-80": "#ECA076",
      "cienna-70": "#EEAC87",
      "cienna-60": "#F1B898",
      "cienna-50": "#F3C3A9",
      "cienna-40": "#F5CFBB",
      "cienna-30": "#F8DBCC",
      "cienna-20": "#FAE7DD",
      "cienna-10": "#FDF3EE",
      "cienna-5": "#FEF9F6",
      "blue-100": "#1266E0",
      "blue-80": "#4185E6",
      "blue-70": "#5994E9",
      "blue-60": "#71A3EC",
      "blue-50": "#88B2EF",
      "blue-40": "#A0C2F3",
      "blue-30": "#B8D1F6",
      "blue-20": "#2B63FD",
      "blue-10": "#E7F0FC",
      "blue-5": "#3992FF",
      "citrine-100": "#E5D419",
      "citrine-80": "#F2E15D",
      "citrine-70": "#F4E472",
      "citrine-60": "#F5E886",
      "citrine-50": "#F7EC9A",
      "citrine-40": "#F9F0AE",
      "citrine-30": "#FAF4C2",
      "citrine-20": "#FCF7D7",
      "citrine-10": "#FDFBEB",
      "citrine-5": "#FEFDF5",
      "grey-1": "#F7F7FA",
      "red-5": "#F44250",
      hazel: "#8B8110",
      inherit: "inherit",
    },
  },
  plugins: [],
} satisfies Config;
