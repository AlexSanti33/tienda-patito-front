import axios from "axios";
import Pedido from "../models/Pedido";

const config = {
    headers: {'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',}
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

export const cancelar = async (id: number | null,pedido: Pedido) => {
    try {
        return  await axios.put(BASE_URL+'/'+id, 
            pedido,config
        );
    } catch (error) {
        console.log(error);
    }
    return undefined;
}