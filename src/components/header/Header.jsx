import { gsap } from "gsap";
import "./Header.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ children }) => {
  const headerTl = new gsap.timeline();
  const navigate = useNavigate();

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    headerTl.fromTo(
      "header",
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      }
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

  const changeContent = (to) => {
    if (window.location.pathname != to) {
      const transitionTl = new gsap.timeline();

      transitionTl.fromTo(
        "#TransitionElement",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power3.inOut",
        }
      );
      transitionTl.call(() => {
        navigate(to);
      });
      transitionTl.fromTo(
        "#TransitionElement",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power3.inOut",
        }
      );
    }
  };

  const changeLayout = (to) => {
    const transitionTl = new gsap.timeline();

    transitionTl.fromTo(
      "#TransitionElement",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power3.inOut",
      }
    );
    transitionTl.to("header", { opacity: 0, y: "-100%" }, "-=0.5");
    transitionTl.call(() => {
      navigate(to);
    });
  };

  return (
    <>
      <header>
        <h1 onClick={() => changeLayout("/")}>Faith Guanga</h1>
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
