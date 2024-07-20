import Inventario from "./Inventario";

export default interface Producto {
    hawaId?: number,
    inventario: Inventario;
    precioLista: number;
    descuento: number;
    descripcion: string;
}