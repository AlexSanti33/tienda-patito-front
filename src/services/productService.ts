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
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }


}