import { useState } from "react";
import Search from "../../components/search/Search";
import { useNavigate } from "react-router-dom";

import styles from "./Nav.module.css"



export default function Nav () {

  const navigate = useNavigate();
  const [ showDropdown, setShowDropdown ] = useState(false);

  const handleTeakwondoSchoolClick = () =>{
    navigate("/escuela")
   
  }

  const handleHorario = () =>{
    navigate("/horarios")
    
  }

  const handleInfantil = () =>{
    navigate("/infantil")
   
  }

  const handleMaster = () =>{
    navigate("/maestros")
    
  }

  const handleContactanos = () =>{
    navigate("/contactanos")
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  }

  return(
    <div className={styles.container}>
      <span 
        onClick={handleTeakwondoSchoolClick}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        Escuela de Teakwondo
        {
          showDropdown &&(
            <div className={styles.desplegable} 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={handleMouseLeave}>
              <span onClick={handleMaster}>Maestro de Teakwondo</span>
             
             
            </div>
          )
        }
      </span>
      <span className={styles.menu} onClick={handleInfantil}> Infantil </span>
      <span className={styles.menu} onClick={handleHorario}> Horarios </span>
      <span className={styles.menu} onClick={handleContactanos}> Contactanos </span>
    
      <Search />
    </div>
  )
}
