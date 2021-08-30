import { BrowserRouter as Router,
    Link} from "react-router-dom";

export default function Footer({finalData, data, total}) {
    let contador = 0;
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].options.length; j++) {
            if(data[i].options[j].qtd !== 0) {
                contador++;
                break;
            }
        }
    }
    if(contador < 3) {
        return(
            <footer>
                <div className="botao-confirmar">
                <p>Selecione os 3 itens para fechar o pedido</p>
                </div>
            </footer>
        );
    }
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].options.length; j++) {
            if(data[i].options[j].qtd !== 0) {
                finalData[i].name.push(data[i].options[j].name);
                finalData[i].qtd.push(data[i].options[j].qtd);
                finalData[i].price.push(data[i].options[j].price);
                total.valor += data[i].options[j].price * data[i].options[j].qtd;
            }
        }
    }

    return (
        <footer>
            <Link to='/revisar' className="botao-confirmar liberar-confirmacao">
                    <p>Fechar pedido</p>
            </Link>
         </footer>
    )

}