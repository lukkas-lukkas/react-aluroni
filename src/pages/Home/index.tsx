import menuItens from 'data/menu-itens.json';
import style from './Home.module.scss';
import theme from 'styles/Theme.module.scss';
import Header from 'components/Header';
import ourHome from 'assets/our_home.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  let recommendations = [...menuItens];

  recommendations = recommendations.sort(() => 0.5 - Math.random()).splice(0, 3);

  function goToDish(dish: typeof menuItens[0]) {
    navigate(`/dish/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <>
      <Header text='Welcome to Aluroni' />

      <section className={theme.container}>
        <h3 className={theme.pageTitle}>Recommendations</h3>
        <div className={style.recommendeds}>
          {recommendations.map(recommendation => (
            <div key={recommendation.id} className={style.recommended}>
              <div className={style.recommended__image}>
                <img src={recommendation.photo} alt={recommendation.title} />
              </div>
              <button 
                className={style.recommended__button}
                onClick={() => goToDish(recommendation)}
              >
                See more
              </button>
            </div>
          ))}
        </div>

        <h3 className={theme.pageTitle}> Our Home </h3>
        <div className={style.ourHome}>
          <img src={ourHome} alt="Our home" />
          <div className={style.ourHome__address}>
            Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
          </div>
        </div>
      </section>
    </>
  );
}
