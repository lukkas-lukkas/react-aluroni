import style from './NotFound.module.scss';
import theme from 'styles/Theme.module.scss';
import { ReactComponent as Img } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={`${style.notFound} ${theme.container}`}>      
      <div className={style.back}>
        <button onClick={() => navigate(-1)}>
          {'< Back'}
        </button>
      </div>
      <Img />
    </div>
  );
}
