import axios from 'axios';
export const GET_ANIMALS = 'GET_ANIMALS';
export const FIND_BY_ID_ANIMAL = 'FIND_BY_ID_ANIMAL';
export const CREATE_ANIMAL = 'CREATE_ANIMAL';
export const EDIT_ANIMAL = 'EDIT_ANIMAL';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const SEARCH_ANIMAL = 'SEARCH_ANIMAL';


export function getAllAnimals(){
    return function(dispatch){
      axios.get('http://localhost:4000/animales')
      .then((resp) => {
        dispatch({
          type:GET_ANIMALS,
          payload:resp.data
        })
      })
}};
export function getAnimalDetail(id){
  return function(dispatch){
    axios.get(`http://localhost:4000/animales/${id}`)
    .then((resp) => {
      dispatch({
        type:FIND_BY_ID_ANIMAL,
        payload:resp.data
      })
      
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

export async function createAnimal(formData) {
  try {
    const response = await axios({
      url: "http://localhost:4000/animales",
      method: "POST",
      data: formData,
      type: CREATE_ANIMAL,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}


export function deleteAnimal(id){
  try {
    const response =  axios({
      url: `http://localhost:4000/animales/delete/${id}`,
      method: "DELETE",
      type: DELETE_ANIMAL
    });
    return response;
    
  } catch (error) {
    console.log(error);
  }

}
export async function editAnimal(payload,id){
  try {
    const response = await axios({
        url: `http://localhost:4000/animales/edit/${id}`, 
        method: "PUT",
        data:payload,
        type: EDIT_ANIMAL
    });
      const res = await response.json();
      return res;
  } catch (error) {
    console.log(error);
  }

};
export function searchAnimal(id) {
  return{
    type: SEARCH_ANIMAL,
    payload: id
  }
}
