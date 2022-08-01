import { ReactComponent as Logo } from "assets/logo.svg";
import style from "./Menu.module.scss";

export default function Menu() {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
        </main>
    );
}
