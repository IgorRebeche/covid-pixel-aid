import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/pages/Home";
import Theme from "./theme";

ReactDOM.render(
  <Theme>
    <Home />
  </Theme>,
  document.getElementById("root")
);
