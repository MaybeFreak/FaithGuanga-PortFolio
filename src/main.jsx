import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <Main>
            <div className="intro">
              <h1>Faith</h1>
              <h1>Guanga</h1>
              <h2>Artist and Graphics Designer</h2>
            </div>
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
    </Routes>
  </BrowserRouter>
);
