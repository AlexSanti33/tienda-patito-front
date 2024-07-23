import { useEffect, useState } from "react"
import { Alert, Button, Container } from "react-bootstrap";
import {findByHawaId} from "../services/productService";
import {login } from "../services/authenticationService";
import Producto from "../models/Producto";
import { PedidoView } from "./CrearPedido";
import { Titulo } from "./Titulo";
import { Link } from "react-router-dom";
import Empleado from "../models/Empleado";
export const SearchProduct = () =>{

    const [hawaId,setHawaId] = useState(0);
    const [product,setProduct] = useState<Producto>();

    useEffect(()=>{
        login().then(auth => {  
            sessionStorage.setItem('token','Bearer '+ auth?.token);
            const empleado:Empleado | undefined = auth?.empleado
            sessionStorage.setItem('empleado',JSON.stringify(empleado));
        })
    },[]);

   const handleClick = (e:  React.MouseEvent<HTMLButtonElement> | undefined )=>{
    console.log(e);
    e?.stopPropagation();
    findByHawaId(hawaId).then(prod => setProduct(prod));

   }



    return(
        <>
        <Container fluid>
            <Titulo/>
            <Alert>
                <Link to="/pedidos">Ver pedidos</Link>
            </Alert>
            Igresa HawaId <input className="" value={hawaId} onChange={e=> setHawaId((e.target.value as unknown as number))} />
            <Button variant="success" onClick={handleClick}>Buscar</Button>
            <PedidoView producto={product} />

        </Container>
    
                    </>
    )


}