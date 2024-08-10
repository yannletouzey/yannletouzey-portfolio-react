import { Link } from 'react-router-dom';
import './index.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:yzey940@gmail.com" className='footer__contact'>Contact email</a>
      <Link to="/about" className='footer__contact'>A propos</Link>
      <Link to="/projects" className='footer__project'>Autres projets</Link>
    </footer>
  )
}
