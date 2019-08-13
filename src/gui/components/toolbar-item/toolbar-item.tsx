import { h } from "preact";
import './toolbar-item.scss'

type ToolbarItemProps = {
    icon?: string,
    text?: string,
    isActive?: boolean,
    onClick?: () => void
}

export const ToolbarItem = (
    { icon, text, onClick, isActive }: ToolbarItemProps = {}
) => <div 
    className={`component-toolbar-item ${isActive ? 'active' : ''}`}
    onClick={onClick}>
    <i className={`fal fa-${icon}`}></i>
    <p>{text}</p>
</div>