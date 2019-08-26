import { h } from "preact"
import "./block.scss"

const makeClassName = (className: string, shouldAdd: boolean) =>
  shouldAdd ? className : ""

export const Block = ({
  placeholder,
  children,
  text,
  isTitle,
  hasAction,
  onClick,
  className = '',
  style = {}
}: any) => {
  return (
    <div
      onClick={onClick}
      style={{ ...style }}
      className={`
        component-workouts-add-block
        ${className}
        ${makeClassName("has-action", hasAction)}
        ${makeClassName("is-title", isTitle)}
      `}>
      {!children && !text && placeholder && (
        <div className="placeholder">{placeholder}</div>
      )}
      {text && <div className="text">{text}</div>}
      {children && <div className="text">{children}</div>}
    </div>
  )
}
