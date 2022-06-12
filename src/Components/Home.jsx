import React, {useState, useEffect} from "react";
import {  getAllAnimals, searchAnimal } from "../Actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BiEdit } from "react-icons/bi";


import Form from "./Form";
import './Home.css'

export default function Home() {
  const dispatch = useDispatch();
  let animales = useSelector((state) => state.animalesBuscados);
 
  const[busqueda, setBusqueda] = useState("")


//SearchBar function
  const handleChange = e =>{ 
    setBusqueda(e.target.value);
    dispatch(searchAnimal(e.target.value))
  }

  useEffect(() => {
    dispatch(getAllAnimals())
    
},[dispatch])



if(animales) {
  return (
    <div className="home">
      <div className="home_menu">
      <p className="menu_animales">Menu / Animales</p>
      <h2 className="gestion_animales">Gestión de Animales</h2>
      <a href="#overlayForm" className="button_animales">Nuevo animal</a>
      <div className="overlay" id="overlayForm">
        <Form/>
      </div>

      <div className="searchBar">
        <input className="search_input" type="text" placeholder="Buscar por IdSenasa"
        autoComplete="on"
        value={busqueda}
        onChange={handleChange}/>
      </div>

      <h3 className="lista_animales">Lista de Animales</h3>
      </div>
      
      <table className="home_table">
        <thead>
          <tr>
            <th>ID SENASA</th>
            <th>Tipo de Animal</th>
            <th>Establecimiento</th>
            <th>Nacimiento</th>
            <th>Raza</th>
            <th>Preñada</th>
            <th>Peso</th>
            <th>Nombre del Potrero</th>
            <th>Tipo de Dispositivo</th>
            <th>Número de Dispositivo</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>


      <tbody className="table_body">
      
          {animales.map((e) => (
            <tr className="tabla">
              <td>{e.idSenasa}</td>
              <td>{e.tipoAnimal.toUpperCase()}</td>
              <td>{e.establecimiento}</td>
              <td>{e.nacimiento.substr(0, 10)}</td>
              <td>{e.raza}</td>
              <td>{e.preñada.toUpperCase()}</td>
              <td>{e.peso} Kg</td>
              <td>{e.nombrePotrero}</td>
              <td>{e.tipoDispositivo}</td>
              <td>{e.numeroDispositivo}</td>
              <td>{e.fechaCreacion.substr(0, 10)}</td>
              <div className="btn_table">
              <button className="btn_detail"><NavLink className="btn_detail_nav" style={{textDecoration:'none'}} to={`/details/${e._id}`} ><BiEdit/></NavLink></button>
              
              </div>
              </tr>
          ))}
      </tbody>
      </table>
    </div>
  );
}
 
}
