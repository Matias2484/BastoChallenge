import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import EditAnimal from "./Components/EditAnimal";
import AnimalDetail from "./Components/AnimalDetail";

import './App.css';
import React from 'react';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/details/:id' element = {<AnimalDetail/>} />
        <Route path="/edit/:id" element={<EditAnimal/>} />
      </Routes>
    </BrowserRouter>
      
    
    </div>
  );
}

export default App;
