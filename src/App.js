import './App.css';
import About from './components/about/About';
import Contactos from './views/contactos/Contactos';

import Footer from './views/footer/Footer';
import Landing from './views/landing/Landing';
import Infantil from './views/modalities/Infantil';
import Nav from './views/nav/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>

        <Route path='/' element={ <Landing />} />
        <Route path='/contactos' element={ <Contactos /> } />
        <Route path='/About' element={ < About /> } />
        <Route path='/teakwondo-infantil' element={ <Infantil /> } />

      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
