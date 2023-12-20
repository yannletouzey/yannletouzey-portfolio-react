import React, { useEffect, useState } from "react";
const CarouselDescLink = ({dataCarouselElement }) => {
    console.log(dataCarouselElement.inline);
    const [inline, setInline] = useState();
    useEffect(() => {
        setInline(dataCarouselElement.inline);
    }, []);
    return (
        <div className="container__carousel--desc--link">
            {inline ? 
                <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                    <div className="containerLink s1">
                        {dataCarouselElement.title}
                    </div>
                </a> 
                : 
                <p>
                    <div className="containerLink s1">
                        {dataCarouselElement.title}
                    </div>
                </p>}
            {/* <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                <div className="containerLink s2">
                    {dataCarouselElement.title}
                </div>
            </a> */}
        </div>
    )
}
export default CarouselDescLink;