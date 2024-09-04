import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar1 from './Component/Navbar/Navbar1';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import MyWork from './Component/MyWork/MyWork';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar1 />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
