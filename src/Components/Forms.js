import { useLocation, useNavigate } from 'react-router-dom';

// components
import Input from './Input.js';
import Button from './Button.js';

const Forms = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className='register'>
      <img src="logo-blue.svg" alt="" />
      {
        location.pathname === '/login' &&
        <>
          <p>Já tem conta? Faça seu login:</p>
          <form onSubmit={() => navigate('/home')}>
            <Input id='email' type='email' placeholder='Insira seu email' children='E-mail' />
            <Input id='pass' type='password' placeholder='Insira sua senha' children='Senha' />
            <a className='register__forgot' href="#">Esqueci minha senha</a>
            <Button type='submit' children='Entrar' />
          </form>
        </>
      }
    </section >
  );
};

export default Forms;