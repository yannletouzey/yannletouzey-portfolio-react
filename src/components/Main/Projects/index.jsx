import React, { useEffect } from 'react'
import './index.scss';
export default function Projects({ setTitleCurrent }) {

  useEffect(() => {
    setTitleCurrent("Projets divers");
  }, []);

  return (
    <section id="container" className="container">
      <ul className="container__projects" style={{ listStyle: 'none', width: '100%'}}>
        <li className='container__project'>
          <a href="https://visual-padding-margin-css.vercel.app/" target="_blank" rel="noopener noreferrer">visual-padding-margin-css</a>
        </li>
        <li className='container__project'>
          <a href="https://cube-wave.vercel.app" target="_blank" rel="noopener noreferrer">cube-wave</a>
        </li>
        <li className='container__project'>
          <a href="https://cube-in-cube.vercel.app" target="_blank" rel="noopener noreferrer">cube-in-cube</a>
        </li>
        <li className='container__project'>
          <a href="https://build-cube-css.vercel.app" target="_blank" rel="noopener noreferrer">build-cube-css</a>
        </li>
        <li className='container__project'>
          <a href="https://trouve-ta-ville-blond.vercel.app/" target="_blank" rel="noopener noreferrer">trouve-ta-ville</a>
        </li>
        <li className='container__project'>
          <a href="https://fun-with-flags-js.vercel.app/" target="_blank" rel="noopener noreferrer">fun-with-flags</a>
        </li>
        <li className='container__project'>
          <a href="https://visual-flexbox.vercel.app" target="_blank" rel="noopener noreferrer">visual-flexbox</a>
        </li>
        <li className='container__project'>
          <a href="https://visual-flexbox.vercel.app/" target="_blank" rel="noopener noreferrer">3d-car</a>
        </li>
        <li className='container__project'>
          <a href="https://3d-clock-beta.vercel.app" target="_blank" rel="noopener noreferrer">3d-clock</a>
        </li>
        <li className='container__project'>
          <a href="https://btn-animation-ten.vercel.app/" target="_blank" rel="noopener noreferrer">3d-button</a>
        </li>
      </ul>
    </section>
  )
}
