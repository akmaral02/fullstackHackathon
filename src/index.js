import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ToursContextProvider from "./contexts/ToursContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MyToursContextProvider from "./contexts/MyToursContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyToursContextProvider>
        <ToursContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ToursContextProvider>
      </MyToursContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
