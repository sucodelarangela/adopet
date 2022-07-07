// styles
import Button from './Button';
import styles from './Home.module.css';

const Message = () => {
  return (
    <section className={styles.message}>
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
    </section>
  );
};

export default Message;