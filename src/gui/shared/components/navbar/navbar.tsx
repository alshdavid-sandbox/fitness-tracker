import { h } from "preact";
import './navbar.scss'
import { useState } from "preact/hooks";

export type NavbarAction = ReturnType<typeof useNavbar>

export const useNavbar = () => {
    const [ action, set ] = useState<h.JSX.Element | undefined | null>(undefined)
    const clear = () => set(undefined)
    return {
        action,
        set,
        clear
    }
}

type NavbarProps = {
    children?: any
}

export const Navbar = ({ children }: NavbarProps) => {
    return <header className="component-navbar">
        { children }
    </header>
}