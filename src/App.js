// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Initial from './Components/Initial.js';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import LoginForm from "./Components/LoginForm.js";
import Home from "./Components/Home.js";
import Message from "./Components/Message.js";
import RegisterForm from "./Components/RegisterForm.js";

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Initial />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/cadastro' element={<RegisterForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mensagem' element={<Message />} />
          <Route path='/perfil' element={<Message />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
