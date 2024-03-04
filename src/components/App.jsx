import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main'
import ScreenStart from './ScreenStart/index.jsx'
import EasyMailing from './Main/DetailsPages/EasyMailing.jsx';
import EasyTimeClock from './Main/DetailsPages/EasyTimeClock.jsx';
import CirclePortfolio from './Main/DetailsPages/CirclePortfolio.jsx';
import dataCarousel from '../assets/data/dataCarousel.js';

const App = () => {

  const [currentValue, setCurrentValue] = useState(1);
  const [titleCurrent, setTitleCurrent] = useState("");
  const [screenWidthIsMobile, setScreenWidthIsMobile] = useState(window.innerWidth <= 800);
  const [agentUserIsMobile, setAgentUserIsMobile] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [screenNotCompatible, setScreenNotCompatible] = useState(screenWidthIsMobile || agentUserIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidthIsMobile(window.innerWidth <= 800);
      setAgentUserIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      setScreenNotCompatible(screenWidthIsMobile || agentUserIsMobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidthIsMobile, agentUserIsMobile]);

  useEffect(() => {
    document.title = titleCurrent;
    if (location.pathname !== '/') {
      setCurrentValue(1);
    }
  }, [titleCurrent]);

  return (
    <>
      <ScreenStart />
      <Header />
      <Routes>
        <Route path="/" element={<Main setTitleCurrent={setTitleCurrent} currentValue={currentValue} setCurrentValue={setCurrentValue} screenNotCompatible={screenNotCompatible} />} />
        <Route path='/circle-portfolio' element={<CirclePortfolio setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
        <Route path="/easy-mailing" element={<EasyMailing setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
        <Route path="/easy-time-clock" element={<EasyTimeClock setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
      </Routes>
    </>
  )
}

export default App
