import style from './OrderBy.module.scss';
import options from './options.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    orderBy: string,
    setOrderBy: React.Dispatch<React.SetStateAction<string>>
}

export default function OrderBy({ orderBy, setOrderBy }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const orderByName = orderBy && options.find(option => option.value === orderBy)?.name;

  return (
    <button
      className={`${style.orderby} ${orderBy !== '' ? style['orderby--active'] : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{orderByName || 'Order by'}</span>
      {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={`${style.orderby__options} ${isOpen ? style['orderby__options--active'] : ''}`}>
        {options.map(option => (
          <div className={style.orderby__option} key={option.value} onClick={() => setOrderBy(option.value)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
