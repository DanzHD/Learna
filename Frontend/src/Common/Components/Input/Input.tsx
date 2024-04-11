import cx from "classnames";
import {IInput, inputType} from "./IInput.tsx";
import "./_input.scss"


export default function Input({
    type = inputType.TEXT,
    className,
    id,
    name,
    fullWidth,
    dynamicWidth,
    placeholder,
    small,
    required

}: IInput) {
    const computedClassNames = cx(
        "input",
        {
            "input--small": small,
            "input--full-width": fullWidth,
            "input--dynamic-width": dynamicWidth
        },
        className
    );

    return (
        <input name={name} id={id} type={type} placeholder={placeholder} className={computedClassNames} required={required} />
    )


}