import Cliente from "./Cliente";
import Empleado from "./Empleado";
import EstatusPedido from "./EstatusPedido";
import Item from "./Item";

export default interface Pedido {
    id: number | null;
    items: Item[];
    empleado: Empleado;
    cliente: Cliente;
    estatusPedido: EstatusPedido;
    ip: string;

}