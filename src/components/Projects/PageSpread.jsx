import { useState } from "react";
import ImageModal from "./ImageModal";

const PageSpread = ({ images }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div id="PageSpread">
      <img src={images[0]} onClick={() => setShow1(true)} />
      <img src={images[1]} onClick={() => setShow2(true)} />
      {show1 && <ImageModal src={images[0]} onClose={() => setShow1(false)} />}
      {show2 && <ImageModal src={images[1]} onClose={() => setShow2(false)} />}
    </div>
  );
};

export default PageSpread;
