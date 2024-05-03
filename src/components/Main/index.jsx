/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import MainSmallScreen from "./MainSmallScreen/index.jsx";
import MainLargeScreen from "./MainLargeScreen/index.jsx";
import Description from "../Description.jsx";
import dataCarousel from "../../assets/data/dataCarousel.js";
import './index.scss';

const Main = ({ setTitleCurrent, currentValue, setCurrentValue, screenNotCompatible, degValue, degreesValue, setDegreesValue, mousePos, navigatorIsCompatible }) => {

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
    <main className="main">
      <Description />
      {screenNotCompatible || !navigatorIsCompatible ? (
        <MainSmallScreen dataCarousel={dataCarousel} />
      ) : (
        <MainLargeScreen nextRef={nextRef} prevRef={prevRef} handleClick={handleClick} containerRef={containerRef} degValue={degValue} degreesValue={degreesValue} currentValue={currentValue} backgroundTitle={backgroundTitle} setBackgroundTitle={setBackgroundTitle} backgroundTitleRef={backgroundTitleRef} backgroundTitleShadowRef={backgroundTitleShadowRef} mousePos={mousePos} />
      )}
    </main>
  )
}
export default Main;