// styles
import styles from './Home.module.css';

// dependencies
import { Link, useLocation } from 'react-router-dom';

// components
import Button from './Button.js';

const Register = () => {
  const location = useLocation();

  return (
    <section className={styles.register}>
      <img src="logo-blue.svg" alt="" />
      {
        location.pathname === '/cadastro' ? (
          <>
            <p>Ainda não tem cadastro?</p>
            <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            <form>
              <label htmlFor='email'>E-mail</label>
              <input id='email' type="email" placeholder='Escolha seu melhor email' />
              <label htmlFor='name'>Nome</label>
              <input id='name' type="text" placeholder='Digite seu nome completo' />
              <label htmlFor='pass-create'>Senha</label>
              <input id='pass-create' type="password" placeholder='Crie uma senha' />
              <label htmlFor='pass-confirm'>Confirme sua senha</label>
              <input id='pass-confirm' type="password" placeholder='Crie uma senha' />
              <Link to='/login'>
                <Button children='Cadastrar' />
              </Link>
            </form>
          </>
        ) : (
          <>
            <p style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Já tem conta? Faça seu login:</p>
            <form>
              <label htmlFor='email'>E-mail</label>
              <input id='email' type="email" placeholder='Insira seu email' />
              <label htmlFor='pass'>Senha</label>
              <input id='pass' type="password" placeholder='Insira sua senha' />
              <Link to='/home'>
                <Button children='Entrar' />
              </Link>
            </form>
          </>
        )
      }
    </section >
  );
};

export default Register;