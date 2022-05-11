import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export default function Logo() {
  return (
    <Link to="/" className="logo-container">
      <img src={logo} alt="space tourism" />
    </Link>
  );
}
