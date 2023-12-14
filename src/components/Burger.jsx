import { useEffect, useState, useRef } from "react";

const Burger = ({stateContactAppear, setStateContactAppear, stateFirstname, setStateFirstname, stateLastname, setStateLastname}) => {
    const [stateBurgerContainer, setStateBurgerContainer] = useState('is-closed');
    const [stateBurger, setStateBurger] = useState('is-closed');
    const [resize, setResize] = useState(window.innerWidth);

    const burgerRef = useRef();

    const handleResize = () => {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (resize >= 800) {
            setStateContactAppear('is-opened');
            setStateBurger('is-closed');
            setStateBurgerContainer('is-closed');
            setStateFirstname('firstnameShow');
            setStateLastname('lastnameShow');
        } else {
            if (stateBurger === 'is-closed') {
                setStateContactAppear('is-closed');
                setStateFirstname('firstnameShow');
                setStateLastname('lastnameShow');
            }
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const handleClick = () => {
        stateBurgerContainer === 'is-closed' ? setStateBurgerContainer('is-opened') : setStateBurgerContainer('is-closed');
        stateBurger === 'is-closed' ? setStateBurger('is-opened') : setStateBurger('is-closed');
        stateContactAppear === 'is-opened' ? setStateContactAppear('is-closed') : setStateContactAppear('is-opened');
        stateLastname === 'lastnameShow' ? setStateLastname('lastnameHide') : setStateLastname('lastnameShow');
        stateFirstname === 'firstnameShow' ? setStateFirstname('firstnameHide') : setStateFirstname('firstnameShow');
    }

    useEffect(() => {
    }, [stateBurger])

    return (
        <div
            id="header__burger" 
            className={`header__burger ${stateBurgerContainer}`} 
            ref={burgerRef} 
            onClick={handleClick}
        >
            <button 
                id="header__burger__button" 
                className={`header__burger__button ${stateBurger}`}
            >
                <span></span>
            </button>
        </div>
    )
}
export default Burger;