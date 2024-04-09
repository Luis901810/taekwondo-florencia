import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () =>{

    const navigate = useNavigate();
    const [ showOptions, setShowOptions ] = useState(false)
    return(
        <div>
            <span 
            onMouseEnter={() => setShowOptions(true)} 
            onMouseLeave={() => setShowOptions(false)}>
            Escuela de Teakwondo {showOptions && (
                <div>
                    <span onClick={() => navigate("/teakwondo-infantil")}>Infantil</span>
                    <span onClick={() => navigate("/horarios")}>Horarios</span>
                </div>
        
            )}
            </span>
                        
            <span onClick={() => navigate("/About")}> Quienes Somos </span>
            <span onClick={() => navigate("/contactos")}> Contactanos </span>
        <input type="search"id="searchInput" placeholder="Buscar" />
        </div>
    )
}

export default Search;