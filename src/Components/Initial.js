// dependencies
import { Link } from 'react-router-dom';

// components
import Button from './Button';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <section className='home'>
      <Helmet>
        <style>{"body { background-color: #3874ff; }"}</style>
      </Helmet>
      <img src="logo-clear.svg" alt="Logo AdoPet" />
      <h3>Boas-vindas!</h3>
      <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
      <div className='home__buttons'>
        <Link to='/login'>
          <Button children='Já tenho conta' />
        </Link>
        <Link to='/cadastro'>
          <Button children='Quero me cadastrar' />
        </Link>
      </div>
    </section>
  );
};

export default Home;