import React from 'react'
import './index.scss';
import dataCarousel from '../../../assets/data/dataCarousel.js';
export default function MainSmallScreen() {
  return (
    <section id="container" className="container">
      <p className="main__text">Ce site n'est pas compatible avec cette appareil<br/><br/>Incompatible Safari</p>
      {/* {dataCarousel.map((dataCarouselElement, index) => {
        return (
          <div className="container__face--face" key={index} style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
            <div className="container__face--img">
              <img src={dataCarouselElement.imgUrl} alt="" />
            </div>
            <p>{dataCarouselElement.id}</p>
          </div>
          // <div 
          //   className="container__carousel--face" 
          //   key={index} 
          //   id={`${dataCarouselElement.id}`} 
          //   ref={faceRef[index]}
          // >
          //   <div 
          //     className="container__carousel--img" 
          //     key={`container__carousel--img-${dataCarouselElement.id}`} 
          //     onMouseMove={handleMouseEnter} 
          //     onMouseLeave={handleMouseLeave} 
          //   >
          //     <img 
          //       ref={imgRef} 
          //       src={dataCarouselElement.imgUrl} 
          //       alt={dataCarouselElement.alt} 
          //     />
          //   </div>
          //   <CarouselDesc 
          //     dataCarouselElement={dataCarouselElement} 
          //   />
          // </div>
        )
      })} */}
    </section>
  )
}
