import { useRef } from "react";
import { useInView } from "framer-motion";

const SwiperImage = ({ source, text, width, height, classname, slide }) => {
  const imgRef = useRef(null);
  const view = useInView(imgRef, { once: true });

  if (slide.id === 7)
    return (
      <img
        ref={imgRef}
        src={source}
        alt={text}
        width={width}
        height={height}
        className={`${classname} ${view ? "scale-150" : "scale-[2.5]"}`}
      />
    );

  return (
    <img
      ref={imgRef}
      src={source}
      alt={text}
      width={width}
      height={height}
      className={`${classname} ${view ? "scale-1" : "scale-150"}`}
    />
  );
};

export default SwiperImage;
