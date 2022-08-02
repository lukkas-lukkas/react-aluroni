import React from 'react';
import style from './Itens.module.scss';
import itens from './itens.json';
import Item from './Item';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    orderBy: string,
}

export default function Itens({ search, filter, orderBy }: Props) {
  const [list, setList] = useState(itens);

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof itens) {
    switch(orderBy) {
    case 'portion': 
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtt_people':
      return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'price':
      return newList.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return newList; 
    }
  }

  useEffect(() => {
    const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(order(newList));
    console.log('SEARCH', search);
  }, [search, filter, orderBy]);

  return (
    <div className={style.itens}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
