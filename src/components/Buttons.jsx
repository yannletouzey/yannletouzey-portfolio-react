import { useRef } from "react";
const Buttons = ({prevRef, nextRef, handleClick}) => {
    
    return (
        <div className="button">
            <button id="prev" className="button__prev button__btn" ref={prevRef} onClick={handleClick}>
                <svg id="square-prev" className="square prev" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 51H1V26V1H51V51Z" stroke="#ceafaf" strokeWidth="1"/>
                </svg>
                <svg id="arrow-prev" className="arrow prev" width="62" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-7.6294e-06 12H22.5714H45.1429V2L60 12L45.1429 22V17.6958" stroke="#ceafaf" strokeWidth="1"/>
                </svg>
            </button>
            <button id="next" className="button__next button__btn" ref={nextRef} onClick={handleClick}>
                <svg id="square-next" className="square next" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 51H1V26V1H51V51Z" stroke="#ceafaf" strokeWidth="1"/>
                </svg>
                <svg id="arrow-next" className="arrow next" width="62" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-7.6294e-06 12H22.5714H45.1429V2L60 12L45.1429 22V17.6958" stroke="#ceafaf" strokeWidth="1"/>
                </svg>
            </button>
        </div>
    )
}
export default Buttons;