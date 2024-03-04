import { useEffect, useRef } from "react";
import dataEasyTimeClock from "../../../assets/data/dataEasyTimeClock.js";
import Footer from "../../Footer/index.jsx";
import './index.scss';

const EasyTimeClock = ( { descSmall, setTitleCurrent } ) => {
  const desc = descSmall.filter((d) => d.page === "/easy-time-clock");
  const cardRef = dataEasyTimeClock.map(() => useRef());
  useEffect(() => {
    setTitleCurrent("Yann Letouzey - Projet Easy Time Clock");
    let sizeScreen = window.innerWidth;
    let heightScreen = window.innerHeight;
    let topTriggerScreen = heightScreen - (heightScreen / 3) * 2;
    let bottomTriggerScreen = heightScreen - heightScreen / 3;

    cardRef.forEach((c, index) => {
      const card = c.current;
      const boxDesc = card.children[1];
      const boxImg = card.children[0];
      const img = boxImg.children[0];
      if (sizeScreen <= 600) {
        boxImg.style.transform = 'rotateY(0deg)';
        boxDesc.style.padding = '1rem';
        boxDesc.style.backgroundColor = 'transparent';
        boxDesc.style.boxShadow = 'none';
        img.style.boxShadow = 'none';
      }
      addEventListener('resize', () => {
        if (sizeScreen <= 600) {
          boxImg.style.transform = 'rotateY(0deg)';
          boxDesc.style.backgroundColor = 'transparent';
          boxDesc.style.boxShadow = 'none';
          img.style.boxShadow = 'none';
        }
      })

      addEventListener('scroll', () => {
        let middleCard = card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2;
        addEventListener('resize', () => {
          sizeScreen = window.innerWidth;
          middleCard = card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2;
        })
        if (sizeScreen >= 600) {
          if (middleCard >= topTriggerScreen && middleCard <= bottomTriggerScreen) {
            boxDesc.style.transitionDelay = '0.2s'
            boxDesc.style.transitionDuration = '0.5s'
            boxDesc.style.backgroundColor = '#3d3c3c'
            boxDesc.style.boxShadow = `0px 0px 15px 20px rgba(60, 60, 60, 1)`;
            img.style.transitionDuration = '0.2s';
            let sideBoxShadow = "";
            img.style.backgroundColor = 'transparent'
            if (index % 2 === 0) {
              boxImg.style.transform = 'rotateY(-20deg)';
            } else {
              boxImg.style.transform = 'rotateY(20deg)';
              sideBoxShadow = "-";
            }
            img.style.boxShadow = `${sideBoxShadow}8px 0px 0px -0.5px rgba(70, 70, 70, 1)`;
          } else {
            boxDesc.style.transitionDelay = '0'
            boxDesc.style.transitionDuration = '0.2s'
            boxDesc.style.backgroundColor = 'transparent'
            boxImg.style.transform = 'rotateY(0)';
            boxDesc.style.boxShadow = `0 0 0 0 rgba(60, 60, 60, 0)`;
            img.style.boxShadow = `0 0 0 0 rgba(70, 70, 70, 0)`;
          }
        } else {
          boxDesc.style.transitionDelay = '0'
          boxDesc.style.transitionDuration = '0.2s'
          boxDesc.style.backgroundColor = 'transparent'
          boxImg.style.transform = 'rotateY(0)';
          boxDesc.style.boxShadow = `0 0 0 0 rgba(60, 60, 60, 0)`;
          img.style.boxShadow = `0 0 0 0 rgba(70, 70, 70, 0)`;
        }
      })
    })
  }, [])
  return (
    <>
      <main className="main">
        <div className="main__description">
          {desc.map(d => d.descSmall)}
          {/* <button className="main__description--button" onClick={handleDescription}></button> */}
        </div>
        <div className="main__container">
          {dataEasyTimeClock.map((data, index) => (
            <div className="main__container--card card" key={`container__container--card-${index}`} ref={cardRef[index]}>
              <div className="main__container--card--containerImg">
                <img src={data.img} alt={data.alt} />
              </div>
              <div className="main__container--card--containerDesc">{data.desc}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
export default EasyTimeClock;