import Direccion from "./Direccion";

export default interface Cliente {
    id: number| null;
    nombre: string;
    apellido: string;
    direccion: Direccion;
}
