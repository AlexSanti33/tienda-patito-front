import Cliente from "../models/Cliente";
import Direccion from "../models/Direccion";
import Empleado from "../models/Empleado";
import EstatusPedido from "../models/EstatusPedido";

export const BASE_URL ='http://localhost:8080';

export const EMAIL_DEFAULT = 'santiago.jav3309@gmail.com';

export const PASS_DEFAULT = 'qwerty';

export const config = {
    headers: {
                'Authorization':sessionStorage.getItem('token'),        
                'Content-Type': 'application/json'
              }
  }

export  const status: EstatusPedido = {
    id:1,
    codigo: 1,
    descripcion: 'Pendiente'
}
export const responseEstatus: number =200;
const direccion: Direccion= {id:null,calle:'LA barda', colonia:'Zapotitla',entidadFederativa:'CDMX', numeroExterior:'48',numeroInterior:'19'};
export const empleado:Empleado = {id:1,nombre:'Alex',apellido:'Santiago',numeroEmpleado:'4031059',sexo:'M'};
export const cliente: Cliente={id:null,nombre:'Gael',apellido:'Callejas',direccion: direccion}
export const estatusConfirmado: EstatusPedido={id:2,codigo:2,descripcion:'Entregado'};
