import axios from "axios";
import Pedido from "../models/Pedido";

const config = {
    headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials":true }
}
const BASE_URL='http://localhost:8080/pedido';

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
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


export const cancelarPedido = async (id: number | null,pedido: Pedido) => {
    try {
        console.log('actualizando pedido'+id);
        return await axios.post(BASE_URL+'/cancelar', 
            pedido,config
        );
    } catch (error) {
        console.log(error);
    }
    return undefined;
}