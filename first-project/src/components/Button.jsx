import React from "react";
import { useTheme} from "./ThemeContext";

// function Button(props){
//     return <button onClick={props.onClick}>{props.text}</button>;
// }

function Button(){
    const { theme, toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme}
        style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
            Switch to {theme === 'light' ?  'Dark' : 'light'} Mode
        </button>
    );
}

export default Button;