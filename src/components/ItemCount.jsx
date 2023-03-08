import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';


function ItemCount() {

    const [count, setCount] = useState(0);
    const restar = () => {
        if (count < 1) {
            alert ("No puede ser menor a 0");
        } else {
            setCount(count - 1);
        }
    };
    
    const onadd = () => {
        console.log("Agregado al carrito");
        };

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setCount((count) => count + 1)}>Sumar</Button>
        <h1>    {count}    </h1>
        <Button variant="secondary" onClick={(restar)}>Restar</Button>
        </ButtonGroup>

        <Button variant="outline-primary" onClick={onadd}>Agregar al Carrito</Button>
        </div>
     );
}

export default ItemCount;