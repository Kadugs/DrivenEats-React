import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Confirmacao from "./components/Confirmacao";
import './css/reset.css';
import './css/styles.css';

export default function App() {
    return(
        <>
            <Header />
            <Main />
            <Footer />
            <Confirmacao />
        </>
    );
}