import technoImg from "../../../../assets/data/dataTechno";
import './index.scss';

const CarouselDescTechno = ({ src }) => {
  return (
    <div className="container__carousel--desc--techno" key="container__carousel--desc--techno">
      {technoImg.map((dataTechnoElement, index) => {
        if (src[dataTechnoElement.slug]) {
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
                src={src[dataTechnoElement.slug]} 
                alt={`Logo ${dataTechnoElement.slug}`} 
              />
            </div>
          )
        }
      })}
    </div>
  )
}
export default CarouselDescTechno;