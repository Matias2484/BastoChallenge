import { editAnimal } from '../Actions';
import { useSelector} from 'react-redux';
import React,{useState} from 'react';
import { useNavigate } from "react-router";
import { useParams } from "react-router";


export default function EditAnimal (){
    
    const { id } = useParams();
    const animalDetail= useSelector(state=>state.animalDetails)
    let animales = useSelector((state) => state.animalesBuscados);


    const {idSenasa, tipoAnimal, establecimiento, peso, nacimiento, raza, preñada, nombrePotrero, tipoDispositivo, numeroDispositivo}=animalDetail
   
   //Set state of the Form with Animal data
    const [form, setForm] = useState({
        idSenasa, 
        tipoAnimal, 
        establecimiento, 
        peso, 
        nacimiento, 
        raza, 
        preñada, 
        nombrePotrero, 
        tipoDispositivo, 
        numeroDispositivo
       
    });
    

   
let navigate = useNavigate();
   

//Modify main state
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
            
        });
    };

//Create the Object and send it to the PUT for edit
    function handleSubmit(e){
        e.preventDefault();
        editAnimal({...form},id)
        setForm({
            idSenasa:'',
            tipoAnimal:'',
            peso:'', 
            establecimiento:'', 
            nacimiento:'',
            raza:'', 
            preñada:'',
            nombrePotrero:'',
            tipoDispositivo:'',
            numeroDispositivo:''
        })
        alert("Animal editado correctamente");
      navigate(-1);    
    };

    if(animalDetail.idSenasa) {
        return (
            <div className="wrapper">
      <h2 className="form_Title">Editar Animal</h2>
      <a href="javascript:history.back(-1);" className="close">&times;</a>
      <div className="content">
          <div className="container">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4 position-relative form_idSenasa">
                <label for="validationTooltip01" className="form-label idSenasa">ID Senasa</label>
                <input type="text" className="form-control" id="validationTooltip01" value={form.idSenasa} 
                onChange = {handleChange}
                placeholder = "Registro en SENASA"
                name="idSenasa"
                required/>
                <div className="valid-tooltip"/>
               
            </div>
            <div className="col-md-4 position-relative form_tipoAnimal">
                <label for="validationTooltip02" className="form-label">Tipo de Animal</label>
                <select 
                className="form-select" 
                id="validationTooltip04" 
                required type="text"
                name="tipoAnimal"
                placeholder="Elija Tipo de Animal"
                value={form.tipoAnimal}
                onChange={handleChange}
                >
                <option selected disabled value="">Elija Tipo de Animal</option>
                <option>Ternero</option>
                <option>Novillo</option>
                <option>Vaquillona</option>
            
                </select>
                <div class="valid-tooltip">
    
                </div>
            </div>
             <div className="col-md-4 position-relative form_establecimiento">
                <label for="validationTooltip01" className="form-label establecimiento">Establecimiento</label>
                <input type="text" className="form-control" id="validationTooltip01" value={form.establecimiento} 
                onChange = {handleChange}
                placeholder = "Nro Establecimiento"
                name="establecimiento"
                required/>
                <div className="valid-tooltip"/> 
            </div>
            <div className="col-md-4 position-relative form_peso">
                <label for="validationTooltip01" className="form-label peso">Peso</label>
                <input type="number" className="form-control" id="validationTooltip01" value={form.peso} 
                onChange = {handleChange}
                placeholder = "Peso"
                name="peso"
                required/>
                <div className="valid-tooltip"/>
               
            </div>
            <div className="col-md-4 position-relative form_nacimiento">
                <label for="validationTooltip01" className="form-label nacimientoo">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="validationTooltip01" value={form.nacimiento} 
                onChange = {handleChange}
                placeholder = {nacimiento}
                name="nacimiento"
                required/>
                <div className="valid-tooltip"/>
            </div>
            <div className="col-md-4 position-relative form_raza">
                <label for="validationTooltip01" className="form-label raza">Raza</label>
                <input type="text" className="form-control" id="validationTooltip01" value={form.raza} 
                onChange = {handleChange}
                placeholder = "Raza"
                name="raza"
                required/>
                <div className="valid-tooltip"/>
            </div>
            <div className="col-md-4 position-relative form_preñada">
                <label for="validationTooltip02" className="form_preñada">Preñada</label>
                <select 
                className="form-select" 
                id="validationTooltip04" 
                required type="text"
                placeholder = "Preñada"
                name="preñada"
                value={form.preñada}
                onChange={handleChange}
                >
                <option selected disabled value="">Preñada</option>
                <option>Si</option>
                <option>No</option>           
                </select>
                <div class="valid-tooltip">
    
                </div>
            </div>
            <div className="col-md-4 position-relative form_nombrePotrero">
                <label for="validationTooltip01" className="form-label nombrePotrero">Potrero</label>
                <input type="text" className="form-control" id="validationTooltip01" value={form.nombrePotrero} 
                onChange = {handleChange}
                placeholder = "Nombre del Potrero"
                name="nombrePotrero"
                required/>
                <div className="valid-tooltip"/> 
            </div>
            <div className="col-md-4 position-relative form_tipoDispositivo">
                <label for="validationTooltip02" className="form_tipoDispositivo">Tipo de Dispositivo</label>
                <select 
                className="form-select" 
                id="validationTooltip04" 
                required type="text"
                placeholder = "Tipo Dispositivo"
                name="tipoDispositivo"
                value={form.tipoDispositivo}
                onChange={handleChange}
                >
                <option selected disabled value="" className="option_dispositivo">Tipo Dispositivo</option>
                <option>Collar</option>
                <option>Caravana</option>           
                </select>
                <div class="valid-tooltip">
    
                </div>
            </div>
            <div className="col-md-4 position-relative form_numeroDispositivo">
                <label for="validationTooltip01" className="form-label numeroDispositivo">Número Dispositivo</label>
                <input type="text" className="form-control" id="validationTooltip01" value={form.numeroDispositivo} 
                onChange = {handleChange}
                placeholder = "Número Dispositivo"
                name="numeroDispositivo"
                required/>
                <div className="valid-tooltip"/>
            </div>
            <div className="col-12">
                <button className="btn btn-primary form_btn" type="submit" onClick={handleSubmit}>Editar</button>
            </div>
            </form>
            </div>
      </div>
    </div>
        )
    }
    
}
