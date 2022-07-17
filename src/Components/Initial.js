// dependencies
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// hooks and dependencies
import { Helmet } from 'react-helmet';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(max-width: 767px)');

  return (
    <motion.section className='initial' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      <Helmet>
        <style>{"body { background-color: #3874ff; }"}</style>
      </Helmet>
      <img src="logo-clear.svg" alt="Logo AdoPet" />
      <h3>Boas-vindas!</h3>
      <p>
        {matches ? 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!' : 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!'}
      </p>
      <div className='home__buttons'>
        <Link className='button' to='/home'>Ver pets disponíveis para adoção</Link>
        <div>
          <a className='initial__link' href="/cadastro">Cadastrar</a>
          <span style={{ fontSize: 14, padding: '0 1rem', color: '#fff' }}>ou</span>
          <a className='initial__link' href="/login">Fazer login</a>
        </div>
      </div>
    </motion.section >
  );
};

export default Home;