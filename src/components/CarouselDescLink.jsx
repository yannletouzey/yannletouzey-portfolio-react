import React, { useEffect, useState, useRef } from "react";
const CarouselDescLink = ({dataCarouselElement}) => {
    const [hover, setHover] = useState();
    const [inline, setInline] = useState();
    const tooltip = useRef();
    useEffect(() => {
        setInline(dataCarouselElement.inline);
    }, []);
    useEffect(() => {
        hover ? tooltip.current.style.display = "inline" : tooltip.current.style.display = "none";
    }, [hover])
    return (
        <div className="container__carousel--desc--link">
            {inline ? 
                <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                    <div className="containerLink s1">
                        {dataCarouselElement.title}
                    </div>
                </a> 
                : 
                <>
                    <p className="container__carousel--msgNotOnline" ref={tooltip}>"{dataCarouselElement.title}" n'est pas encore en ligne</p>
                    <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{dataCarouselElement.title}</p>
                </>}
            {/* <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                <div className="containerLink s2">
                    {dataCarouselElement.title}
                </div>
            </a> */}
        </div>
    )
}
export default CarouselDescLink;