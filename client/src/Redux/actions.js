import {GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, POST_DOG} from "./actionTypes";
import axios from "axios";
const host = 'http://localhost:3001/dogs'

export const searchById = (id) => {  // <== el nombre de la variable que recibe la function puede ser cualquiera: id, idRaza, numero de perro, etc
    const endpoint = `${host}/` + id;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_ID,
             payload: data,
        });
    };
};