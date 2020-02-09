import { h } from "preact";
import './button.scss'

const makeClassName = (className: string) => className ? className : ''

export const Button = ({ 
  children, 
  onClick, 
  theme, 
  className 
}: any) => {
    return <div 
        className={`
            component-button
            ${makeClassName(theme)}
            ${className}
        `}
        onClick={onClick}>
        { children }
    </div>
}