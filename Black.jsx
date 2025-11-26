import React, { useState, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./Black.css";

const images = [
  "/black_left1.png",
  "/black_left1.png",
  "/black_left2.png",
  "/black_left2.png",
];

export default function Black() {
  const [index, setIndex] = useState(0);

  const moveNext = () => {
    setIndex((prev) => (prev < images.length - 2 ? prev + 1 : 0));
  };

  const movePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 2));
  };

  // AUTO MOVE
  useEffect(() => {
    const id = setInterval(moveNext, 3000); // every 3 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <div className="black-screen">

      <div className="title-section">
        <h2 className="title">Coupens Corner</h2>
      </div>

      <div className="content-area">

        <div className="left-section">
          <img src="/black_right.jpg" className="main-img" alt="Main" />
        </div>

        <div className="right-section">

          {/* MANUAL BUTTONS */}
          <button className="arrow-btn" onClick={movePrev}>
            
            <IoIosArrowUp size={24}/>
          </button>

          <div className="carousel-window">
            <div
              className="carousel-inner"
              style={{ transform: `translateY(-${index * 150}px)` }}
            >
              {images.map((src, i) => (
                <img key={i} src={src} className="carousel-img" alt="" />
              ))}
            </div>
          </div>

          <button className="arrow-btn" onClick={moveNext}>
            <IoIosArrowDown size={24}/>
            </button>

        </div>
      </div>
    </div>
  );
}