import cx from "classnames";
import {ITab, ITabs} from "./ITabs.tsx";
import Text from "../Text/Text.tsx";
import "./_tabs.scss"

export default function Tabs({
    children,
    fullWidth,
    className
}: ITabs) {
    const computedClassNames = cx(
        "tabs",
        {
            "tabs--full-width": fullWidth
        },
        className)

    return (
        <div className={computedClassNames}>
            {children}
        </div>
    )
}

export function Tab({
    children,
    className,
    tabName,
    setSelectedTab,
    selectedTab
}: ITab) {

    const computedClassNames = cx(
        "tab",
        {
            "tab--selected": selectedTab === tabName
        },
    className);

    return (
        <div onClick={() => setSelectedTab(tabName)} tab-name={tabName} className={computedClassNames}>
            <Text>{children}</Text>
        </div>
    )
}