import axios from "axios";
import Pedido from "../models/Pedido";
import  {config } from "../constantes/constantes"

const BASE_URL='http://localhost:8080/pedido';

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL,config);
        const responseData: Pedido[] =response.data
        return responseData;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async (pedido: Pedido) => {
    try {
        return await axios.post(BASE_URL, 
            pedido,config
        );
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const cancelar = async (id: number | null,pedido: Pedido) => {
    try {
        return  await axios.put(BASE_URL+'/'+id, 
            pedido,config
        );
    } catch (error) {
        const errorMessage = error.response.data;
        alert('Error al cancelar: '+errorMessage);
        console.log(errorMessage);
    }
    return undefined;
}