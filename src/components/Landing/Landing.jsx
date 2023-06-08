import { gsap } from "gsap";
import "./Landing.css";
import { useEffect } from "react";

const Landing = () => {
  const bgTl = new gsap.timeline();

  useEffect(() => {
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
        </div>
      </div>
    </main>
  );
};

export default Landing;
