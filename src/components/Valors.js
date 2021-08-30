export default function Valors({itens}) {
    let option = itens.name;
    function Order(
        {
            name,
            price,
            qtd
        }) {
        return(
            <div className="item-da-tela-confirmacao">
                <p>{qtd} - {name}</p>
                <p>{(price * qtd).toFixed(2)}</p>
            </div>
        )
    }
    return (
        <>
            {option.map((item, index) => (
                <Order 
                    name={item}
                    price={itens.price[index]}
                    qtd={itens.qtd[index]}
                    key={index}
                />
            ))}
        </>
    );
}