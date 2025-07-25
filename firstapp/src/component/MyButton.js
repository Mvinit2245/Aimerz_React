import React, { useState } from 'react';

const MyButton = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
           <button onClick={()=> setMessage('Hello , This is React testing')}>
            Click Me
            
           </button>

           {message && <p> {message} </p>}
        </div>
    );
};

export default MyButton;
