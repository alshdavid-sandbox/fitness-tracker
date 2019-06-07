import { h } from "preact";
import './fab.scss'
import { useState } from "preact/hooks";

export type FabAction = ReturnType<typeof useFab>

export const useFab = () => {
    const [ action, set ] = useState<h.JSX.Element | undefined | null>(undefined)
    const [ onClick, setOnClick ] = useState<any>(() => {})
    const clear = () => set(undefined)

    return {
        action,
        onClick,
        setOnClick,
        set,
        clear
    }
}

type FabProps = {
    children?: any
    onClick?: any
}

export const Fab = ({ children, onClick }: FabProps) => {
    return <div onClick={onClick} className="component-fab">
        { children }
    </div>
}