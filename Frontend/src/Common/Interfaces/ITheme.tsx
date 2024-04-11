import {themes} from "../Enums/themes.tsx";

export interface ITheme {
    theme: themes
    handleToggleTheme: () => void
}