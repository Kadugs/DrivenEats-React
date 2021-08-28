import React from "react";
import Counter from "./Counter";
export default function Option({image, name, description, price} ) {
    const [number, setNumber] = React.useState(0);
    return (
        <li className={number > 0 ? "selected" : "disabled"}>
            <img src={image} alt='' onClick={number === 0 ? () => setNumber(number + 1) : () => setNumber(number)} />
            <p onClick={number === 0 ? () => setNumber(number + 1) : () => setNumber(number)} ><strong>{name}</strong></p>
            <p onClick={number === 0 ? () => setNumber(number + 1) : () => setNumber(number)} className="descricao-pedido">{description}</p>
            <div>
                <p>R$ <span className="valor">{price}</span></p>
                <Counter 
                    countNum={number}
                    setCountNum={setNumber}    
                />
            </div>
        </li>
    );
}