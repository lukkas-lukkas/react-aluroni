import filters from "./filters.json";
import styles from './Filters.module.scss';

interface IFilter {
    label: string,
    id: number,
}

export default function Filters() {

  function selectFilter(filter: IFilter) {
    alert(filter.label);
  }

  return (
    <div className={styles.filters}>
      {filters.map(filter => (
        <button className={styles.filters__item} key={filter.id} onClick={() => selectFilter(filter)}>
          {filter.label}
        </button>
      ))}
    </div>
  )
}
