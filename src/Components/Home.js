// styles
import styles from './Home.module.css';

// assets
import { pets } from '../data/data.js';

const Home = () => {
  return (
    <section className={styles.home}>
      <p>Olá! Veja os amigos disponíveis para adoção!</p>
      <div className="cards">
        {
          pets.map((pet, i) => (
            <>
              <h3 key={i}>{pet.name}</h3>
            </>
          ))
        }
      </div>
    </section>
  );
};

export default Home;;