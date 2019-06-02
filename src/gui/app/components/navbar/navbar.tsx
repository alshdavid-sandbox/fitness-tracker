import { h } from "preact";
import './navbar.scss'

type NavbarProps = {
    children?: any
}

export const Navbar = ({ children }: NavbarProps) => {
    return <header className="component-navbar">
        { children }
    </header>
}