import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { ContextProvider } from "./context/Context";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ContextProvider>
  </React.StrictMode>
);
