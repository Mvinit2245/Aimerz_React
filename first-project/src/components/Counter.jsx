import { useEffect, useState , useRef} from "react";
import useAlertChange from "../hooks/useAlertCahnge";

function Counter(){
    const [count, setCount] = useState(15);
    //useAltertaChange use 
    useAlertChange(count)

    function increment(){
       setCount (count => count + 1)
        
    }

    function decrement(){
        setCount (count => count - 1)
    }
    
    //When Any state or updates occurs this function will call , use for side effects
    // useEffect(() => {
    //     alert('You are updating')
    // },[count])
   
    const inputRef = useRef(null);

    return (

    <>
        <button onClick={decrement}> - </button>
        {count}
        <button onClick={increment}> + </button>
        <br/>

        <input ref={inputRef} type="text" name="" id="" />
        <button onClick={()=> inputRef.current.focus()}> Focus Input</button>
    
    </>
        
    )
}



export default Counter;