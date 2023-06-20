import { gsap } from "gsap";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const ImageModal = ({ onClose, src }) => {
  useEffect(() => {
    const tl = new gsap.timeline();
    tl.fromTo(".modal", { opacity: 0 }, { opacity: 1 });
  }, []);

  const handelClick = () => {
    const tl = new gsap.timeline();
    tl.fromTo(".modal", { opacity: 1 }, { opacity: 0, duration: 0.3 });
    tl.call(() => onClose());
  };

  return createPortal(
    <div className="modal" onClick={() => handelClick()}>
      <div className="modalContent">
        <img src={src} />
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ImageModal;
