export default function Counter (
    {
        countNum, 
        sumNum, 
        subtrNum,
        index
    }) {
    if(countNum > 0) {
        return(
        <p>
            <span className="red" onClick={() => subtrNum(index) }>-</span>
             {countNum}  
             <span className="green" onClick={() => sumNum(index) }>+</span>
        </p>
        );
    }
    return <p></p>;
}