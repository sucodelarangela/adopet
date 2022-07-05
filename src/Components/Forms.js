// styles
import styles from './Forms.module.css';

// dependencies
import { useLocation } from 'react-router-dom';

const Register = () => {
  const location = useLocation();

  return (
    <section className={styles.register}>
      <img src="logo-blue.svg" alt="" />
      <p>Ainda não tem cadastro?</p>
      <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      {location.pathname === '/cadastro' ? (
        <form>
          <label>E-mail
            <input type="email" />
          </label>
          <label>Nome
            <input type="text" />
          </label>
          <label>Senha
            <input type="password" />
          </label>
          <label>Confirme sua senha
            <input type="password" />
          </label>
        </form>
      ) : (
        <form>
          <label>
            <input type="email" />
          </label>
          <label>
            <input type="email" />
          </label>
          <label>
            <input type="email" />
          </label>
          <label>
            <input type="email" />
          </label>
        </form>)}
    </section>
  );
};

export default Register;