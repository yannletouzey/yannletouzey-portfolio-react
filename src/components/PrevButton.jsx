const PrevButton = () => {
    return (
        <button id="prev" className="button__prev button__btn">
            <svg id="square-prev" className="square" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 51H1V26V1H51V51Z" stroke="#ceafaf" stroke-width="1"/>
            </svg>
            <svg id="arrow-prev" className="arrow" width="62" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-7.6294e-06 12H22.5714H45.1429V2L60 12L45.1429 22V17.6958" stroke="#ceafaf" stroke-width="1"/>
            </svg>
        </button>
    )
}
export default PrevButton;