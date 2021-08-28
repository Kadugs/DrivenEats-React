import Options from "./Options";

export default function Main({
    sumNum,
    subtrNum,
    data
}) {
    
    return (
        <main>
            {data.map( (item, index) => (
                <Options key={index}
                    title={item.title}
                    options={item.options}
                    sumNum={sumNum}
                    subtrNum={subtrNum}
                />
            ))}
        </main>
    );
}