import { gsap } from "gsap";
import { useEffect } from "react";
import "./About.css";

const About = () => {
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.from("#AboutContent", { opacity: 0 });
  }, []);

  return (
    <div id="AboutContent">
      <p>
        Hi!
        <span>
          My name is Faith and I am an artist and graphic designer living near
          Boston, MA. I am known for my work at Ploughshares creating ads and
          social graphics to promote their seasonal publications. I also have
          experience designing and formatting books from both my design classes
          and college organization and enjoy creating digital art during my free
          time. <br /> I look forward to designing for you!
        </span>
      </p>
    </div>
  );
};

export default About;
