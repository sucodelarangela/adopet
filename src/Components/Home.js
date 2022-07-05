// styles
import styles from './Home.module.css';

// dependencies
import { Link } from 'react-router-dom';

// components
import Button from './Button';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <section className={styles.home}>
      <Helmet>
        <style>{"body { background-color: #3874ff; }"}</style>
      </Helmet>
      <img src="logo-clear.svg" alt="" />
      <h3>Boas-vindas!</h3>
      <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
      <div className={styles.home__buttons}>
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