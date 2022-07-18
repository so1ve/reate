import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

import "virtual:fonts.css";
import "virtual:uno.css";
import "virtual:unocss-devtools";
import "@unocss/reset/eric-meyer.css";
import "~/styles/main.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
