import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import style from "./Menu.module.scss";
import Search from "./Search";
import Filters from "./Filters";
import OrderBy from "./OrderBy";
import Itens from "./Itens";

export default function Menu() {
    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState<number | null>(null);

    const [orderby, setOrderBy] = useState('');

    return (
        <main>
            <nav className={`${style.container} ${style.nav}`}>
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
                    <Filters activeFilter={filter} setFilter={setFilter}/>
                    <OrderBy orderBy={orderby} setOrderBy={setOrderBy}/>
                </div>
                <Itens search={search} filter={filter} orderBy={orderby} />
            </section>
        </main>
    );
}
