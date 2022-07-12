import { Link } from "react-router-dom";

const CardPet = ({ age, size, behavior, city, name, img, index }) => {
  return (
    <div key={index} className='card'>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <ul>
        <li>{age}</li>
        <li>{size}</li>
        <li>{behavior}</li>
      </ul>
      <p className='card__city'>{city}</p>
      <Link className='card__contact' to="/mensagem" aria-label='Falar com responsável'>Falar com responsável</Link>
    </div>
  );
};

export default CardPet;