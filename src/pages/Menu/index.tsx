import { ReactComponent as Logo } from "assets/logo.svg";
import style from "./Menu.module.scss";

export default function Menu() {
    return (
        <main>
            <nav className={`${style.menu} container`}>
                <Logo />
            </nav>
            <header className={style.header}>
                <div className={`${style.header__text} container`}>
                    Great code and spaghetti
                </div>
            </header>
        </main>
    );
}
