import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import fb from "../../galeria/facebook.png";
import twitter from "../..//galeria/twitter.png";
import instagram from "../..//galeria/instagram.jpg"

export default function Footer() {

  const navigate = useNavigate();

  const handleHome = () =>{
    navigate("/")
  }

  

    return (
        <div className = "container">
        <footer className = "py-5">
          <div className = "row">
            <div className = "col-6 col-md-2 mb-3">
              <h5>Redes Sociales</h5>
              <ul className = "nav flex-column">
                <li className = "nav-item mb-2"><span onClick={handleHome} className = "nav-link p-0 text-body-secondary">Inicio</span></li>
                <li className = "nav-item mb-2"><span className = "nav-link p-0 text-body-secondary">Features</span></li>
              
              </ul>
            </div>
      
            <div className = "col-6 col-md-2 mb-3">
              <h5>Contactanos</h5>
              <ul className = "nav flex-column">
                <li className = "nav-item mb-2"><span className = "nav-link p-0 text-body-secondary">Whatsaap</span></li>
                <li className = "nav-item mb-2"><span className = "nav-link p-0 text-body-secondary">Celular</span></li>
              
              
              </ul>
            </div>
      
            <div className = "col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className ="nav flex-column">
                <li className="nav-item mb-2"><span className = "nav-link p-0 text-body-secondary">Home</span></li>
                <li className="nav-item mb-2"><span className = "nav-link p-0 text-body-secondary">Features</span></li>
              
              
              </ul>
            </div>
      
            <div className ="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className = "d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className ="visually-hidden">Email address</label>
                  <input id ="newsletter1" type="text"className ="form-control" placeholder="Email address" />
                  <button className = "btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div className = "d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 Company, Inc. All rights reserved.</p>
            <ul className = "list-unstyled d-flex">
              <li className ="ms-3"><Link to='https://twitter.com/?lang=es' className = "link-body-emphasis" ><img className = "bi" width="24" height="24" src={twitter}  alt='Twitter'/></Link></li>
              <li className ="ms-3"><Link to="https://www.facebook.com/luis901810" className = "link-body-emphasis" ><img className = "bi" width="24" height="24" src={fb} alt='Facebbok' /></Link></li>
              <li className ="ms-3"><span className = "link-body-emphasis" ><img className = "bi" width="24" height="24" src={instagram} alt='Instagram'/></span></li>
            
            
            </ul>
          </div>
        </footer>
      </div>
    )    
  }
