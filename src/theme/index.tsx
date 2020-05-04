import { DefaultTheme, createGlobalStyle } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#6F2232",
    secondary: "#C3083F",
    background: "#3C3C46",
    white: "#FFFF",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "1.4em",
    large: "3em",
  },
};

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.fonts[1]};
  }
  p, span {
    color: white;
  }
`