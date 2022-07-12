// dependencies and hooks
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// components
import Button from './Button.js';
import Input from './Input.js';

const Register = () => {
  const location = useLocation();

  return (
    <section className='register'>
      <img src="logo-blue.svg" alt="" />
      {
        location.pathname === '/cadastro' ? (
          <>
            <p>Ainda não tem cadastro? <br /> Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            <form>
              <Input id='email' type='email' placeholder='Escolha seu melhor email' children='E-mail' />
              <Input id='name' type='text' placeholder='Digite seu nome completo' children='Nome' />
              <Input id='pass-create' type='password' placeholder='Crie uma senha' children='Senha' />
              <Input id='pass-confirm' type='password' placeholder='Repita a senha criada acima' children='Confirme sua senha' />
              <Link className='button' to='/login'>Cadastrar</Link>
            </form>
          </>
        ) : (
          <>
            <p>Já tem conta? Faça seu login:</p>
            <form>
              <Input id='email' type='email' placeholder='Insira seu email' children='E-mail' />
              <Input id='pass' type='password' placeholder='Insira sua senha' children='Senha' />
              <a class='register__forgot' href="#">Esqueci minha senha</a>
              <Link className='button' to='/home'>Entrar</Link>
            </form>
          </>
        )
      }
    </section >
  );
};

export default Register;