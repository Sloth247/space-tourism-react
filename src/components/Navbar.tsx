import Logo from './Logo';
import MenuBtn from './MenuBtn';
import './Navbar.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function navbar({ pageName }: { pageName: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    setExpanded(!expanded);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // if (expanded && ref.current && !ref.current.contains(e.target)) {
      //   setClicked(false);
      //   setExpanded(false);
      // }
    };
    const closeMenu = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        setClicked(false);
        setExpanded(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickedOutside);
    window.addEventListener('keydown', closeMenu);

    return () => {
      window.removeEventListener('mousedown', checkIfClickedOutside);
      window.removeEventListener('keydown', closeMenu);
    };
  }, [clicked]);

  return (
    <nav className="nav">
      <Logo />
      <MenuBtn handleClick={handleClick} expanded={expanded} />
      <div
        className={!expanded ? 'nav__container' : 'nav__container active'}
        id="menu-container"
        ref={ref}
      >
        <ul className="nav__menu">
          <li className={pageName === '/' ? 'active' : ''}>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li className={pageName === '/destination' ? 'active' : ''}>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li className={pageName === '/crew' ? 'active' : ''}>
            <Link to="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li className={pageName === '/technology' ? 'active' : ''}>
            <Link to="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
