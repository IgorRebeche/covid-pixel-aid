import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
    };
    fonts: ["sans-serif", "Roboto"];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
