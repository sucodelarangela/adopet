// assets
import { pets } from '../data/data.js';

// components
import CardPet from './CardPet.js';

const Home = () => {
  return (
    <section className='home'>
      <p>Olá! <br /> Veja os amigos disponíveis para adoção!</p>
      <div className='cards'>
        {
          pets.map((pet, i) => (
            <CardPet
              age={pet.age}
              size={pet.size}
              behavior={pet.behavior}
              city={pet.city}
              name={pet.name}
              img={pet.img}
              key={i}
            />
          ))
        }
      </div>
    </section >
  );
};

export default Home;