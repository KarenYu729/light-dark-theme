import { useState } from "react";

export const useDarkMode = () => {
    // useState, default->dark
    const [ theme, setTheme ] = useState('dark');

    // if theme is dark->set to light, otherwise, set to dark
    // dark-light switch
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }



    return [theme, toggleTheme]
}