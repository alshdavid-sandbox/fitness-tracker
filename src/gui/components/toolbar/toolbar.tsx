import { h } from "preact";
import './toolbar.scss'

type ToolbarProps = {
    children?: any
}

export const Toolbar = ({ children }: ToolbarProps) => {
    return <footer className="component-toolbar">
        { children }
    </footer>
}