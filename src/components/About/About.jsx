import { gsap } from "gsap";
import { useEffect } from "react";

const About = () => {
  const tl = new gsap.timeline();
  useEffect(() => {
    tl.delay(1);
    tl.fromTo(
      "#TransitionElement",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <>
      <div id="TransitionElement" />
      <main>This is the About page</main>
    </>
  );
};

export default About;
