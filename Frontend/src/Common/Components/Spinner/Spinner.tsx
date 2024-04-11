import "./_spinner.scss";
import cx from "classnames";
import {ISpinner} from "./ISpinner.tsx";

export default function Spinner({
    small,
    large,
    className
}: ISpinner) {

    const computedClassNames = cx(
        "spinner",
        {
            "spinner--small": small,
            "spinner--large": large
        },
        className
    )

    return (
        <div className={computedClassNames} />
    )
}