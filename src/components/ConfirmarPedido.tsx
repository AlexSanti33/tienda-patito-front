import { Button } from "react-bootstrap";
import Item from "../models/Item";

import Pedido from "../models/Pedido";
import {save } from "../services/pedidoService"
import { useEffect, useState } from "react";
import  {empleado,cliente,responseEstatus,status,estatusConfirmado, } from "../constantes/constantes"

interface ConfirmarPedidoProps{
    item : Item | undefined | null;
}



export const ConfirmarPedido = (props: ConfirmarPedidoProps) =>{

    const[items,setItems]=useState<Item[]>([])
    console.log('Render confirmar pedido');
    const {item} = props;

        useEffect(()=>{
            if(item?.producto !== undefined){

                let itemEncontrado: boolean = false;
                items.forEach(it=> {
                    if(it.producto?.hawaId == item.producto?.hawaId){
                        //it.cantidad = Number(item.cantidad)+ Number(item.cantidad);
                        itemEncontrado = true;
                    }
                })

                if(!itemEncontrado){
                    items.push(item);
                }

                setItems(items);            
            
            }
        }
        ,[item,items])
        
    const handleClick =  (e:  React.MouseEvent<HTMLButtonElement> | undefined) =>{
        const hawaid = e?.currentTarget.value;
        e?.stopPropagation();
        const itemsAux = items.filter(item => item.producto?.hawaId != hawaid);
        setItems(itemsAux);
    }

    const confirmarPedidoHandler = (e:  React.MouseEvent<HTMLButtonElement> | undefined) => {
        e?.stopPropagation();

        const pedido: Pedido={id: null,items:items,empleado: empleado ,cliente:cliente,estatusPedido: estatusConfirmado,ip:'10.12.12.1'}

         save(pedido).then(response => {
           if(responseEstatus == response?.status){
                alert('Se guardo el pedido')
                window.location.reload();
           }
        });

    }


    return(
            <>
            { items.length > 0 ?

            <><table>
                    <thead>
                        <tr>
                            <th>Hawa</th>
                            <th>Precio Lista</th>
                            <th>Descuento</th>
                            <th>Existencias</th>
                            <th>Cantidad</th>
                            <th>Estatus</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(itemL => <tr key={itemL.producto?.hawaId}>
                            <td>{itemL.producto?.hawaId}</td>
                            <td>{itemL.producto?.precioLista}</td>
                            <td>{itemL.producto?.descuento}</td>
                            <td>{itemL.producto?.inventario?.existenciaActual}</td>
                            <td>{itemL.cantidad}</td>
                            <td>{status.descripcion}</td>
                            <td><Button className="warning" value={itemL.producto?.hawaId} onClick={handleClick}>Eliminar</Button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <Button onClick={confirmarPedidoHandler}>Confirmar pedido</Button></>
        : <h1>Sin productos Seleccionados</h1>}
        
        </>
    )
}