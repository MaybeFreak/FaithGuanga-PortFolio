import { gsap } from "gsap";
import "./Contact.css";
import { useEffect } from "react";

const Contact = () => {
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.from("#ContactContent", { opacity: 0 });
  }, []);

  return (
    <div id="ContactContent">
      <h2>Contact</h2>
      <p id="ContactSub">
        Interested in my design work? Feel free to reach out to me!{" "}
      </p>
      <div id="ContactInfo">
        <p>
          <b>Email: </b>
          <a href="mailto:fguanga1550@gmail.com">fguanga1550@gmail.com</a>
        </p>
        <p>
          <b>Phone: </b>
          <span id="PhoneNumber">(857)-389-8683</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
