// dependencies
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <img className="footer__img" src="pets.svg" alt="" aria-hidden='true' />}
      <footer className="footer">
        <p>2022 - Desenvolvido por <a href="https://angelacaldas.vercel.app/" target='_blank' rel="noreferrer">Angela Caldas</a>.</p>
      </footer>
    </>
  );
};

export default Footer;