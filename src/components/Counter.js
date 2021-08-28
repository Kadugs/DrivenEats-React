export default function Counter ({countNum, setCountNum}) {
    if(countNum > 0) {
        return(
        <p>
            <span className="red" onClick={() => setCountNum(countNum - 1)}>-</span>
             {countNum}  
             <span className="green" onClick={() => setCountNum(countNum + 1)}>+</span>
        </p>
        );
    }
    return <p></p>;
}