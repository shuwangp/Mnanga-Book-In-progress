import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.jsx";   // ← ไฟล์ App ของคุณ

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
