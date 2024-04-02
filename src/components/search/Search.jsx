import { useNavigate } from "react-router-dom";

const Search = () =>{

    const navigate = useNavigate();
    return(
        <div>
            
            <span onClick={() => navigate("/")}> Inicio </span>
            <span> Quienes Somos </span>
            <span onClick={() => navigate("/contactos")}> Contactanos</span>

        <input type="search"id="searchInput" placeholder="Buscar" />
        </div>


    )
}

export default Search;