import linkedInLogo from '../assets/img/logos/linkedin.png';
import githubLogo from '../assets/img/logos/github.png';
import twitterLogo from '../assets/img/logos/logo-x.png';

const Header = () => {
    return (
        <header className="header">
            <h2 id="header__title" className="header__title">
                <span id="header__title--firstname" className="header__title--firstname">Yann</span>
                <span id="header__title--lastname" className="header__title--lastname">Letouzey</span>
            </h2>
            <div id="header__container" className="header__container">
                <button className="header__burger" id="header__burger"><span></span></button>
            </div>
            <menu id="header__menu" className="header__menu">
                <div id="cube-one" className="header__menu--cube">
                    <div className="face front"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                    <div className="face back"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                    <div className="face left"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                    <div className="face right"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                    <div className="face top"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                    <div className="face bottom"><a href="https://www.linkedin.com/in/yann-letouzey-84374524b/" target="_blank" rel="noopener noreferrer"><img src="./img/logos/linkedin.png" alt="Logo LinkedIn"/></a></div>
                </div>
                <div id="cube-two" className="header__menu--cube">
                    <div className="face front"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                    <div className="face back"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                    <div className="face left"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                    <div className="face right"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                    <div className="face top"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                    <div className="face bottom"><a href="https://github.com/yannletouzey" target="_blank" rel="noopener noreferrer"><img src="./img/logos/github.png" alt="Logo GutHub"/></a></div>
                </div>
                <div id="cube-three" className="header__menu--cube">
                    <div className="face front"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                    <div className="face back"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                    <div className="face left"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                    <div className="face right"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                    <div className="face top"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                    <div className="face bottom"><a href="https://twitter.com/yzey940" target="_blank" rel="noopener noreferrer"><img src="./img/logos/logo-x.png" alt="Logo x"/></a></div>
                </div>
            </menu>
        </header>
    )
}
export default Header;