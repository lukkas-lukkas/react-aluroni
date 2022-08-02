import React from "react";
import filters from "./filters.json";
import styles from './Filters.module.scss';

interface IFilter {
    label: string,
    id: number,
}

interface Props {
  activeFilter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ activeFilter, setFilter }: Props) {

  function selectFilter(filter: IFilter) {
    if (filter.id === activeFilter) return setFilter(null);
    setFilter(filter.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map(filter => (
        <button
          className={`${styles.filters__item} ${activeFilter === filter.id ? styles['filters__item--active'] : ''}`}
          key={filter.id} 
          onClick={() => selectFilter(filter)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
