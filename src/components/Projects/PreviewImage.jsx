import { useState } from "react";
import ImageModal from "./ImageModal";

const PreviewImage = ({ src }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <img onClick={() => setShow(true)} src={src} />
      {show && <ImageModal src={src} onClose={() => setShow(false)} />}
    </>
  );
};

export default PreviewImage;
