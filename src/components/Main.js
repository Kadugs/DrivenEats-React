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
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            }
        ]
    },
    {
        title: 'Agora, sua bebida',
        options: [
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            }
        ]
    },
    {
        title: 'Por fim, sua sobremesa',
        options: [
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            },
            {
                image: './assets/moqueca.png',
                name: 'Moqueca',
                description: 'peixe fresco, tomate, coentro, cebola...',
                price: '11.50'
            }
        ]
    }

]

export default function Main() {
    return (
        <main>
            {data.map( (item, index) => (
            <div key={index}>
                <h2 key={index}>{item.title}</h2>
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