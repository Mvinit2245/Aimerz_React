import React from "react";

function withTheme(WrappedComponent){
    return function EnhancedComponent(props){
        const themeStyle ={
            backgroundColor: 'red',
            color: 'white',
            padding: '10px',
        };

        return(
            <div style={themeStyle}>
                <WrappedComponent {...props}/>
            </div>
        );
    };
}

export default withTheme;