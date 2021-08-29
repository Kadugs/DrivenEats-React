// import Confirm from "./Confirm";
// import { BrowserRouter as Router,
//     Switch,
//     Route,
//     Link} from "react-router-dom";

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
    const finalData = [
        {
            type: 'prato',
            name: [ ],
            qtd: [],
            price: [],
        },
        {
            type: 'bebida',
            name: [ ],
            qtd: [],
            price: [],
        },
        {
            type: 'sobremesa',
            name: [ ],
            qtd: [],
            price: [],
        },
        {
            type: 'total',
            name: 'TOTAL',
            price: 0,
        }
    ];
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].options.length; j++) {
            if(data[i].options[j].qtd !== 0) {
                finalData[i].name.push(data[i].options[j].name);
                finalData[i].qtd.push(data[i].options[j].qtd);
                finalData[i].price.push(data[i].options[j].price);
                finalData[3].price += Number(data[i].options[j].price);
            }
        }
    }
    function addText(indice) { 
            let text = '';
            for(let i = 0; i < finalData[indice].name.length; i++) {
                text += `${finalData[indice].name[i]} `
                if(finalData[indice].qtd[i] > 1) {
                    text += `(${finalData[indice].qtd[i]}X) 
                    `
                } else {
                    text += `
                    `
                }
            }
            return text;
    }
    const mensagem = encodeURIComponent( `Olá, gostaria de fazer o pedido:
    - Prato: ${addText(0)}
    - Bebida: ${addText(1)}
    - Sobremesa: ${addText(2)}
    Total: R$ ${finalData[3].price.toFixed(2)}
    `);

    function openWpp() {
        window.open(`https://wa.me/5533988418125?text=${mensagem}`);
    }

    return (
        <footer>
                <div className="botao-confirmar liberar-confirmacao" onClick={openWpp}>
                    <p>Fechar pedido</p>
                </div> 
         </footer>
    )

    // return(
    //     <Router>
    //         <footer>
    //             <Link to='/Confirm' className="botao-confirmar liberar-confirmacao">
    //                 <div >
    //                     <p>Fechar pedido</p>
    //                 </div>
    //             </Link>

    //             <Switch>
    //                 <Route exact path="/Confirm">
    //                     <Confirm 
    //                         data={data}
    //                     />
    //                 </Route>
    //             </Switch>
    //         </footer>
    //     </Router>
    // );
}