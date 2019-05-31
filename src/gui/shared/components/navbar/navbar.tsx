import './navbar.scss'
import { h} from "preact";

export const Navbar = ({ children }: any) => <nav className="shared-component-navbar">
    { children }
</nav>