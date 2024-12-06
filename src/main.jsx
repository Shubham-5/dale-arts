import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout";
import { AuthProvider } from "./context/auth-context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Layout />
    </AuthProvider>
  </StrictMode>
);
