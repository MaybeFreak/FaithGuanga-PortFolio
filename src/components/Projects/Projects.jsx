import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = ({ children }) => {
  const navigate = useNavigate();

  const changeContent = () => {};
  return (
    <main id="ProjectPage">
      <div id="ProjectsMenu">
        <h2>Projects</h2>
        <ul>
          <li>
            <button onClick={() => changeContent("/social-graphics")}>
              Social Graphics
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("/ads")}>Ads</button>
          </li>
          <li>
            <button onClick={() => changeContent("/book-design")}>
              Book Design
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("/personal-art")}>
              Personal Art
            </button>
          </li>
        </ul>
      </div>
      <div id="ProjectsContent">
        <div id="ContentTransitionElement" />
        {children}
      </div>
    </main>
  );
};

export default Projects;
