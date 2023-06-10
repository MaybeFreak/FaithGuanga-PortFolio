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
  };

  return (
    <>
      <header>
        <h1>Faith Guanga</h1>
        <nav>
          <p>About</p>
          <p>Resume</p>
          <p>Projects</p>
          <p>Contact</p>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Header;
