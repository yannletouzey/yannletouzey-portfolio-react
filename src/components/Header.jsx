import { useEffect, useRef, useState } from 'react';
import linkedInLogo from '../assets/img/logos/linkedin.png';
import githubLogo from '../assets/img/logos/github.png';
import twitterLogo from '../assets/img/logos/logo-x.png';
import Burger from './Burger';
import CubeContact from './CubeContact';

const Header = () => {
    const [stateContactAppear, setStateContactAppear] = useState('is-closed');
    const menuRef = useRef();

    return (
        <header className="header">
            <h2 id="header__title" className="header__title">
                <span id="header__title--firstname" className="header__title--firstname">Yann</span>
                <span id="header__title--lastname" className="header__title--lastname">Letouzey</span>
            </h2>
            <Burger stateContactAppear={stateContactAppear} setStateContactAppear={setStateContactAppear} menuRef={menuRef} />
            <menu id="header__contact" className={`header__contact ${stateContactAppear}`} ref={menuRef}>
                <CubeContact 
                    id="cube-one" 
                    link="link" 
                    logo={linkedInLogo} 
                    alt="Logo LinkedIn"
                />
                <CubeContact 
                    id="cube-two" 
                    link="link" 
                    logo={githubLogo} 
                    alt="Logo GutHub"
                />
                <CubeContact 
                    id="cube-three" 
                    link="link" 
                    logo={twitterLogo} 
                    alt="Logo Twitter"
                />
            </menu>
        </header>
    )
}
export default Header;