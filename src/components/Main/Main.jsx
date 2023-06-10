import { gsap } from "gsap";
import "./Main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = ({ children }) => {
  const [slopeAngle, setSlopeAngle] = useState(0);
  const navigate = useNavigate();
  const bgTl = new gsap.timeline();

  const updateSlopeAngle = () => {
    const rise = window.innerHeight * 0.8;
    const run = window.innerWidth * 0.8;
    setSlopeAngle((Math.atan(rise / run) * 180) / Math.PI);
  };

  useEffect(() => {
    const rise = window.innerHeight * 0.8;
    const run = window.innerWidth * 0.8;
    setSlopeAngle((Math.atan(rise / run) * 180) / Math.PI);

    window.addEventListener("resize", updateSlopeAngle);

    bgTl.from(
      "#MainBackgroundBlue",
      {
        clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 2,
        ease: "power3.out",
      },
      0.5
    );
    bgTl.from(
      "#MainContent",
      {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power3.out",
      },
      "-=1"
    );
    bgTl.from("nav", { opacity: 0 }, "-=1");
  }, []);

  const changeContent = (to) => {
    if (window.location.pathname != `/${to}`) {
      const transitionTL = new gsap.timeline();

      transitionTL.to("#MainContent", { opacity: 0 });
      transitionTL.call(() => {
        navigate(to);
      });
      transitionTL.to("#MainContent", { opacity: 1 });
    }
  };

  return (
    <main>
      <div id="MainBackgroundRose" />
      <div className="wrap">
        <div id="MainBackgroundBlue">
          <div id="MainContent">{children}</div>
          <nav
            style={{
              transform: `translate(-50%,50%) rotate(-${slopeAngle}deg)`,
            }}
          >
            <button onClick={() => changeContent("about")}>About</button>
            <button onClick={() => changeContent("contact")}>Contact</button>
            <button onClick={() => changeContent("resume")}>Resume</button>
            <button onClick={() => changeContent("projects")}>Projects</button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Main;
