// dependencies
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// assets
import userPic from '../assets/user.svg';

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/cadastro') {
      setUser('');
    } else {
      setUser(<img className='header__user' src={userPic} alt="Usuário" />);
    }
  }, [location]);

  return (
    <header className='header'>
      <nav>
        <div>
          <img className='header__logo' src="logo-clear.svg" alt="Logo AdoPet" />
          <Link className='header__home' to="/" aria-label='Ir para Home'></Link>
          <Link className='header__message' to="/" aria-label='Ir para Mensagens'></Link>
        </div>
        {user}
      </nav>
    </header>
  );
};

export default Header;