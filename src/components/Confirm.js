import Valors from "./Valors";
import App from "../App";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

export default function Confirmacao (data) {
    const finalData = [
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: 'TOTAL',
            price: 0,
        }
    ];
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].options.length; j++) {
            if(data[i].options[j].qtd !== 0) {
                finalData[i].name += `${data[i].options[j].name} `;
                finalData[i].qtd.push(data[i].options[j].qtd);
                finalData[i].pricename.push(data[i].options[j].price);
            }
        }
    }
    const mensagem = encodeURIComponent( `Olá, gostaria de fazer o pedido:
    - Prato: ${finalData[0].name}
    - Bebida: ${finalData[1].name}
    - Sobremesa: ${finalData[2].name}
    Total: R$ ${finalData[3].price.toFixed(2)}
    `);

    return (
        <Router>
            <div className="tela-de-confirmacao">
                <div>
                    <p className="centro">Confirme seu pedido</p>
                    <div className="container-confirmar-infos">
                        {finalData.map( (index) => (
                            <Valors 
                            key={index}
                            finalData={finalData}
                            />
                            ))}
                    </div>
                    
                    <Link href={`https://wa.me/5533988418125?text=${mensagem}`}>
                    <div className="centro botao-tudo-certo" >
                        <p>Tudo certo, pode pedir!</p>
                    </div>
                    </Link>

                    <Link to="/" >
                        <p className="centro">Cancelar</p>
                    </Link>
                </div>
                <Switch>
                    <Route path="/">
                        <div />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}