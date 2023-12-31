import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CarouselDescTechno from "./CarouselDescTechno.jsx";
import CarouselDescLink from "./CarouselDescLink.jsx";

const CarouselDesc = ({dataCarouselElement}) => {
    return (
        <div className="container__carousel--desc" key={`container__carousel--desc-${dataCarouselElement.id}`}>
            <CarouselDescLink 
                dataCarouselElement={dataCarouselElement} 
            />
            <CarouselDescTechno 
                key={dataCarouselElement.id} 
                src={dataCarouselElement.techno} 
            />
            {dataCarouselElement.descSmall && 
                <>
                    <Link to={dataCarouselElement.page} className="container__carousel--desc--more"><span className={`container__carousel--desc--more--msg`}>un peu plus de détails</span></Link>
                </>
            }
        </div>
    )
}
export default CarouselDesc;