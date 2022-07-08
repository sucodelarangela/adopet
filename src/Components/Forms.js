// styles and assets
import styles from './Home.module.css';

// dependencies
import { Link, useLocation } from 'react-router-dom';

// components
import Button from './Button.js';
import { useEffect } from 'react';

const Register = () => {
  const location = useLocation();
  let element = '';

  const changeType = (id) => {
    element = document.querySelector(id);

    if (element.type === 'password') {
      element.setAttribute('type', 'text');
    } else {
      element.setAttribute('type', 'password');
    }
  };

  useEffect(() => {
  }, [element]);

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
              <span>
                <input id='pass-create' type='password' placeholder='Crie uma senha' />
                <span onClick={() => changeType('#pass-create')} className={styles.pass__view}></span>
              </span>
              <label htmlFor='pass-confirm'>Confirme sua senha</label>
              <span>
                <input id='pass-confirm' type='password' placeholder='Crie uma senha' />
                <span onClick={() => changeType('#pass-confirm')} className={styles.pass__view}></span>
              </span>
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
              <span>
                <input id='pass' type='password' placeholder='Insire sua senha' />
                <span onClick={() => changeType('#pass')} className={styles.pass__view}></span>
              </span>
              <a href="#">Esqueci minha senha</a>
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