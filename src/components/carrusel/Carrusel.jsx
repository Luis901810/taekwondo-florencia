import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Carrusel  () {
    
    return(
        
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
            <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">Algún contenido de marcador de posición representativo para la primera diapositiva del carrusel.</p>
            <p><Link to="/registro" className="btn btn-lg btn-primary" >Registrate Hoy</Link></p>
            </div>
        </div>
        </div>
        <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
            <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><Link to="#" className="btn btn-lg btn-primary" >Learn more</Link></p>
            </div>
        </div>
        </div>
        <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div className="container">
            <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Algún contenido de marcador de posición representativo para la primera diapositiva del carrusel.</p>
            <p><Link to="#" className="btn btn-lg btn-primary">Browse gallery</Link></p>
            </div>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">atras</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">siguiente</span>
    </button>
    </div>
    )
}