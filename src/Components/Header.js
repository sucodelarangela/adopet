// dependencies
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// assets
import userPic from '../assets/user.svg';
import loggedUser from '../assets/logged-user.png';

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/cadastro') {
      setUser('');
    } else if (location.pathname === '/perfil') {
      setUser(<img className='header__user' src={loggedUser} alt="Usuário" />);
    } else {
      setUser(<Link to='/perfil'><img className='header__user' src={userPic} alt="Usuário" /></Link>);
    }
  }, [location]);

  return (
    <header className='header'>
      <nav>
        <div>
          <img className='header__logo' src="logo-clear.svg" alt="" aria-hidden='true' />
          <Link className='header__home' aria-label='Tela inicial' to="/" ></Link>
          <Link className='header__message' to="/mensagem" aria-label='Ir para Mensagens'></Link>
        </div>
        {user}
      </nav>
    </header>
  );
};

export default Header;