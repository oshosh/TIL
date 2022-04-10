import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App2 from "./App2.jsx";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightThem = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App2 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
