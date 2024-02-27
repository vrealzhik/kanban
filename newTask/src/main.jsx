import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styled/globalstyles.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
