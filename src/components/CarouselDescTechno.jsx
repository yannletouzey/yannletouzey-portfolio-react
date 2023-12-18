import React from "react";
import technoImg from "../assets/data/dataTechno";

const CarouselDescTechno = ({ src }) => {
    return (
        <div className="container__carousel--desc--techno" key="container__carousel--desc--techno">
            {technoImg.map((dataTechnoElement, index) => {
                if (src[dataTechnoElement.name]) {
                    return (
                        <div 
                            className="container__carousel--desc--techno--img" 
                            key={`container__carousel--desc--techno--img-${index}`} 
                            style={{
                                color: dataTechnoElement.color,
                                '--after-content': "'" + dataTechnoElement.name + "'"
                            }}
                        >
                            <img 
                                src={src[dataTechnoElement.name]} 
                                alt={`Logo ${dataTechnoElement.name}`} 
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default CarouselDescTechno;