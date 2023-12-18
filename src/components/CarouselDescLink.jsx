import React from "react";
const CarouselDescLink = ({dataCarouselElement }) => {
    return (
        <div className="container__carousel--desc--link">
            <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                <div className="containerLink s1">
                    {dataCarouselElement.title}
                </div>
            </a>
            <a href={dataCarouselElement.link} target="_blank" rel="noopener noreferrer">
                <div className="containerLink s2">
                    {dataCarouselElement.title}
                </div>
            </a>
        </div>
    )
}
export default CarouselDescLink;