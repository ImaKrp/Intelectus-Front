import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import GlobalStyleProvider from "./global/globalStyles";
import { SessionProvider } from "./context/SessionContext";
import { RecordProvider } from "./context/RecordContext";
import { Modal } from "./Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <RecordProvider>
        <GlobalStyleProvider />
        <Modal>
          <App />
        </Modal>
      </RecordProvider>
    </SessionProvider>
  </React.StrictMode>
);
