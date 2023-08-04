import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { imageVariants } from "@/animations/imageAnimation";

const SwiperImage = ({ source, text, width, height, classname }) => {
  const [, setIsInView] = useState(false);
  const controls = useAnimation();
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    const options = {
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        } else {
          setIsInView(false);
          controls.start("hidden");
        }
      });
    }, options);
    if (image) {
      observer.observe(image);
    }
    return () => {
      if (image) {
        observer.unobserve(image);
      }
    };
  }, [controls]);

  return (
    <motion.img
      ref={imgRef}
      animate={controls}
      src={source}
      alt={text}
      width={width}
      height={height}
      className={classname}
      variants={imageVariants}
    />
  );
};

export default SwiperImage;
