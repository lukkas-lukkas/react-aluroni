import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import theme from 'styles/Theme.module.scss';

export default function Footer() {
  return (
    <footer className={`${style.footer} ${theme.container}`}>
      <Logo />
    </footer>
  );
}
