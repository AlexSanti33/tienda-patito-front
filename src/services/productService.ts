import axios from "axios";
import Producto from "../models/Producto";
import  {config } from "../constantes/constantes"
const BASE_URL='http://localhost:8080/productos';


export const findByHawaId = async(id:  number) =>{
    
    try{
        const response = await axios.get(BASE_URL+'/'+id,config);
        const responseData: Producto = response.data; 
        return responseData;
    } catch (error) {
        const  errorMessage = error.response.data;
        alert('Error en la solicitud: '+errorMessage);
        console.log(errorMessage);
      }


}