import menuItens from 'data/menu-itens.json';
import style from './Home.module.scss';
import theme from 'styles/Theme.module.scss';
import Header from 'components/Header';

export default function Home() {
  let recommendations = [...menuItens];
  
  recommendations = recommendations.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <>
      <Header text='Welcome to Aluroni'/>

      <section className={theme.container}>
        <h3 className={style.title}>Recommendations</h3>
        <div className={style.recommendeds}>
          {recommendations.map(recommendation => (
            <div key={recommendation.id} className={style.recommended}>
              <div className={style.recommended__image}>
                <img src={recommendation.photo} alt={recommendation.title} />
              </div>
              <button className={style.recommended__button}>See more</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
