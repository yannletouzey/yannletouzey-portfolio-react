import React, {useState, useEffect, useRef } from "react";
import dataCarousel from "../assets/data/dataCarousel.js";
import CarouselDesc from "./CarouselDesc.jsx";

const Carousel = ({currentValue, containerRef, degValue, degreesValue}) => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    imgRef.current.style.transitionProperty = 'transform';
    imgRef.current.style.transitionDuration = '0.5s';
    imgRef.current.style.transform = `scale(1.5)`;
  };
  const handleMouseLeave = () => {
    imgRef.current.style.transitionDuration = '0.5s';
    setTimeout(() => {
      imgRef.current.style.transformOrigin = `center center`;
    }, 500);
    imgRef.current.style.transform = `scale(1)`;
  };

  const boxImgRef = useRef();
  const faceRef = dataCarousel.map(() => useRef());
  useEffect(() => {
    containerRef.current.style.transform = `rotateY(${degreesValue}deg)`;
    dataCarousel.forEach((f, index) => {
      if (dataCarousel[index].id == currentValue) {
        faceRef.forEach((faceElement, indexFace) => {
          if (currentValue == 1) {
            if (faceElement.current.id >= (currentValue + 4)) {
              faceElement.current.style.display = 'none'
            } else {
              faceElement.current.style.display = 'block'
            }
          } else {
            if (faceElement.current.id >= (currentValue + 3)) {
              faceElement.current.style.display = 'none'
            } else {
              faceElement.current.style.display = 'block'
            }
          }
        })
      }
    })
  }, [degreesValue])

  useEffect(() => {
    const offsetFace = (containerRef.current.clientWidth / 2);
    faceRef.forEach((faceElement, index) => {
      faceElement.current.style.transform = `rotateY(${degValue * index}deg) translateZ(${offsetFace}px)`;
    })
  }, []);

  return (
    <div id="container__carousel" className="container__carousel" ref={containerRef}>
      {dataCarousel.map((dataCarouselElement, index) => {
        return (
          <div className="container__carousel--face" key={index} id={`${dataCarouselElement.id}`} ref={faceRef[index]}>
            <div className="container__carousel--img" key={`container__carousel--img-${dataCarouselElement.id}`}>
              <img ref={imgRef} src={dataCarouselElement.imgUrl} alt={dataCarouselElement.alt} />
            </div>
            <CarouselDesc dataCarouselElement={dataCarouselElement} />
          </div>
        )
      })}
    </div>
  )
}
export default Carousel;