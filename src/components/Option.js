import Counter from "./Counter";

export default function Option(
    {
        image,
        name, 
        description, 
        price, 
        number,
        index, 
        sumNum, 
        subtrNum
    }) {
    function oi () {}
    return (
        <li className={number > 0 ? "selected" : "disabled"}>
            <img src={image} alt='' onClick={number === 0 ? () => sumNum(index) : oi} />
            <p onClick={number === 0 ? () => sumNum(index)  : oi} ><strong>{name}</strong></p>
            <p onClick={number === 0 ? () => sumNum(index) : oi} className="descricao-pedido">{description}</p>
            <div>
                <p>R$ <span className="valor">{price}</span></p>
                <Counter 
                    countNum={number}
                    sumNum={sumNum}
                    subtrNum={subtrNum}
                    index={index}
                />
            </div>
        </li>
    );
}