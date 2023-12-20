import CarouselDescTechno from "./CarouselDescTechno.jsx";
import CarouselDescLink from "./CarouselDescLink.jsx";
import { Link } from "react-router-dom";

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
            {dataCarouselElement.descSmall && <Link to={dataCarouselElement.page} className="container__carousel--desc--more"></Link>}
        </div>
    )
}
export default CarouselDesc;