import { ThemeProvider } from "styled-components";

const projectTheme = {
  fontFamily: ["Manrope", "sans-serif"],
  fontSizes: { h1: "64px", h2: "58px", h3: "48px", h4: "40px", h5: "32px", h6: "20px", p1: "18px", p2: "16px", caption: "12px", t1: "32px", t2: "24px" },
  colors: { white: "#FFFFFF", lightGrey: "#F2F2F2", steelGrey: "#E2E6E9", mint: "#00D289", secondary: "#661CE7", primary: "#FF6433", black: "#1E1B1B" },
  fontWeight: { medium: "500", semiBold: "600", bold: "700", extraBold: "800" },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={projectTheme}>{children}</ThemeProvider>;
};
