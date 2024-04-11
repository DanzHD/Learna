import React, {createContext, useEffect, useState} from "react";
import {themes} from "../../Common/Enums/themes.tsx";
import {ITheme} from "../../Common/Interfaces/ITheme.tsx";

export const ThemeContext = createContext<ITheme>({theme: themes.lightTheme, handleToggleTheme: () => null});

export function ThemeContextProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<themes>(themes.lightTheme);

    function handleToggleTheme() {
        setTheme(theme == themes.lightTheme ? themes.darkTheme : themes.lightTheme);
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const contextData: ITheme = {
        theme,
        handleToggleTheme
    }

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    )
}

