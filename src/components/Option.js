import React from "react";
export default function Option(props) {
    const [num, setNum] = React.useState(0);
    const {image, name, description, price} = props;
    let isSelected = false;
    function Counter() {
        if(num > 0) {
            isSelected = true;
            return(
            <p>
                <span className="red" onClick={() => setNum(num - 1)}>-</span> {num} <span className="green" onClick={() => setNum(num + 1)}>+</span>
            </p>
            );
        }
        return <p></p>;
    }

    return (
        <li onClick={() => setNum(num + 1)} className={num > 0 ? "selected" : "disabled"}>
            <img src={image} alt=''/>
            <p><strong>{name}</strong></p>
            <p className="descricao-pedido">{description}</p>
            <div>
                <p>R$ <span className="valor">{price}</span></p>
                <Counter />
            </div>
            
        </li> 
    );
}