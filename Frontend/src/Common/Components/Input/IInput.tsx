export interface IInput {
    type?: inputType,
    className?: string,
    id?: string,
    fullWidth?: boolean,
    dynamicWidth?: boolean,
    placeholder?: string,
    small?: boolean,
    name?: string,
    required?: boolean

}

export enum inputType {
    TEXT = "text",
    PASSWORD = "password",
    EMAIL = "email"
}