// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Initial from './components/Initial.js';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Forms from "./components/Forms.js";
import Home from "./components/Home.js";
import Message from "./components/Message.js";

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Initial />} />
          <Route path='/login' element={<Forms />} />
          <Route path='/cadastro' element={<Forms />} />
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
