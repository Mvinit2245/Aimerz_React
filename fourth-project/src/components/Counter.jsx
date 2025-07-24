import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../store/counterSlice";




function Counter(){
    const count = useSelector(state => state.counter)
     const dispatch = useDispatch()
    return (
        <div className="p-10">
            <button className="bg-red-300 px-10" onClick={() => dispatch(decrement())}> Decrement</button>
        <span className="mx-5">{count}</span>
             <button className="bg-red-300 px-10" onClick={() => dispatch(increment())}> Increment</button>
        </div>
    );
}

export default Counter;