import { gsap } from "gsap";
import "./Landing.css";
import { useEffect, useState } from "react";

const Landing = () => {
  const [slopeAngle, setSlopeAngle] = useState(0);
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
  }, []);

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
          <nav style={{ transform: ` rotate(-${slopeAngle}deg)` }}>
            <button>About</button>
            <button>Resume</button>
            <button>Projects</button>
            <button>Contact</button>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Landing;
