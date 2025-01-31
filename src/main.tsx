import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./core/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
