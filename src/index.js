import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
