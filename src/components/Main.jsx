import { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import Carousel from "./Carousel";
import Description from "./Description";
import dataCarousel from "../assets/data/dataCarousel";
import Footer from "./Footer";

const Main = ({ setTitleCurrent, currentValue, setCurrentValue }) => {

  useEffect(() => {
    setTitleCurrent("Yann Letouzey");
  }, []);

  const nextRef = useRef();
  const prevRef = useRef();
  const containerRef = useRef();
  const degValue = 90;
  const [degreesValue, setDegreesValue] = useState(0);

  const [backgroundTitle, setBackgroundTitle] = useState();
  const backgroundTitleRef = useRef();

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
    backgroundTitleRef.current.style.scale = '0';
    setTimeout(() => {
      setBackgroundTitle(dataCarousel[currentValue - 1].title.replace("-", " ").replace("-", " ").replace(".", " "));
      backgroundTitleRef.current.style.transitionTimingFunction = `cubic-bezier(.2,1.66,.81,.78)`;
      backgroundTitleRef.current.style.scale = '1 1.4';
    }, 300)
  }, [currentValue]);

  return (
    <>
      <main className="main">
        <h4 ref={backgroundTitleRef} className="main__title">{backgroundTitle}</h4>
        <Description />
        <section id="container" className="container">
          <Carousel containerRef={containerRef} degValue={degValue} degreesValue={degreesValue} currentValue={currentValue} />
          <Buttons nextRef={nextRef} prevRef={prevRef} handleClick={handleClick}/>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Main;