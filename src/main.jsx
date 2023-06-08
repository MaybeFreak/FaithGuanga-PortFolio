import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./components/Landing/Landing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Landing />
  </BrowserRouter>
);
