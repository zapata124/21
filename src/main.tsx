import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DeckProvider } from "./providers/DeckProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DeckProvider>
    <App />
  </DeckProvider>
);
