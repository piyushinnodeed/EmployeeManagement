import React from 'react';

export const themes = {
    dark : {
        color: "white",
        background: "black",
        display: 'flex',
        flex: 1,
        height: '800px'
    },
    light : {
        color: "black",
        background: "white",
        display: 'flex',
        flex: 1,
        height: '800px'
    }
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;