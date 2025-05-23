import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainSmallScreen from "./MainSmallScreen/index.jsx";
import MainLargeScreen from "./MainLargeScreen/index.jsx";
import dataCarousel from "../../assets/data/dataCarousel.js";
import './index.scss';

const Main = ({ 
  setTitleCurrent, 
  currentValue, 
  setCurrentValue, 
  screenNotCompatible, 
  degValue, 
  degreesValue, 
  setDegreesValue, 
  mousePos, 
  navigatorIsCompatible 
}) => {
  const location = useLocation().pathname;
  const nextRef = useRef();
  const prevRef = useRef();
  const containerRef = useRef();

  const [backgroundTitle, setBackgroundTitle] = useState();
  const backgroundTitleRef = useRef();
  const backgroundTitleShadowRef = useRef();

  const handleClick = (e) => {
    if (e.target.id === "next") {
      if (currentValue < dataCarousel.length) {
        setCurrentValue(currentValue + 1);
        setDegreesValue(degreesValue - degValue);
      }
    }
    if (e.target.id === "prev" && degreesValue < 0) {
      if (currentValue > 1) {
        setCurrentValue(currentValue - 1);
        setDegreesValue(degreesValue + degValue);
      }
    }
  }
  useEffect(() => {
    setTitleCurrent("Yann Letouzey");
  }, []);

  return (
    <>
      <MainLargeScreen 
        nextRef={nextRef} 
        prevRef={prevRef} 
        handleClick={handleClick} 
        containerRef={containerRef} 
        degValue={degValue} 
        degreesValue={degreesValue} 
        currentValue={currentValue} 
        backgroundTitle={backgroundTitle} 
        setBackgroundTitle={setBackgroundTitle} 
        backgroundTitleRef={backgroundTitleRef} 
        backgroundTitleShadowRef={backgroundTitleShadowRef} 
        mousePos={mousePos} 
      />
    </>
  )
}
export default Main;