import React from "react";
import { ThemeProvider } from "./ThemeContext";

function withTheme(WrappedComponent){
    return function EnhancedComponent(props){
        // const themeStyle ={
        //     backgroundColor: 'red',
        //     color: 'white',
        //     padding: '10px',
        // };

        return(
            <ThemeProvider>
                <WrappedComponent {...props}/>
            </ThemeProvider>

            
            // <div style={themeStyle}>
            //     <WrappedComponent {...props}/>
            // </div>
        );
    };
}

export default withTheme;