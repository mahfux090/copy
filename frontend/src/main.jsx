import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SportContextProvider from "./contexts/SportContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SportContextProvider>
      <App />
    </SportContextProvider>
  </BrowserRouter>
);
