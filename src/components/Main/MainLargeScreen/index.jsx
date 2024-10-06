import React, { useEffect } from 'react'
import Carousel from '../Carousel'
import Buttons from '../Buttons'
import dataCarousel from "../../../assets/data/dataCarousel.js";
import './index.scss';
export default function MainSmallScreen({ containerRef, degValue, degreesValue, currentValue, handleClick, nextRef, prevRef, mousePos, backgroundTitleRef, backgroundTitleShadowRef, backgroundTitle, setBackgroundTitle }) {

  useEffect(() => {
    backgroundTitleRef.current.style.translate = `${mousePos.x * 10}px ${mousePos.y * 10}px`;
  }, [mousePos]);

  useEffect(() => {
    backgroundTitleRef.current.style.scale = '0';
    backgroundTitleShadowRef.current.style.scale = '0';
    setTimeout(() => {
      setBackgroundTitle(dataCarousel[currentValue - 1].title);
      backgroundTitleRef.current.style.transitionTimingFunction = `cubic-bezier(.2,1.66,.81,.78)`;
      backgroundTitleRef.current.style.scale = '1 1.4';
      backgroundTitleShadowRef.current.style.transitionTimingFunction = `cubic-bezier(.2,1.66,.81,.78)`;
      backgroundTitleShadowRef.current.style.scale = '1 1.4';
    }, 300)
  }, [currentValue]);

  return (
    <>
      <section id="container" className="container">
        <h4 ref={backgroundTitleRef} className="main__title">{backgroundTitle}</h4>
        <p ref={backgroundTitleShadowRef} className="main__title--shadow">{backgroundTitle}</p>
        <Carousel containerRef={containerRef} degValue={degValue} degreesValue={degreesValue} currentValue={currentValue} />
        <Buttons nextRef={nextRef} prevRef={prevRef} handleClick={handleClick}/>
      </section>
    </>
  )
}
