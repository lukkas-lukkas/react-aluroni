import { useParams, useNavigate } from 'react-router-dom';
import style from './Dish.module.scss';
import theme from 'styles/Theme.module.scss';
import menuItens from 'data/menu-itens.json';
import NotFound from 'pages/NotFound';

export default function Dish() {
  const navigate = useNavigate();

  const { id } = useParams();

  const dish: typeof menuItens[0] | undefined = menuItens.find(item => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <>
      <div className={theme.container}>
        <button className={style.back} onClick={() => navigate(-1)}>
          {'< Back'}
        </button>
        <h1 className={theme.pageTitle}>
          {dish.title}
        </h1>
        <div className={style.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={style.content}>
          <p className={style.content__description}>
            {dish.description}
          </p>
        </div>
        <div className={style.tags}>
          <div className={`${style.tags__type} ${style[`tags__type__${dish.category.label.toLowerCase()}`]}`}>
            {dish.category.label}
          </div>
          <div className={style.tags__portion}>
            {dish.size}g
          </div>
          <div className={style.tags__qttpeople}>
            Serve {dish.serving} pessoa{dish.serving === 1 ? '' : 's'}
          </div>
          <div className={style.tags__value}>
            R${dish.price.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
}
