import { gsap } from "gsap";
import "./Landing.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
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
      "#LandingBackgroundBlue",
      {
        clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)",
        duration: 2,
        ease: "power3.out",
      },
      0.5
    );
    bgTl.from(
      ".intro",
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

  const transition = (to) => {
    bgTl.to("nav", { opacity: 0 });
    bgTl.to(".intro", { opacity: 0 });
    bgTl.to("#LandingBackgroundBlue", {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)",
      ease: "power3.in",
    });
    bgTl.call(
      () => {
        navigate(to);
      },
      [],
      "+=0.5"
    );
  };

  const linkTo = (to) => {
    transition(to);
  };

  return (
    <main>
      <div id="LandingBackgroundRose" />
      <div className="wrap">
        <div id="LandingBackgroundBlue">
          <div className="intro">
            <h1>Faith</h1>
            <h1>Guanga</h1>
            <h2>Artist and Graphics Designer</h2>
          </div>
          {/*  */}
          <nav
            style={{
              transform: `translate(-50%,50%) rotate(-${slopeAngle}deg)`,
            }}
          >
            <button onClick={() => linkTo("about")}>About</button>
            <button onClick={() => linkTo("resume")}>Resume</button>
            <button onClick={() => linkTo("projects")}>Projects</button>
            <button onClick={() => linkTo("contact")}>Contact</button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Landing;
