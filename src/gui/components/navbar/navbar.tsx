import { h } from "preact";
import { Icon } from '../icon'
import './navbar.scss'
import { BehaviorSubject } from "rxjs";

export interface NavbarState extends NavbarProps{

}

export class NavbarController {
  state: BehaviorSubject<NavbarState>
  
  get value() {
    return this.state.value
  }

  constructor(
    props: NavbarState = {}
  ) {
    this.state = new BehaviorSubject(props)
  }

  setState(state: Partial<NavbarState>) {
    this.state.next({
      ...this.value,
      ...state
    })
  }

  replaceState(state: Partial<NavbarState>) {
    this.reset()
    this.setState(state)
  }

  reset() {
    this.state.next({})
  }
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
