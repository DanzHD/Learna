import React, {ReactNode} from "react";
import {tabs} from "../../../Pages/Auth/EAuth.tsx";

export interface ITabs {
    children?: ReactNode,
    fullWidth?: boolean,
    className?: string
}

export interface ITab {
    children?: ReactNode,
    className?: string,
    tabName: tabs,
    selectedTab?: tabs
    setSelectedTab: React.Dispatch<React.SetStateAction<tabs>>
}