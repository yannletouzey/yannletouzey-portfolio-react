import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main'
import ScreenStart from './ScreenStart/index.jsx'
import dataCarousel from '../assets/data/dataCarousel.js';
import DetailsPage from "./Main/DetailsPages/index.jsx";

import Canvas from './Canvas/index.jsx';
import Footer from './Footer/index.jsx';

const App = () => {

  const [currentValue, setCurrentValue] = useState(1);
  const [titleCurrent, setTitleCurrent] = useState("");
  const [screenWidthIsMobile, setScreenWidthIsMobile] = useState(window.innerWidth <= 800);
  const [agentUserIsMobile, setAgentUserIsMobile] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [screenNotCompatible, setScreenNotCompatible] = useState(screenWidthIsMobile || agentUserIsMobile);

  const degValue = 90;
  const [degreesValue, setDegreesValue] = useState(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
  }

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
    <div onMouseMove={handleMouseMove}>
      <ScreenStart />
      <Header />
      <Routes>
        <Route path="/" element={<Main setTitleCurrent={setTitleCurrent} degValue={degValue} currentValue={currentValue} setCurrentValue={setCurrentValue} screenNotCompatible={screenNotCompatible} degreesValue={degreesValue} setDegreesValue={setDegreesValue} mousePos={mousePos} />} />
        <Route path='/:project' element={<DetailsPage setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
      </Routes>
      <Footer />  
    </div>
  )
}
export default App