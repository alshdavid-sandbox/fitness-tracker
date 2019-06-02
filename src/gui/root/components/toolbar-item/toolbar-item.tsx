import { h } from "preact";
import './toolbar-item.scss'

type ToolbarItemProps = {
    icon?: string,
    text?: string,
    onClick?: () => void
}

export const ToolbarItem = (
    { icon, text, onClick }: ToolbarItemProps = {}
) => <div 
    className="component-toolbar-item"
    onClick={onClick}>
    <i className={`fal fa-${icon}`}></i>
    <p>{text}</p>
</div>