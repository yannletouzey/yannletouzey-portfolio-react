import { useEffect, useRef, useState } from 'react';
import linkedInLogo from '../assets/img/logos/linkedin.png';
import githubLogo from '../assets/img/logos/github.png';
import twitterLogo from '../assets/img/logos/logo-x.png';
import Burger from './Burger';
import CubeContact from './CubeContact';
import { Link } from 'react-router-dom';

const Header = () => {
    const [stateContactAppear, setStateContactAppear] = useState('is-closed');
    const [stateFirstname, setStateFirstname] = useState('firstnameShow');
    const [stateLastname, setStateLastname] = useState('lastnameShow');

    return (
        <header className="header">
            <Link to="/" id="header__title" className="header__title">
                <span id="header__title--firstname" className={`header__title--firstname ${stateFirstname}`}>Yann</span>
                <span id="header__title--lastname" className={`header__title--lastname ${stateLastname}`}>Letouzey</span>
            </Link>
            <Burger 
                stateContactAppear={stateContactAppear} 
                setStateContactAppear={setStateContactAppear} 
                stateFirstname={stateFirstname}
                setStateFirstname={setStateFirstname}
                stateLastname={stateLastname}
                setStateLastname={setStateLastname}
            />
            <menu id="header__contact" className={`header__contact ${stateContactAppear}`}>
                <CubeContact 
                    id="cube-one" 
                    link="https://www.linkedin.com/in/yann-letouzey-84374524b/" 
                    logo={linkedInLogo} 
                    alt="Logo LinkedIn"
                />
                <CubeContact 
                    id="cube-two" 
                    link="https://github.com/yannletouzey" 
                    logo={githubLogo} 
                    alt="Logo GutHub"
                />
                <CubeContact 
                    id="cube-three" 
                    link="https://twitter.com/home" 
                    logo={twitterLogo} 
                    alt="Logo Twitter"
                />
            </menu>
        </header>
    )
}
export default Header;