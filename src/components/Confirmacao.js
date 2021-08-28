const valores = [
    {
        name: '',
        price: 0,
    },
    {
        name: '',
        price: 0,
    },
    {
        name: '',
        price: 0,
    },
    {
        name: 'TOTAL',
        price: 0,
    }
];

export default function Confirmacao() {
    return (
        <div className="tela-de-confirmacao">
            <div>
                <p className="centro">Confirme seu pedido</p>
                <div className="container-confirmar-infos">
                    {valores.map( (item, index) => (
                        <Valores 
                            name={item.name}
                            price={item.price}
                            key={index}
                        />
                    ))}
                </div>
                <div className="centro botao-tudo-certo">
                    <p>Tudo certo, pode pedir!</p>
                </div>
                <p className="centro">Cancelar</p>
            </div>
        </div>
    );
}

function Valores({name, price}) {
    return (
    <div>
        <p>{name}</p>
        <p>{price}</p>
    </div>
    );
}