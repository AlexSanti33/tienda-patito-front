import Tienda from "./Tienda";

export default interface Inventario{
    existenciaActual: number;
    insertDate: Date;
    updateDate: Date;
    tienda: Tienda;
}