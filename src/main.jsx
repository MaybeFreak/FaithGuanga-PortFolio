import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <Main>
            <Landing />
          </Main>
        }
      />
      <Route
        path="about"
        element={
          <Main>
            <About />
          </Main>
        }
      />
      <Route
        path="contact"
        element={
          <Main>
            <Contact />
          </Main>
        }
      />
    </Routes>
  </BrowserRouter>
);
