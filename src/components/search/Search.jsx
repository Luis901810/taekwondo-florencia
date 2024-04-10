import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Search.module.css";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOptions, setShowOptions] = useState(false);

  const handleClickTeakwondo = () => {
    if (location.pathname === "/") {
    } else {
      navigate("/");
      setShowOptions(false);
    }
  };

  const handleInfantil = () => {
    navigate("/teakwondo-infantil");
    setShowOptions(false);
  };

  const handleHorario = () => {
    navigate("/horarios");
    setShowOptions(false);
  };

  return (
    <div className={styles.container}>
      <span
        onClick={handleClickTeakwondo}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        Escuela de Teakwondo
        {showOptions && (
          <div className={styles.desplegable}>
            <span onClick={handleInfantil}>Teakwondo Infantil</span>
            <span onClick={handleHorario}>Horarios</span>
          </div>
        )}
      </span>

      <span onClick={() => navigate("/Instalaciones")}> Quienes Somos </span>
      <span onClick={() => navigate("/contactanos")}> Contactanos </span>
      <input type="search" id="searchInput" placeholder="Buscar" />
    </div>
  );
};

export default Search;

