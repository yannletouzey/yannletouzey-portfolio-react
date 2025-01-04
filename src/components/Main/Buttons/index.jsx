import './index.scss';
import { useStore } from '../../../../store';
import { useEffect } from 'react';
import dataCarousel from '../../../assets/data/dataCarousel';
import { useLocation } from 'react-router-dom';

const Buttons = ({prevRef, nextRef, handleClick}) => {
  const location = useLocation().pathname;
  const { currentValue } = useStore();
  useEffect(() => {
    if (location === "/") {
      if (prevRef.current && nextRef.current) {
        if (currentValue <= 1) {
          prevRef.current.style.opacity = 0;
          prevRef.current.style.cursor = 'default';
          prevRef.current.style.scale = '0';
          prevRef.current.style.transition = `opacity 0, scale 0`;
        } else {
          prevRef.current.style.opacity = 1;
          prevRef.current.style.cursor = 'pointer';
          prevRef.current.style.scale = '1';
          prevRef.current.style.transition = `opacity 0.5s ease-in-out, scale 0.5s ease-in-out`;
        }
        if (currentValue === dataCarousel.length) {
          nextRef.current.style.opacity = 0;
          nextRef.current.style.cursor = 'default';
        } else {
          nextRef.current.style.opacity = 1;
          nextRef.current.style.cursor = 'pointer';
          nextRef.current.style.transition = `opacity 0.5s ease-in-out, scale 0.5s ease-in-out`;
        } 
        
      }
    }   
  }, [currentValue]);
  return (
    <div className="button">
      <button 
        id="prev" 
        className="button__prev button__btn" 
        ref={prevRef} 
        onClick={handleClick}
      >
        <svg 
          id="square-prev" 
          className="square prev" 
          width="52" 
          height="52" 
          viewBox="0 0 52 52" 
          fill="none" 
        >
          <path 
            d="M51 51H1V26V1H51V51Z" 
            stroke="#ceafaf" 
            strokeWidth="1"
          />
        </svg>
        <svg id="arrow-prev" 
          className="arrow prev" 
          width="62" 
          height="24" 
          viewBox="0 0 67 24" 
          fill="none" 
        >
          <path 
            d="M-7.6294e-06 12H22.5714H45.1429V2L60 12L45.1429 22V17.6958" 
            stroke="#ceafaf" 
            strokeWidth="1"
          />
        </svg>
      </button>
      <button 
        id="next" 
        className="button__next button__btn" 
        ref={nextRef} 
        onClick={handleClick}
      >
        <svg 
          id="square-next" 
          className="square next" 
          width="52" 
          height="52" 
          viewBox="0 0 52 52" 
          fill="none" 
        >
          <path 
            d="M51 51H1V26V1H51V51Z" 
            stroke="#ceafaf" 
            strokeWidth="1"
          />
        </svg>
        <svg 
          id="arrow-next" 
          className="arrow next" 
          width="62" 
          height="24" 
          viewBox="0 0 67 24" 
          fill="none" 
        >
          <path 
            d="M-7.6294e-06 12H22.5714H45.1429V2L60 12L45.1429 22V17.6958" 
            stroke="#ceafaf" 
            strokeWidth="1"
          />
        </svg>
      </button>
    </div>
  )
}
export default Buttons;