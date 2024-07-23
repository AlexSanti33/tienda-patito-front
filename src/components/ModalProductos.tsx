import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Item from "../models/Item";
import { Table } from "react-bootstrap";

interface ModalPrdouctosProps{

    items : Item[];
    open: boolean;
    handleClose:(() => void) | undefined;
}

export const ModalPrdouctos = (props: ModalPrdouctosProps) => {

    const {items,open,handleClose} = props;   

    return (
        
              <Modal
                show={open}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
        <Modal.Header closeButton>
          <Modal.Title>Productos de Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
                {items?.length> 0 ? 
                
                <Table>
                  <thead>
                    <tr>
                    <th>HawaId</th>
                    <th>Descripcion</th>
                    <th>Descuento</th>
                    <th>Precio Lista</th>
                    </tr>
                  </thead>
                  <tbody>
                  {items.map(item=>
                    <tr>
                      <th>{item.producto?.hawaId}</th>
                     <th>{item.producto?.descripcion}</th>
                     <th>{item.producto?.descuento}</th>
                     <th>{item.producto?.precioLista}</th>
                    </tr>
                )}
                    
                  </tbody>
                </Table>
                
                : <h4>Sin detalle</h4>
                
                }
                
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    
    

        
    )
}