import {
    GET_ANIMALS,
    FIND_BY_ID_ANIMAL,
    CREATE_ANIMAL,
    DELETE_ANIMAL,
    SEARCH_ANIMAL
} from '../Actions/index';


const initialState = {
    animales: [],
    animalesBuscados: [],
    animalDetails: {}
};


function rootReducer(state = initialState, action) {


    switch (action.type) {

        case GET_ANIMALS:
            return{
                ...state,
                animales: action.payload,
                animalesBuscados: action.payload
            } 

        case FIND_BY_ID_ANIMAL:
            return{
                ...state,
                animalDetails: action.payload
            } 

        case CREATE_ANIMAL:
            return{
                ...state,
                animalesBuscados: [action.payload,...state.animales],
                
            }
        case DELETE_ANIMAL:
            return{
                ...state,
                animalesBuscados: action.payload,
                
            }
            case  SEARCH_ANIMAL:
                return {
                    ...state,
                    animalesBuscados: state.animales.filter( animal => {
                        return animal.idSenasa.toString().toLowerCase().includes(action.payload.toLowerCase())
                    })
                }

       

        default: return state
    }

}

export default rootReducer;