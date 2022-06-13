import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import GlobalStyleProvider from "./global/globalStyles";
import { SessionProvider } from "./context/SessionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <GlobalStyleProvider />
      <App />
    </SessionProvider>
  </React.StrictMode>
);
