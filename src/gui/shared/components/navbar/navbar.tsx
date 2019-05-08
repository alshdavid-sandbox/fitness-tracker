import './navbar.scss'
import React, { memo } from "react";

interface NavbarProps {
    children: React.ReactNode
}

export const Navbar = memo<NavbarProps>(({ children }) => <nav className="shared-component-navbar">
    { children }
</nav>)