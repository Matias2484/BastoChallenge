import React from "react";
import { BiExit } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

export default function NavBar() {
  
  return (
    <header className="nav_container">
      <nav className="navBar">
          <div className="titulo_nav">
              <div className="titulo_icon"><GiCow size={30}/></div>
              <p>Basto</p>
          </div>
          <div className="icons">
              <button className="btn_home"><NavLink style={{textDecoration:'none'}} to={'/'}><FaHome className="icon_home" size={22}/></NavLink></button>
              
              <BsFillBellFill className="icon_bell" size={20}/>
              
              <BiExit size={22}/>
              </div>
              
      </nav>
      
    </header>
  );
}
