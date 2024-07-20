import { useEffect, useState } from "react";
import Producto from "../models/Producto";
import { Alert, Table } from "react-bootstrap";
import Item from "../models/Item";
import { ConfirmarPedido } from "./ConfirmarPedido";

interface PedidoViewProps {
    producto: Producto | undefined
}

export const PedidoView = (props: PedidoViewProps)=>{

    let {producto} = props;

    const [cantidadPedida,setCantidadPedida] = useState<number>(0);

    const [item,setItem]=useState<Item|undefined|null>(undefined);
    
    useEffect(()=>{
        producto=undefined;
        setCantidadPedida(0);
    },[item])

    const itemCreado: Item ={
        producto: producto,
        cantidad: cantidadPedida
    }


    return(
        <>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Hawa</th>
                        <th>Descripcion</th>
                        <th>Precio Lista</th>
                        <th>Descuento</th>
                        <th>Existencias</th>
                        <th>Acciones</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={producto?.hawaId}>
                        <td>{producto?.hawaId}</td>
                        <td>{producto?.descripcion}</td>
                        <td>{producto?.precioLista}</td>
                        <td>{producto?.descuento}</td>
                        <td>{producto?.inventario?.existenciaActual}</td>
                        <td>
                            <button 
                                onClick={()=>setItem(itemCreado)}
                                disabled={!(producto?.inventario?.existenciaActual !== undefined && 
                                producto?.inventario?.existenciaActual >0 && 
                                cantidadPedida > 0 && cantidadPedida <= producto?.inventario?.existenciaActual) }>Agregar</button>
                        </td>
                        <td><input 
                                type="number" 
                                value={cantidadPedida} 
                                max={producto?.inventario?.existenciaActual}
                                min={0}
                                onChange={e=> setCantidadPedida((e.target.value as unknown as number))}/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {producto?.inventario?.existenciaActual == 0 ? <Alert variant="warning">Este articulo no se puede agregar al pedido tiene existencia 0</Alert>:''}
            
           <ConfirmarPedido item={item}/> 
            
</>
    )
    
}

