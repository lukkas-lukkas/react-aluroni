import style from './Nav.module.scss';
import theme from 'styles/Theme.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
  const routes = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Menu',
      to: '/menu',
    }
  ];

  return (
    <nav className={`${theme.container} ${style.nav}`}>
      <Logo />
      <ul className={style.nav__list}>
        {routes.map((route, index) => (
          <li key={index} className={style.nav__link}>
            <Link to={route.to}> 
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
