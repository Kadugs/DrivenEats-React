import Option from "./Option";

const data = [
    {
        title: 'Primeiro, seu prato',
        options: [
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/feijoada.jpg',
                name: 'Feijoada',
                description: 'eijoada tradicional com tudo que tem direito',
                price: '9.20'
            },
            {
                image: './assets/guacamole.jpg',
                name: 'Guacamole',
                description: 'acompanha porção de 200 gramas de nachos',
                price: '12.00'
            },
            {
                image: './assets/torta vegana.jpg',
                name: 'Torta Vegana',
                description: 'A torta vegana serve 4 pessoas',
                price: '8.00'
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
                price: '4.00'
            },
            {
                image: './assets/refrigerantes.jpg',
                name: 'Dolly Guaraná',
                description: 'O sabor brasileiro',
                price: '3.50'
            },
            {
                image: './assets/agua.jpg',
                name: 'Água',
                description: 'Garrafa de 350 ml',
                price: '2.00'
            },
            {
                image: './assets/cerveja.jpg',
                name: 'Cerveja',
                description: 'Garrafa',
                price: '5.00'
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
                price: '1.00'
            },
            {
                image: './assets/pudim.jpg',
                name: 'Pudim',
                description: 'Pudim caseiro de leite condensado',
                price: '2.50'
            },
            {
                image: './assets/sorvete.jpg',
                name: 'Sorvete',
                description: 'Vários sabores',
                price: '3.25'
            },
            {
                image: './assets/churros.png',
                name: 'Churros',
                description: 'Feito na hora',
                price: '4.85'
            }
        ]
    }
]

export default function Main() {
    return (
        <main>
            {data.map( (item, index) => (
            <div key={index}>
                <h2> {item.title} </h2>
                <ul className="opcoes">
                    {item.options.map( (option, index) => (
                        <Option 
                            image={option.image}
                            name={option.name}
                            description={option.description}
                            price={option.price}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
            ))}
        </main>
    );
}