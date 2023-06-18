import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./Context/DataContext";
import { BrowserRouter } from "react-router-dom";
import { DisplayContextProvider } from "./Context/DisplayContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DisplayContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </DisplayContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
