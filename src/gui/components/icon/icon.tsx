import { h } from 'preact'

export class IconController {}

type SpanProps = h.JSX.IntrinsicElements['span']
interface IconProps extends SpanProps {
  weight?: string
  src: string
}

export const Icon = ({
  weight = 'far', 
  src = '',
  style = {},
  ...spanProps
}: IconProps) => {
  return (
    <span
      {...spanProps}
      style={{ 
        display: 'inline-block', 
        ...style as any
      }}
      className={`${weight} fa-${src}`}
    />
  )
}
