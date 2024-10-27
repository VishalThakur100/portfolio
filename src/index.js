import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import dotenv from "dotenv";

dotenv.config();

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
