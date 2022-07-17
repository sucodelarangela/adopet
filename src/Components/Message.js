// styles
import Button from './Button';

// dependencies
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// assets
import loggedUser from '../assets/logged-user.png';

const Message = () => {
  const location = useLocation();

  return (
    <motion.section className='message' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      {
        location.pathname === '/mensagem' ? (
          <>
            <p>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
            <form>
              <label htmlFor="name">Nome</label>
              <input type="text" id='name' placeholder='Insira seu nome completo' />
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id='phone' placeholder='Insira seu telefone e/ou whatsapp' />
              <label htmlFor="petName">Nome do animal</label>
              <input type="text" id='petName' placeholder='Por qual animal você se interessou?' />
              <label htmlFor="msg">Mensagem</label>
              <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Escreva sua mensagem.'></textarea>
              <Button children='Enviar' />
            </form>
          </>
        ) : (
          <>
            <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
            <form>
              <legend>Perfil</legend>
              <label htmlFor='user-pic'>Foto</label>
              <input type="image" id='userPic' src={loggedUser} alt="Usuário logado" />
              <a href="#">Clique na foto para editar</a>
              <label htmlFor="name">Nome</label>
              <input type="text" id='name' placeholder='Insira seu nome completo' value='Joana Magalhães' />
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id='phone' placeholder='Insira seu telefone e/ou whatsapp' value='55 11 XXXXXXXXX' />
              <label htmlFor="city">Cidade</label>
              <input type="text" id='city' value='São Paulo' />
              <label htmlFor="about">Sobre</label>
              <textarea spellCheck='false' name="about" id="about" cols="30" rows="8" placeholder='Escreva sua mensagem.' value='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'></textarea>
              <Button children='Salvar' />
            </form>
          </>
        )
      }
    </motion.section>
  );
};

export default Message;

