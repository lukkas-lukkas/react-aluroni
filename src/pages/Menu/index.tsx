import { useState } from 'react';
import style from './Menu.module.scss';
import Search from './Search';
import Filters from './Filters';
import OrderBy from './OrderBy';
import Itens from './Itens';
import theme from 'styles/Theme.module.scss';
import Header from 'components/Header';

export default function Menu() {
  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState<number | null>(null);

  const [orderby, setOrderBy] = useState('');

  return (
    <main>
      <Header text='Great code and spaghetti'/>
      
      <section className={`${style.menu} ${theme.container}`}>
        <h3 className={theme.pageTitle}>Menu</h3>
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
