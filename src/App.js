import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React from "react";
import './css/reset.css';
import './css/styles.css';

export default function App() {



    const [number, setNumber] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    function sumNum(index) {
        const newNum = [...number]
        for(let i = 0; i < newNum.length; i++) {
            if(i === index) {
                newNum[i]++;
            } 
        }
        setNumber(newNum);
    }
    function subtrNum(index) {
        const newNum = [...number]
        for(let i = 0; i < newNum.length; i++) {
            if(i === index) {
                newNum[i]--;
            }
        }
        setNumber(newNum);
    }

    const data = [
        {
            title: 'Primeiro, seu prato',
            options: [
                {
                    image: './assets/moqueca.png',
                    name: 'Moqueca',
                    description: 'peixe fresco, tomate, coentro, cebola...',
                    price: '11.50',
                    qtd: number[0],
                    id: 0
                },
                {
                    image: './assets/feijoada.jpg',
                    name: 'Feijoada',
                    description: 'eijoada tradicional com tudo que tem direito',
                    price: '9.20',
                    qtd: number[1],
                    id: 1
                },
                {
                    image: './assets/guacamole.jpg',
                    name: 'Guacamole',
                    description: 'acompanha porção de 200 gramas de nachos',
                    price: '12.00',
                    qtd: number[2],
                    id: 2
                },
                {
                    image: './assets/torta vegana.jpg',
                    name: 'Torta Vegana',
                    description: 'A torta vegana serve 4 pessoas',
                    price: '8.00',
                    qtd: number[3],
                    id: 3
                }
            ]
        },
        {
            title: 'Agora, sua bebida',
            options: [
                {
                    image: './assets/suco de laranja.jpg',
                    name: 'Suco de Laranja',
                    description: 'Copo de 400 ml',
                    price: '4.00',
                    qtd: number[4],
                    id: 4
                },
                {
                    image: './assets/refrigerantes.jpg',
                    name: 'Dolly Guaraná',
                    description: 'O sabor brasileiro',
                    price: '3.50',
                    qtd: number[5],
                    id: 5
                },
                {
                    image: './assets/agua.jpg',
                    name: 'Água',
                    description: 'Garrafa de 350 ml',
                    price: '2.00',
                    qtd: number[6],
                    id: 6
                },
                {
                    image: './assets/cerveja.jpg',
                    name: 'Cerveja',
                    description: 'Garrafa',
                    price: '5.00',
                    qtd: number[7],
                    id: 7
                }
            ]
        },
        {
            title: 'Por fim, sua sobremesa',
            options: [
                {
                    image: './assets/doce de banana.jpg',
                    name: 'Doce de Banana',
                    description: 'Doce caseiro',
                    price: '1.00',
                    qtd: number[8],
                    id: 8
                },
                {
                    image: './assets/pudim.jpg',
                    name: 'Pudim',
                    description: 'Pudim caseiro de leite condensado',
                    price: '2.50',
                    qtd: number[9],
                    id: 9
                },
                {
                    image: './assets/sorvete.jpg',
                    name: 'Sorvete',
                    description: 'Vários sabores',
                    price: '3.25',
                    qtd: number[10],
                    id: 10
                },
                {
                    image: './assets/churros.png',
                    name: 'Churros',
                    description: 'Feito na hora',
                    price: '4.85',
                    qtd: number[11],
                    id: 11
                }
            ]
        }
    ]

    
    return(
        <>
            <Header />
            <Main 
                sumNum={sumNum}
                subtrNum={subtrNum}
                number={number}
                data={data}
            />
            <Footer 
                data={data}
            />
        </>
    );
}