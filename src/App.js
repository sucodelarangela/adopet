// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Home from './Components/Home.js';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
