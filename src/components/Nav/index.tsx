import style from './Nav.module.scss';
import theme from 'styles/Theme.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Nav() {
  return (
    <nav className={`${theme.container} ${style.nav}`}>
      <Logo />
    </nav>
  );
}
