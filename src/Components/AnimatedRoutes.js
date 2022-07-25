// dependencies
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useContext } from "react";

// contexts
import { AuthProvider, AuthContext } from "../contexts/auth";

// components
import Initial from './Initial';
import LoginForm from "./LoginForm.js";
import Home from "./Home.js";
import Message from "./Message.js";
import RegisterForm from "./RegisterForm.js";
import Header from "./Header";
import Footer from "./Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  // Creating a Private element to hold the pages we want to protect with login
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    // if the localStorage fetch is still happening, then we show a message. When it finishes (loading false), then the page is rendered
    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    // if user is not authenticated, all private pages will redirect to login page
    if (!authenticated) {
      return <Navigate to='/login' />;
    }

    return children;
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <AuthProvider>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Initial />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/cadastro' element={<RegisterForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mensagem' element={<Private><Message /></Private>} />
          <Route path='/perfil' element={<Private><Message /></Private>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

/*

This component was created to allow the use of the framer-motion library.

Framer-motion is used for animations based on useLocation() hook. This hook needs to be called inside a parent component and this parent component needs to be called inside the BrowserRouter from react-router-dom. That's why we needed to isolate the routes in a component.

After that, we need to set location and key as props inside Routes tag.

*/