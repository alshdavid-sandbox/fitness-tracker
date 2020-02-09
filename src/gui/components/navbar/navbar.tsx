import './navbar.scss'
import { h } from "preact";
import { Icon } from '../icon'

export interface NavbarState {
  title?: string
  icon?: string
  onClick?: () => any
}

type NavbarProps = {
    title?: string
    icon?: string
    onClick?: () => any
}

export const Navbar = ({ 
  title, 
  icon, 
  onClick = () => {}
}: NavbarProps) => 
  <header className="component-navbar">
    <div>{title}</div>
    {icon && <Icon src={icon} onClick={onClick}/>}
  </header>
