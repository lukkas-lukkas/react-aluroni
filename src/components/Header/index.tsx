import style from './Header.module.scss';
import theme from 'styles/Theme.module.scss';

export default function Header({ text }: { text: string }) {
  return (
    <header className={style.header}>
      <div className={`${style.header__text} ${theme.container}`}>
        {text}
      </div>
    </header>
  );
}
