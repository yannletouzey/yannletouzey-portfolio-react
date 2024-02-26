import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from './Header'
import Main from './Main'
import ScreenStart from './ScreenStart'
import EasyMailing from './EasyMailing';
import EasyTimeClock from './EasyTimeClock';
import dataCarousel from '../assets/data/dataCarousel.js';

const App = () => {
  const [currentValue, setCurrentValue] = useState(1);
  const [titleCurrent, setTitleCurrent] = useState("");
  useEffect(() => {
      document.title = titleCurrent;
  }, [titleCurrent]);

  return (
    <Router>
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
