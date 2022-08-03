import style from './Item.module.scss';
import itens from 'data/menu-itens.json';

type Props = typeof itens[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={style.item}>
      <div className={style.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__description}>
        <div className={style.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={`${style.item__tags} ${style[`item__type__${category.label.toLocaleLowerCase()}`]}`}>
          <div className={style.item__type}>{category.label}</div>
          <div className={style.item__portion}>{size}g</div>
          <div className={style.item__qttpeoples}>{serving} pessoa{serving === 1 ? '' : 's'}</div>
          <div className={style.item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
