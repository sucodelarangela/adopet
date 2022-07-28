// styles
import Button from './Button';

// dependencies
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

// assets
import loggedUser from '../assets/logged-user.png';

const Message = () => {
  const location = useLocation();
  // destructuring useForm
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.section className='message' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      {
        location.pathname === '/mensagem' ? (
          <>
            <p>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Nome</label>
              <input id='name' type="text" {...register("name", { required: 'É necessário informar seu nome', maxLength: { value: 40, message: 'O número máximo de caracteres é 40' } })} placeholder='Insira seu nome completo' />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <label htmlFor="phone">Telefone</label>
              <input type="tel" id='phone' {...register('phone', { required: 'Informe um número de telefone', pattern: /\(?[1-9]{2}\)?\s?9?[0-9]{8}/ })} placeholder='Insira seu telefone e/ou whatsapp' />
              {errors.phone && <p className="error">{errors.phone.message || 'Por favor, verifique o número digitado'}</p>}

              <label htmlFor="petName">Nome do animal</label>
              <input id='petName' type="text" {...register("petName", { required: 'É necessário informar o nome do animal', maxLength: { value: 25, message: 'O número máximo de caracteres é 25' } })} placeholder='Por qual animal você se interessou?' />
              {errors.petName && <p className="error">{errors.petName.message}</p>}

              <label htmlFor="msg">Mensagem</label>
              <textarea name="msg" id="msg" cols="30" rows="10" {...register('msg', { required: 'É necessário escrever uma mensagem', maxLength: { value: 500, message: 'O número máximo de caracteres é 500' } })} placeholder='Escreva sua mensagem.' spellCheck='false'></textarea>
              {errors.msg && <p className="error">{errors.msg.message}</p>}

              <Button type='submit' children='Enviar' />
            </form>
          </>
        ) : (
          <>
            <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <legend>Perfil</legend>
              <label htmlFor='user-pic'>Foto</label>
              <input type="image" id='userPic' src={loggedUser} alt="Usuário logado" />
              <a href="#">Clique na foto para editar</a>

              <label htmlFor="name">Nome</label>
              <input id='name' type="text" {...register("name", { required: 'É necessário informar seu nome', maxLength: { value: 40, message: 'O número máximo de caracteres é 40' } })} placeholder='Insira seu nome completo' value='Joana Magalhães' />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <label htmlFor="phone">Telefone</label>
              <input type="tel" id='phone' {...register('phone', { required: 'Informe um número de telefone', pattern: /\(?[1-9]{2}\)?\s?9?[0-9]{8}/ })} placeholder='Insira seu telefone e/ou whatsapp' value='98 123456789' />
              {errors.phone && <p className="error">{errors.phone.message || 'Por favor, verifique o número digitado'}</p>}

              <label htmlFor="city">Cidade</label>
              <input type="text" id='city' {...register('city', { required: 'Informe a cidade em que você mora' })} placeholder='Informe a cidade em que você mora' value='São Luís' />

              <label htmlFor="about">Sobre</label>
              <textarea spellCheck='false' name="about" id="about" cols="30" rows="8" placeholder='Escreva sua mensagem.' value='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'></textarea>

              <Button type='submit' children='Salvar' />
            </form>
          </>
        )
      }
    </motion.section>
  );
};

export default Message;

