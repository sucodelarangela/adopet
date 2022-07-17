// dependencies
import { motion } from 'framer-motion';

// assets
import { pets } from '../data/data.js';

// components
import CardPet from './CardPet.js';

const Home = () => {
  return (
    <motion.section className='home' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
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
    </motion.section >
  );
};

export default Home;