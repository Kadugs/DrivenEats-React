/*import Valors from "./Valors";
import App from "../App";
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

export default function Confirmacao (data) {
    const finalData = []
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
                    
                    <Link className="centro botao-tudo-certo" >
                        <div>
                            <p>Tudo certo, pode pedir!</p>
                        </div>
                    </Link>

                    <Link to="/" className="centro">
                        <div>
                            <p className="white">Cancelar</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Router>
    );
}*/