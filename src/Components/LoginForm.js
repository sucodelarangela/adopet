import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// components
import Input from './Input.js';
import Button from './Button.js';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // destructuring useForm
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
    <section className='register'>
      <img src="logo-blue.svg" alt="" />
      <p>Já tem conta? Faça seu login:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input id='email' type="email" {...register("email", { required: 'É necessário informar um endereço de email', pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder='Insira seu email' />
        {errors.email && <p className="error">{errors.email.message || 'Por favor, verifique o email digitado'}</p>}

        <label htmlFor="pass">Senha</label>
        <span>
          <span onClick={() => changeType('#pass')} className='pass__view'></span>
          <input id='pass' type="password" {...register("password", { required: 'Crie uma senha', pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} placeholder='Insira sua senha' />
        </span>
        {errors.password && <p className="error">{errors.password.message || 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres'}</p>}

        <a className='register__forgot' href="#">Esqueci minha senha</a>
        <Button type='submit' children='Entrar' />
      </form>
    </section >
  );
};

export default LoginForm;