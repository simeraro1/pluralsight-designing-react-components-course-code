import React, { createContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider startingTheme={startingTheme}>
                {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>
    );
}
function LayoutNoThemeProvider({ startingTheme, children }) {
    const [theme, setTheme] = useState(startingTheme);
    return (
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            {children}
        </div>
    );
}

export default Layout;