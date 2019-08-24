import './toolbar-item.scss'
import { h } from "preact";
import { Icon } from "../icon";

type ToolbarItemProps = {
    icon?: string,
    text?: string,
    isActive?: boolean,
    onClick?: () => any
}

export const ToolbarItem = ({ 
  icon, 
  text, 
  onClick, 
  isActive 
}: ToolbarItemProps) => <div 
    className={`component-toolbar-item ${isActive ? 'active' : ''}`}
    onClick={onClick}>
    {icon && 
      <Icon 
        weight="fal" 
        src={icon} />}
    <p>{text}</p>
</div>