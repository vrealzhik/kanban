import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styled/globalstyles.js";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext.jsx";
import { TaskProvider } from "./contexts/taskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <TaskProvider>
        <UserProvider>
            <GlobalStyle />
            <App />
        </UserProvider>
      </TaskProvider>
    </React.StrictMode>
  </BrowserRouter>
);
