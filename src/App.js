import './App.css';

import Footer from './views/footer/Footer';
import Landing from './views/landing/Landing';
import Nav from './views/nav/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>

        <Route path='/' element={ <Landing />} />

      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
