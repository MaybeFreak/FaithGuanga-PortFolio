import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Header from "./components/header/Header";
import About from "./components/About/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route
        path="about"
        element={
          <Header>
            <About />
          </Header>
        }
      />
    </Routes>
  </BrowserRouter>
);
