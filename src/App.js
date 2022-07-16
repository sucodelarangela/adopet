// dependencies
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./Components/Header.js";
import AnimatedRoutes from "./Components/AnimatedRoutes.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <Router>
      <main className='App'>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
