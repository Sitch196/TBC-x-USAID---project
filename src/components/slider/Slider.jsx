import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

const images = [
  "../../../assets/partners/usaid.png",
  "../../../assets/partners/space.png",
  "../../../assets/partners/tnet.png",
  "../../../assets/partners/tegeta.png",
  "../../../assets/partners/spectre.png",
  "../../../assets/partners/tbcleasing.png",
  "../../../assets/partners/ufc.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < images.length ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0
        ? prevIndex - 3
        : images.length - ((images.length - prevIndex) % 3)
    );
  };

  return (
    <section className="slider_container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="slider_content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide${index + 1}`}
              className="slider_image"
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="slider_arrow arrow_left" onClick={prevSlide}>
        {"<"}
      </div>
      <div className="slider_arrow arrow_right" onClick={nextSlide}>
        {">"}
      </div>
    </section>
  );
};

export default Slider;
