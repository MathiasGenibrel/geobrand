import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import themes from "./config/themes";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
