// dependencies
import { Link } from 'react-router-dom';

// hooks and dependencies
import { Helmet } from 'react-helmet';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <section className='initial'>
      <Helmet>
        <style>{"body { background-color: #3874ff; }"}</style>
      </Helmet>
      <img src="logo-clear.svg" alt="Logo AdoPet" />
      <h3>Boas-vindas!</h3>
      <p>
        {matches ? 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!' : 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!'}
      </p>
      <div className='home__buttons'>
        <Link className='button' to='/login'>Já tenho conta
        </Link>
        <Link className='button' to='/cadastro'>Quero me cadastrar
        </Link>
      </div>
    </section>
  );
};

export default Home;