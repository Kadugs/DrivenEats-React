import Option from "./Option";

export default function Options (
    {
        sumNum,
        subtrNum,
        options,
        title
    }
) {
    return (
        <div>
            <h2> {title} </h2>
            <ul className="opcoes">
                {options.map( (option, indice) => (
                    <Option 
                        image={option.image}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                        number={option.qtd}
                        index={option.id}
                        sumNum={sumNum}
                        subtrNum={subtrNum}
                        key={indice}
                    />
                ))}
            </ul>
        </div>
    );
}