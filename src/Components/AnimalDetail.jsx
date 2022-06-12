
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { getAnimalDetail, deleteAnimal } from '../Actions';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from "react-router";

import './AnimalDetails.css'


export default function AnimalDetail() {
    
    const dispatch = useDispatch();
    const details = useSelector((state) => state.animalDetails);
    const { id } = useParams();
    let navigate = useNavigate();

    
    const { idSenasa, tipoAnimal, peso, nacimiento, raza, preñada, establecimiento, tipoDispositivo, numeroDispositivo, nombrePotrero, fechaCreacion } = details;
        

    useEffect(() => {
        dispatch(getAnimalDetail(id));
    }, [dispatch, id]);



    async function removeAnimal(id){
        var mando= await swal ( " ¿Seguro que quieres eliminarlo? " , { 
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    closeModal: true,
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    closeModal: true
                }
            }
        })
        if(mando){
            await deleteAnimal(id) 
            swal ( " ¡Animal Eliminado! " , { 
                icon: "success",
                botón : false , 
            } ) ;
            navigate(-1);                 
        }
    }

    if (details.peso) {
        return (
    
            <div className='details'>
                <div className='details_items'>
                    <p className='details_text'>ID SENASA: <span>{idSenasa}</span></p>
                    <p className='details_text'>Tipo Animal: <span>{tipoAnimal}</span></p>
                    <p className='details_text'>Peso: <span>{peso}</span></p>
                    <p className='details_text'>Fecha de Nacimiento: <span>{nacimiento.substr(0, 10)}</span></p>
                    <p className='details_text'>Raza: <span>{raza}</span></p>
                    <p className='details_text'>Preñada: <span>{preñada}</span></p>
                    <p className='details_text'>Establecimiento: <span>{establecimiento}</span></p>
                    <p className='details_text'>Tipo de Dispositivo: <span>{tipoDispositivo}</span></p>
                    <p className='details_text'>Número de Dispositivo: <span>{numeroDispositivo}</span></p>
                    <p className='details_text'>Nombre del Potrero: <span className='potrero'>{nombrePotrero}</span></p>
                    <p className='details_text'>Fecha de Creación: <span>{fechaCreacion.substr(0, 10)}</span></p>
                    <div className='details_btn'>
                        <button className="details_btn_edit"><NavLink className="link_edit" style={{textDecoration:'none'}} to={`/edit/${id}`}><span>Edit</span></NavLink></button>
                        <button className="details_btn_delete" onClick={()=> removeAnimal(id)}><span>Delete</span></button>
                    </div>   
                </div>
            </div>
        )
    }
 
    
}