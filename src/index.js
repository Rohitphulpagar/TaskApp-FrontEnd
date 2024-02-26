import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </BrowserRouter>
);
