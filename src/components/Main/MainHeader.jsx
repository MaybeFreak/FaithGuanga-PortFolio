import { gsap } from "gsap";
import { useEffect } from "react";

const MainHeader = ({ changeContent }) => {
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.from("#Name", { opacity: 0 });
  }, []);

  const backToIndex = () => {
    tl.to("#Name", { opacity: 0 });
    changeContent("/");
  };
  return (
    <h1 onClick={() => backToIndex()} id="Name">
      Faith Guanga <span>Design and Production</span>
    </h1>
  );
};

export default MainHeader;
