import { useState } from 'react';

function useTheme() {
    const [theme, setTheme] = useState('light');

    function validateTheme(themeValue) {
        if(themeValue === "dark"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        setTheme: validateTheme
    };
}

export default useTheme;