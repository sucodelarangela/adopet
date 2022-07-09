// assets
import { pets } from '../data/data.js';

// dependencies
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home'>
      <div className='cards'>
        <p>Olá! Veja os amigos disponíveis para adoção!</p>
        {
          pets.map((pet, i) => (
            <div key={i} className='card'>
              <img src={pet.img} alt={pet.name} />
              <h4>{pet.name}</h4>
              <ul>
                <li>{pet.age}</li>
                <li>{pet.size}</li>
                <li>{pet.behavior}</li>
              </ul>
              <p className='card__city'>{pet.city}</p>
              <Link className='card__contact' to="/mensagem" aria-label='Falar com responsável'>Falar com responsável</Link>
            </div>
          ))
        }
      </div>
    </section >
  );
};

export default Home;