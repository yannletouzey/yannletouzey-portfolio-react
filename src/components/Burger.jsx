import { useEffect, useState, useRef } from "react";

const Burger = ({stateContactAppear, setStateContactAppear, menuRef}) => {
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
        } else {
            if (stateBurger === 'is-closed') {
                setStateContactAppear('is-closed');
                // menuRef.current.style.transform = `translateX(0)`;
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
    }

    useEffect(() => {
        const offset = menuRef.current.clientWidth;
        if (stateBurger === 'is-opened') {
            // burgerRef.current.style.transform = `translateX(-${offset + 20}px)`;
            // menuRef.current.style.transform = `translateX(-${offset}px)`;
        } else {
            // burgerRef.current.style.transform = `translateX(0)`;
            // menuRef.current.style.transform = `translateX(0)`;
        }
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