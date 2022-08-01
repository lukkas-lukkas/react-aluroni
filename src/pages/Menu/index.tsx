import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import style from "./Menu.module.scss";
import Search from "./Search";
import Filters from "./Filters";

export default function Menu() {
    const [search, setSearch] = useState("");

    return (
        <main>
            <nav className={style.container}>
                <Logo />
            </nav>
            <header className={style.header}>
                <div className={`${style.header__text} ${style.container}`}>
                    Great code and spaghetti
                </div>
            </header>
            <section className={`${style.menu} ${style.container}`}>
                <h3 className={style.menu__title}>Menu</h3>
                <Search search={search} setSearch={setSearch} />
                <div className={style.menu__filters}>
                    <Filters />
                </div>
            </section>
        </main>
    );
}
