import React, {useState} from "react";

function withClickCounter(WrappedComponent){
    return function EnhancedComponent(props){
        const [count, setCount] = useState(0);

        const handleClick =() => {
            setCount(count + 1);
        };
    

        return(
            <div>
                <p> Click Count: {count}</p>
                <WrappedComponent {...props} onClick={handleClick} />
            </div>
        );
    
    };
}

export default withClickCounter;