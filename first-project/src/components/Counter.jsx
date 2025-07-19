function Counter(){
    let count = 0;

    function increment(){
        count ++;
        alert(count)
    }

    function decrement(){
        count --
    }


    return (

    <>
        <button onClick={decrement}> - </button>
        {count}
        <button onClick={increment}> + </button>
    
    </>
        
    )
}



export default Counter;