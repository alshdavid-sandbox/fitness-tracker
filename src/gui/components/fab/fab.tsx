import { h } from "preact";
import { BehaviorSubject } from 'rxjs'
import './fab.scss'
import { Icon } from "../icon/icon";

interface FabState {
  show: boolean
  icon?: string
  iconStyle?: string
  onClick?: any
}

export class FabController {
  state: BehaviorSubject<FabState>
  
  get value() {
    return this.state.value
  }

  constructor(
    props: FabState = { show: false }
  ) {
    this.state = new BehaviorSubject(props)
  }

  show() {
    this.setState({ show: true })
  }

  hide() {
    this.setState({ show: false })
  }

  setState(state: Partial<FabState>) {
    this.state.next({
      ...this.value,
      ...state
    })
  }

  reset() {
    this.state.next({ show: false })
  }
}

type FabProps = {
    onClick?: any
    iconStyle?: string
    icon?: string
}

export const Fab = ({ 
  icon, 
  iconStyle, 
  onClick = () => {}, 
}: FabProps) => {
    return <div 
      onClick={onClick} 
      className="component-fab">
      { icon && <Icon 
        src={icon} 
        weight={iconStyle} /> }
    </div>
}