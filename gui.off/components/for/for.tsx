import { h, Fragment, JSX } from 'preact'

export type ForProps<T> = {
  items: T[]
  children: (item: T) => JSX.Element
}

export const For = <T,>({ 
  items, 
  children,
}: ForProps<T>) => <Fragment>{
  items.map(children)  
}</Fragment>