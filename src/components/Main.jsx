import { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import Carousel from "./Carousel";
import Description from "./Description";
import dataCarousel from "../assets/data/dataCarousel";

    
const Main = ({ setTitleCurrent }) => {
    useEffect(() => {
        setTitleCurrent("Yann Letouzey");
    }, []);
    const nextRef = useRef();
    const prevRef = useRef();
    const containerRef = useRef();
    const degValue = 90;
    const [degreesValue, setDegreesValue] = useState(0);
    const [currentValue, setCurrentValue] = useState(1);
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
    return (
        <main className="main">
            <Description />
            <section id="container" className="container">
                <Carousel containerRef={containerRef} degValue={degValue} degreesValue={degreesValue} currentValue={currentValue} />
                <Buttons nextRef={nextRef} prevRef={prevRef} handleClick={handleClick}/>
            </section>
        </main>
    )
}
export default Main;