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