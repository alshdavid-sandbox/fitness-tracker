import { h, Context } from 'preact'
import { Request, Response, Router } from 'crayon';

export const withContext = <T = any>(context: Context<any>, contextState?: T) => {
  const options = { value: contextState }
  const apply = (Component: any) => () =>
    h(context.Provider, options as any, 
      h(Component, null))

  return (req: Request, res: Response, state: Record<string, any>, app: Router) => {
    const mount = res.mount
    res.mount = (c: any) => mount(apply(c))
  }
}