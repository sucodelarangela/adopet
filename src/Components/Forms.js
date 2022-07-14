import { Link, useLocation, useNavigate } from 'react-router-dom';

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
        location.pathname === '/cadastro' ? (
          <>
            <p>Ainda não tem cadastro? <br /> Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
            <form onSubmit={() => navigate('/login')}>
              <Input id='email' type='email' placeholder='Escolha seu melhor email' children='E-mail' />
              <Input id='name' type='text' placeholder='Digite seu nome completo' children='Nome' />
              <Input id='pass-create' type='password' placeholder='Crie uma senha' children='Senha' />
              <Input id='pass-confirm' type='password' placeholder='Repita a senha criada acima' children='Confirme sua senha' />
              <Button type='submit' children='Cadastrar' />
            </form>
          </>
        ) : (
          <>
            <p>Já tem conta? Faça seu login:</p>
            <form onSubmit={() => navigate('/home')}>
              <Input id='email' type='email' placeholder='Insira seu email' children='E-mail' />
              <Input id='pass' type='password' placeholder='Insira sua senha' children='Senha' />
              <a className='register__forgot' href="#">Esqueci minha senha</a>
              <Button type='submit' children='Entrar' />
            </form>
          </>
        )
      }
    </section >
  );
};

export default Forms;