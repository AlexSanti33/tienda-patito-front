import Producto from "./Producto";

export default interface Item {

    producto: Producto | undefined;
    cantidad: number;
}