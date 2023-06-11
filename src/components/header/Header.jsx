import { gsap } from "gsap";
import "./Header.css";
import { useEffect } from "react";

const Header = ({ children }) => {
  const headerTl = new gsap.timeline();

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    headerTl.fromTo(
      "header",
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 }
    );
    headerTl.to(
      "#TransitionElement",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
  };

  const changeContent = () => {};

  const changeLayout = () => {};

  return (
    <>
      <header>
        <h1>Faith Guanga</h1>
        <nav>
          <p onClick={() => changeLayout("/about")}>About</p>
          <p onClick={() => changeContent("/resume")}>Resume</p>
          <p onClick={() => changeContent("/projects")}>Projects</p>
          <p onClick={() => changeLayout("/contact")}>Contact</p>
        </nav>
      </header>
      <div id="TransitionElement"></div>
      {children}
    </>
  );
};

export default Header;
