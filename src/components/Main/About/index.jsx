import React, { useEffect } from 'react'
import './index.scss';
export default function About({ setTitleCurrent }) {

  useEffect(() => {
    setTitleCurrent("A propos");
  }, []);

  return (
    <section id="container" className="container">
      <p className='container__about'>Développeur web à temps perdu. <br />Explorez mon portfolio pour découvrir une fusion réussie entre performances back-end et esthétique interactive dans des projets déjà réalisés. Certains ont été réalisés pendant ma formation adaptés à ma façon, d'autres ne sont que des tests.</p>
    </section>
  )
}
