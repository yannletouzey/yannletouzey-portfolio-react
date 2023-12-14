import { useState } from "react";

const Burger = () => {
    const [stateHeaderContainer, setStateHeaderContainer] = useState('is-closed');
    const [stateBurger, setStateBurger] = useState('is-closed');
    const handleClick = () => {
        stateHeaderContainer === 'is-closed' ? setStateHeaderContainer('is-opened') : setStateHeaderContainer('is-closed');
        stateBurger === 'is-closed' ? setStateBurger('is-opened') : setStateBurger('is-closed');
    }
    return (
        <div id="header__container" className={`header__container ${stateHeaderContainer}`} onClick={handleClick}>
            <button id="header__container__burger" className={`header__container__burger ${stateBurger}`}>
                <span></span>
            </button>
        </div>
    )
}
export default Burger;