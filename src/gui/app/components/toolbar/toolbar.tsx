import { h, Fragment } from "preact";
import './toolbar.scss'

type ToolbarProps = {
    children?: any
}

export const Toolbar = ({ children }: ToolbarProps) => {
    return <Fragment>
        <footer className="component-toolbar">
            { children }
        </footer>
        {/* <div className="component-toolbar-spacer"></div> */}
    </Fragment>
    
    
}