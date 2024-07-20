import { Alert, Button, Table } from "react-bootstrap";
import Pedido from "../models/Pedido";
import { findAll, cancelarPedido } from "../services/pedidoService"
import { Titulo } from "./Titulo";
import { ModalPrdouctos } from "./ModalProductos";
import { useEffect, useState } from "react";
import Item from "../models/Item";
import { Link } from "react-router-dom";
import EstatusPedido from "../models/EstatusPedido";

const cancelado: EstatusPedido ={
    id: 3,
    codigo: 3,
    descripcion: 'Cancelado'
}

export const VerPedido = () =>{


    const [show, setShow] = useState(false);
    const [items, setItems] = useState<Item[]>([]);
    const [pedidosConfirmados,setPedidosConfirmados] = useState<Pedido[]|null>([]);

    useEffect(()=>{
        findAll().then(pedidosDb => setPedidosConfirmados(pedidosDb) );

    },[])
    
    const handleShow = (itemsDb: Item[]) => {setShow(true);setItems(itemsDb)};
    const handleClose = () => {setShow(false)}


    const handleCancelar = (pedido: Pedido)=>{
         pedido.estatusPedido = cancelado;
         cancelarPedido(pedido.id,pedido).then(cancelado => 
            {
                
                if(cancelado?.status == 200)
                   {   alert("El pedido ha sido cancelado");
                    window.location.reload();
                   }else{alert("No se actualizo el pedido")}

            })
            
    }

    return (<>
            <Titulo/>
            <Alert>
                <Link to="/">Crear nuevo pedido</Link>
            </Alert>
            <Table>
                <thead>
                    <tr>
                    <th>Pedido No</th>
                    <th>Nombre Cliente</th>
                    <th>Nombre empleado</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidosConfirmados?.map(pedido => 

                        <tr>
                        <td>{pedido.id}</td>
                        <td>{pedido.cliente.nombre}</td>
                        <td>{pedido.empleado.nombre}</td>
                        <td>{pedido.estatusPedido.descripcion}</td>

                        <td><Button variant="primary" onClick={()=>handleShow(pedido.items)}>Ver detalle Pedido</Button>
                        <Button variant="danger" onClick={()=>handleCancelar(pedido)} disabled={pedido.estatusPedido.codigo === 3}>Cancelar</Button>
                        </td>
                        </tr>
                    )}
                    
                </tbody>
            </Table>
            <ModalPrdouctos open={show} items={items} handleClose={handleClose}/>

        </>)

}