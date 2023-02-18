import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ToursContextProvider from "./contexts/ToursContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToursContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ToursContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
