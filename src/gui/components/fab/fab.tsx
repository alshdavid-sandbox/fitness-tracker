import { h } from "preact";
import './fab.scss'
import { Icon } from "../icon/icon";

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