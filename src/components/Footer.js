import Confirmacao from "./Confirmacao";

export default function Footer({data}) {
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
    return(
        <footer>
            <div className="botao-confirmar liberar-confirmacao" onClick={Confirmacao}>
            <p>Fechar pedido</p>
            </div>
        </footer>
    );

    
}