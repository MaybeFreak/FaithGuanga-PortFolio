import { gsap } from "gsap";
import Ads from "./Content/Ads";
import BookDesign from "./Content/BookDesign";
import PersonalArt from "./Content/PersonalArt";
import SocialGraphics from "./Content/SocialGraphics";
import "./Projects.css";
import { useEffect, useState } from "react";

const Projects = () => {
  const [content, setContent] = useState("socialGraphics");
  const [maxHeight, setMaxHeight] = useState(null);

  useEffect(() => {
    const height = window.innerHeight;
    const headerHeight = document.querySelector("header").offsetHeight;
    setMaxHeight(height - headerHeight);
    window.addEventListener("resize", updateMaxHeight);
  }, []);

  const updateMaxHeight = () => {
    const height = window.innerHeight;
    const headerHeight = document.querySelector("header").offsetHeight;
    setMaxHeight(height - headerHeight);
  };

  const changeContent = (to) => {
    const tl = new gsap.timeline();
    tl.fromTo(
      "#ContentTransitionElement",
      { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
    );
    tl.call(() => setContent(to));
    tl.fromTo(
      "#ContentTransitionElement",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        delay: 0.5,
      }
    );
  };
  return (
    <main id="ProjectPage">
      <div id="ProjectsMenu">
        <h2>Projects</h2>
        <ul>
          <li>
            <button onClick={() => changeContent("socialGraphics")}>
              Social Graphics
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("ads")}>Ads</button>
          </li>
          <li>
            <button onClick={() => changeContent("bookDesign")}>
              Book Design
            </button>
          </li>
          <li>
            <button onClick={() => changeContent("personalArt")}>
              Personal Art
            </button>
          </li>
        </ul>
      </div>
      <div id="ProjectsContent" style={{ maxHeight: maxHeight }}>
        <div id="ContentTransitionElement" />
        {content === "socialGraphics" && <SocialGraphics />}
        {content === "ads" && <Ads />}
        {content === "bookDesgin" && <BookDesign />}
        {content === "personalArt" && <PersonalArt />}
      </div>
    </main>
  );
};

export default Projects;
