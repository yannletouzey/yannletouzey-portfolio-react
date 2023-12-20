import { useEffect, useRef } from "react";
import dataEasyMailing from "../assets/data/dataEasyMailing.js";
const EasyMailing = ( { descSmall }) => {
    const desc = descSmall.filter((d) => d.page === "/easy-mailing");
    const cardRef = dataEasyMailing.map(() => useRef());
    useEffect(() => {

        let sizeScreen = window.innerWidth;
        let heightScreen = window.innerHeight;
        let topTriggerScreen = heightScreen - (heightScreen / 3) * 2;
        let bottomTriggerScreen = heightScreen - heightScreen / 3;

        cardRef.forEach((c, index) => {
            const card = c.current;
            const boxDesc = card.children[1];
            const boxImg = card.children[0];
            const img = boxImg.children[0];
            if (index % 2 === 0) {
                card.style.flexDirection = 'row-reverse';
                boxDesc.style.paddingLeft = '3rem';
            } else {
                boxDesc.style.paddingRight = '3rem';
            }
            addEventListener('scroll', () => {
                let middleCard = card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2;
                addEventListener('resize', () => {
                    sizeScreen = window.innerWidth;
                    middleCard = card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2;
                })
                if (sizeScreen >= 800) {
                    if (middleCard >= topTriggerScreen && middleCard <= bottomTriggerScreen) {
                        boxDesc.style.transitionDelay = '0.2s'
                        boxDesc.style.transitionDuration = '0.5s'
                        boxDesc.style.backgroundColor = '#3d3c3c'
                        boxDesc.style.boxShadow = `0px 0px 15px 20px rgba(60, 60, 60, 1)`;
                        img.style.borderRadius = '2rem';
                        if (index % 2 === 0) {
                            img.style.backgroundColor = 'transparent'
                            boxImg.style.transform = 'rotateY(-20deg)';
                            img.style.boxShadow = `10px 0px 0px 0px rgba(70, 70, 70, 1)`;
                        } else {
                            img.style.backgroundColor = 'transparent'
                            boxImg.style.transform = 'rotateY(20deg)';
                            img.style.boxShadow = `-10px 0px 0px 0px rgba(70, 70, 70, 1)`;
                        }
                    } else {
                        boxDesc.style.transitionDelay = '0'
                        boxDesc.style.transitionDuration = '0.2s'
                        boxDesc.style.backgroundColor = 'transparent'
                        img.style.borderRadius = '0.5rem';
                        boxImg.style.transform = 'rotateY(0)';
                        boxDesc.style.boxShadow = `0 0 0 0 rgba(60, 60, 60, 0)`;
                        img.style.boxShadow = `0 0 0 0 rgba(70, 70, 70, 0)`;
                    }
                } else {
                    boxDesc.style.transitionDelay = '0'
                    boxDesc.style.transitionDuration = '0.2s'
                    boxDesc.style.backgroundColor = 'transparent'
                    img.style.borderRadius = '0.5rem';
                    boxImg.style.transform = 'rotateY(0)';
                }
            })
        })
    }, [])
    return (
        <main className="main">
            <div className="main__description">
                {desc.map(d => d.descSmall)}
                {/* <button className="main__description--button" onClick={handleDescription}></button> */}
            </div>
            {dataEasyMailing.map((data, index) => (
                <div className="main__container--card card" key={`container__container--card-${index}`} ref={cardRef[index]}>
                    <div className="main__container--card--containerImg">
                        <img src={data.img} alt={data.alt} />
                    </div>
                    <div className="main__container--card--containerDesc">{data.desc}</div>
                </div>
            ))}
        </main>
    )
}
export default EasyMailing;