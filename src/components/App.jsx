import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header'
import Main from './Main'
import ScreenStart from './ScreenStart'
import EasyMailing from './EasyMailing';
import EasyTimeClock from './EasyTimeClock';
import dataCarousel from '../assets/data/dataCarousel.js';

const App = () => {

  const [currentValue, setCurrentValue] = useState(1);
  const [titleCurrent, setTitleCurrent] = useState("");

  const [screenWidthIsMobile, setScreenWidthIsMobile] = useState(window.innerWidth <= 768);
  const [agentUserIsMobile, setAgentUserIsMobile] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const [screenNotCompatible, setScreenNotCompatible] = useState(screenWidthIsMobile || agentUserIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidthIsMobile(window.innerWidth <= 768);
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
  }, [titleCurrent]);

  return (
    <Router>
      <ScreenStart />
      <Header />
      <Routes>
        <Route path="/" element={<Main setTitleCurrent={setTitleCurrent} currentValue={currentValue} setCurrentValue={setCurrentValue} screenNotCompatible={screenNotCompatible} />} />
        <Route path="/easy-mailing" element={<EasyMailing setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
        <Route path="/easy-time-clock" element={<EasyTimeClock setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
      </Routes>
    </Router>
  )
}

export default App
