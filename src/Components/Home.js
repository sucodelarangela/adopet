// styles
import styles from './Home.module.css';

// components
import Button from './Button';

const Home = () => {
  return (
    <section className={styles.home}>
      <img src="logo-clear.svg" alt="" />
      <h3>Boas-vindas!</h3>
      <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
      <div className={styles.home__buttons}>
        <Button children='Já tenho conta' style={{ maxWidth: 180 }} />
        <Button children='Quero me cadastrar' style={{ maxWidth: 180 }} />
      </div>
    </section>
  );
};

export default Home;