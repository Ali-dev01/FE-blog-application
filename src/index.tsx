import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
