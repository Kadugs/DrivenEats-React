import Valors from "./Valors";
import { BrowserRouter as Router,
    Link} from "react-router-dom";

export default function Confirm (
    {
        finalData,
        total
    }
    ) {
    function addText(indice) { 
        let text = ``;
        for(let i = 0; i < finalData[indice].name.length; i++) {
            text += `${finalData[indice].name[i]} `
            if(finalData[indice].qtd[i] > 1) {
                text += `(${finalData[indice].qtd[i]}X) \n      `
            } else {
                text += `\n     `
            }
        }
        return text;
    }
    function openWpp() {
        const mensagem = encodeURIComponent( 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${addText(0)}
    - Bebida: ${addText(1)}
    - Sobremesa: ${addText(2)}
    Total: R$ ${total.valor.toFixed(2)}
    `);
        window.open(`https://wa.me/5533988418125?text=${mensagem}`);
    }
    return (
        <>
            <h2 className="revisao">Revise seu pedido</h2>
            <div className="confirmar-pedido">
                <div className="container-confirmar-infos centro">
                    {finalData.map( (itens, index) => (
                        <Valors 
                            itens={itens}
                            key={index}
                        />))}
                        <div>    
                            <strong>TOTAL</strong>
                            <strong>R$ {total.valor.toFixed(2)}</strong>
                        </div>
                </div>
                <div onClick={openWpp} className="botao-tudo-certo">
                    <p>Tudo certo, pode pedir!</p>
                </div>
                <Link to="/" className="centro cancelar">
                    <strong>Cancelar</strong>
                </Link>
            </div>
        </>
    );
}