import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./theme";

import Home from "./components/pages/Home";

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);
