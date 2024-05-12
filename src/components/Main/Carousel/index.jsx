import { useEffect, useRef, useState } from "react";
import dataCarousel from "../../../assets/data/dataCarousel.js";
import CarouselDesc from "./Description/index.jsx";
import './index.scss';

const Carousel = ({ currentValue, containerRef, degValue, degreesValue }) => {
  // const [data, setData] = useState([]);
  // const [facesRef, setFacesRef] = useState([]);
  useEffect(() => {
    // fetch('https://apidata-one.vercel.app/api/data')
    //   .then(res => res.json())
    //   .then(data => {
    //     setData(data)
    //   })

    const offsetFace = (containerRef.current.clientWidth / 2);
    faceRef.forEach((faceElement, index) => {
      faceElement.current.style.transform = `rotateY(${degValue * index}deg) translateZ(${offsetFace}px)`;
    })
  }, []);

  const faceRef = dataCarousel.map(() => useRef());

  useEffect(() => {
    containerRef.current.style.transform = `rotateY(${degreesValue}deg)`;
    dataCarousel.forEach((f, index) => {
      if (dataCarousel[index].id == currentValue) {
        faceRef.forEach(faceElement => {
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
  
  const imgRef = useRef();

  const handleMouseEnter = (e) => {
    const boxImg = e.currentTarget;
    const img = boxImg.children[0];
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transitionProperty = 'transform';
    img.style.transitionDuration = '0.5s';
    img.style.transform = `scale(1.8)`;
  }
  
  const handleMouseLeave = (e) => {
    const boxImg = e.currentTarget;
    const img = boxImg.children[0];
    img.style.transitionDuration = '0.5s';
    setTimeout(() => {
        img.style.transformOrigin = `center center`;
    }, 500)
    img.style.transform = `scale(1)`;
  }
  return (
    <div 
      id="container__carousel" 
      className="container__carousel" 
      ref={containerRef}
    >
      {dataCarousel.map((dataCarouselElement, index) => {
        return (
          <div 
            className="container__carousel--face" 
            key={index} 
            id={`${dataCarouselElement.id}`} 
            ref={faceRef[index]}
          >
            <div 
              className="container__carousel--img" 
              key={`container__carousel--img-${dataCarouselElement.id}`} 
              onMouseMove={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            >
              <img 
                ref={imgRef} 
                src={dataCarouselElement.imgUrl} 
                alt={dataCarouselElement.alt} 
              />
            </div>
            <CarouselDesc 
              dataCarouselElement={dataCarouselElement} 
            />
          </div>
        )
      })}
    </div>
  )
}
export default Carousel;