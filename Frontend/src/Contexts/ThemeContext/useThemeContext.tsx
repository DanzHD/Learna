import {ITheme} from "../../Common/Interfaces/ITheme.tsx";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.tsx";

export function useThemeContext(): ITheme {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }

    return context;
}