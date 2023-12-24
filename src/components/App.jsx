import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './Header'
import Main from './Main'
import ScreenStart from './ScreenStart'
import EasyMailing from './EasyMailing';
import EasyTimeClock from './EasyTimeClock';
import dataCarousel from '../assets/data/dataCarousel.js';
import home from '../assets/img/easy-mailing/home.png'
const App = () => {
  const [currentValue, setCurrentValue] = useState(1);
  const bgImageRef = useRef();
  const [titleCurrent, setTitleCurrent] = useState("");
  useEffect(() => {
      document.title = titleCurrent;
      console.log(dataCarousel);
  }, [titleCurrent]);

  useEffect(() => {
    bgImageRef.current.style.backgroundImage = `url(${dataCarousel[currentValue - 1].imgUrl})`;
  }, [currentValue]);
  return (
    <Router>
      <div className="bg-image" ref={bgImageRef}></div>
      <ScreenStart />
      <Header />
      <Routes>
        <Route path="/" element={<Main setTitleCurrent={setTitleCurrent} currentValue={currentValue} setCurrentValue={setCurrentValue} />} />
        <Route path="/easy-mailing" element={<EasyMailing setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
        <Route path="/easy-time-clock" element={<EasyTimeClock setTitleCurrent={setTitleCurrent} descSmall={dataCarousel} />} />
      </Routes>
    </Router>
  )
}

export default App
