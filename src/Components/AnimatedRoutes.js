// dependencies
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// components
import Initial from './Initial';
import LoginForm from "./LoginForm.js";
import Home from "./Home.js";
import Message from "./Message.js";
import RegisterForm from "./RegisterForm.js";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Initial />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/cadastro' element={<RegisterForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mensagem' element={<Message />} />
        <Route path='/perfil' element={<Message />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

/*

This component was created to allow the use of the framer-motion library.

Framer-motion is used for animations based on useLocation() hook. This hook needs to be called inside a parent component and this parent component needs to be called inside the BrowserRouter from react-router-dom. That's why we needed to isolate the routes in a component.

After that, we need to set location and key as props inside Routes tag.

*/