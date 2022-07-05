// dependencies
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <img className='header__logo' src="logo-clear.svg" alt="Logo AdoPet" />
        <Link className='header__home' to="/" aria-label='Ir para Home'></Link>
        <Link className='header__message' to="" aria-label='Ir para Mensagens'></Link>
      </nav>
    </header>
  );
};

export default Header;