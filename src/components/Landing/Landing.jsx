import { gsap } from "gsap";
import "./Landing.css";
import { useEffect } from "react";

const Landing = () => {
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.from("#LandingContent", { opacity: 0 });
  }, []);

  return (
    <div id="LandingContent">
      <h1>Faith</h1>
      <h1>Guanga</h1>
      <h2>Artist and Graphics Designer</h2>
    </div>
  );
};

export default Landing;
