/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import dataDetailPage from '../../../assets/data/dataDetailPage';
import './index.scss';

export default function DetailsPage({ descSmall, setTitleCurrent }) {
  const detailPageCurrent = useParams();
  const desc = descSmall.filter((d) => d.page === `/${detailPageCurrent.project}`);
  const data = dataDetailPage.filter((d) => d.name === `${desc[0].title}`);
  const cardRef = data[0].data.map(() => useRef());
  
  useEffect(() => {
    setTitleCurrent(`Yann Letouzey - Projet ${desc[0].title}`);
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
  }, []);

  return (
    <main className="main">
      <div className="main__description">
        {desc.map(d => d.descSmall)}
        {/* <button className="main__description--button" onClick={handleDescription}></button> */}
      </div>
      <div className="main__container">
        {data[0].data.map((d, i) => (
          <div className="main__container--card card" key={`container__container--card-${i}`} ref={cardRef[i]}>
            <div className="main__container--card--containerImg">
              <img src={d.img} alt={d.alt} />
            </div>
            <div className="main__container--card--containerDesc">{d.desc}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
