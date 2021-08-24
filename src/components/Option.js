export default function Option(props) {
    return (
        <li>
            <img src={props.image} alt=''/>
            <p><strong>{props.name}</strong></p>
            <p className="descricao-pedido">{props.description}</p>
            <p>R$ <span className="valor">{props.price}</span></p>
            <ion-icon name="checkmark-circle" className="escondido"></ion-icon>
        </li> 
    );
}