import SocialGraphics from "./Content/SocialGraphics";
import "./Projects.css";
import { useState } from "react";

const Projects = ({ children }) => {
  const [content, setContent] = useState("socialGraphics");

  const changeContent = () => {};
  return (
    <main id="ProjectPage">
      <div id="ProjectsMenu">
        <h2>Projects</h2>
        <ul>
          <li>
            <button onClick={() => changeContent("social-graphics")}>
              Social Graphics
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("ads")}>Ads</button>
          </li>
          <li>
            <button onClick={() => changeContent("book-design")}>
              Book Design
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("personal-art")}>
              Personal Art
            </button>
          </li>
        </ul>
      </div>
      <div id="ProjectsContent">
        <div id="ContentTransitionElement" />
        {content === "socialGraphics" && <SocialGraphics />}
      </div>
    </main>
  );
};

export default Projects;
