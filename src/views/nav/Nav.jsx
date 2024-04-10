import Search from "../../components/search/Search";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Nav () {

  const navigate = useNavigate()

  const handleHorario = () =>{

navigate("/about")

  }

    return(
        <div>
        
        <span></span>
        <Search />

        </div>
      
    )
}