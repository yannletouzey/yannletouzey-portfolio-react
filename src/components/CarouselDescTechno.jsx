import React from "react";
import technoImg from "../assets/data/dataTechno";

const CarouselDescTechno = ({ src }) => {
    return (
        React.createElement('div', {
            className: 'container__carousel--desc--techno',
            key: `container__carousel--desc--techno-`
        }, technoImg.map((dataTechnoElement, index) => {
            if (src[dataTechnoElement.name]) {
                return React.createElement('div', {
                    style: {
                        color: dataTechnoElement.color,
                        '--after-content': "'" + dataTechnoElement.name + "'"
                    },
                    className: 'container__carousel--desc--techno--img',
                    key: `container__carousel--desc--techno--img-${dataTechnoElement.name}`
                }, React.createElement('img', {
                    src: src[dataTechnoElement.name],
                    alt: `Logo ${dataTechnoElement.name}`
                }))
            }
        }))
    )
}
export default CarouselDescTechno;