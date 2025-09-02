import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes";
import { RouterProvider } from "react-router";
import AppQueryProvider from "./providers/AppQueryProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppQueryProvider>
      <RouterProvider router={router} />
    </AppQueryProvider>
  </StrictMode>
);
