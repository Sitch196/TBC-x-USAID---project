import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";
import usaid from "../../../assets/partners/usaid.png";
import space from "../../../assets/partners/space.png";
import tnet from "../../../assets/partners/tnet.png";
import tegeta from "../../../assets/partners/tegeta.png";
import spectre from "../../../assets/partners/spectre.png";
import tbcleasing from "../../../assets/partners/tbcleasing.png";
import ufc from "../../../assets/partners/ufc.png";

const images = [usaid, space, tnet, tegeta, spectre, tbcleasing, ufc];

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
