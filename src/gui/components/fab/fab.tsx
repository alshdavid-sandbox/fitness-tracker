import { h } from "preact";
import { BehaviorSubject } from 'rxjs'
import { ToyStore } from "~/kit";
import './fab.scss'
import { Icon } from "../icon/icon";

interface FabState {
  show: boolean
  icon?: string
  iconStyle?: string
  onClick?: any
  pulse?: boolean
}

export class FabController extends ToyStore.Base<FabState> {
  constructor(
    initialValue: FabState = { show: false }
  ) {
    super(initialValue)
  }
  
  show() {
    this.setState({ show: true })
  }

  hide() {
    this.setState({ show: false })
  }
}

type FabProps = {
    onClick?: any
    iconStyle?: string
    icon?: string
    pulse?: boolean
}

export const Fab = ({ 
  icon, 
  iconStyle, 
  onClick = () => {},
  pulse = false 
}: FabProps) => {
    const pulseClassName = pulse ? 'pulse' : ''
    return <div 
      onClick={onClick} 
      className={`component-fab ${pulseClassName}`}>
      { icon && <Icon 
        src={icon} 
        weight={iconStyle} /> }
    </div>
}