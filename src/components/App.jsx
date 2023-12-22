import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import ScreenStart from './ScreenStart'
import EasyMailing from './EasyMailing';
import EasyTimeClock from './EasyTimeClock';
import dataCarousel from '../assets/data/dataCarousel.js';

function App() {
  return (
    <Router>
      <ScreenStart />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/easy-mailing" element={<EasyMailing descSmall={dataCarousel} />} />
        <Route path="/easy-time-clock" element={<EasyTimeClock descSmall={dataCarousel} />} />
      </Routes>
    </Router>
  )
}

export default App
