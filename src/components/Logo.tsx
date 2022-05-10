import { Link } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';

export default function logo() {
  return (
    <Link to="/" className="logo-container">
      <img src={Logo} alt="space tourism" />
    </Link>
  );
}
