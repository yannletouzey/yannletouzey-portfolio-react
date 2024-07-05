import React, { useEffect } from 'react'
import './index.scss';
export default function About({ setTitleCurrent }) {

  useEffect(() => {
    setTitleCurrent("A propos");
  }, []);

  return (
    <section id="container" className="container">
      <p className='container__about'>Développeur autodidacte spécialisé dans la création d'architectures back-end. Ma passion s'étend au-delà, avec un intérêt marqué pour l'intégration front-end parsemée de petites animations. Explorez mon portfolio pour découvrir une fusion réussie entre performances back-end et esthétique interactive dans des projets déjà réalisés. Certains ont été réalisés pendant ma formation adaptés à ma façon, d'autres ne sont que des tests.</p>
    </section>
  )
}
