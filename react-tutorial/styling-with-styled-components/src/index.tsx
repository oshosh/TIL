import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App5 from "./App5";
import { lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App5 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
