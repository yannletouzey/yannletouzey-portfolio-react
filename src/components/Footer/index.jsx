import { Link } from 'react-router-dom';
import './index.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:yzey940@gmail.com" className='footer__contact'>Contact email</a>
      <Link to="/about" className='footer__contact'>A propos</Link>
    </footer>
  )
}
export default Footer;