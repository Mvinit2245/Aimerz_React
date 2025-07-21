import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export function useTheme(){
    return useContext(ThemeContext);
}

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
