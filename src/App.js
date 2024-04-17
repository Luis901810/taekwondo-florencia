import './App.css';
import Instalaciones from './components/instalaciones/Instalaciones';
import Contactos from './views/contactos/Contactos';
import Master from "./views/modalities/Master";
import Infantil from './views/modalities/Infantil';
import TeakwondoSchool from './views/modalities/TeakwondoSchool';
import Horarios from './views/modalities/Horarios';
import Landing from './views/landing/Landing';
import Nav from './views/nav/Nav';

import Footer from './views/footer/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>

        <Route path='/' element={ <Landing />} />
        <Route path='/escuela' element={ <TeakwondoSchool />} />
        <Route path='/contactanos' element={ <Contactos /> } />
        <Route path='/instalaciones' element={ < Instalaciones /> } />
        <Route path='/infantil' element={ <Infantil /> } />
        <Route path='/maestros' element= { <Master />} />
        <Route path='/horarios' element= { <Horarios /> } />

      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
