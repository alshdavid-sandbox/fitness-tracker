import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import preact from "crayon-preact";
import crayon, { Router } from "crayon";
import { GenString } from "crayon-kit";

export interface EmbeddedRouterInterface {
  children: (router: Router, selector: string) => void | Promise<void>
  name?: string
  className?: string
}

export const EmbeddedRouter = ({ 
  children = () => {},
  name = GenString.ofLength(5),
  className = '',
}: EmbeddedRouterInterface) => {
  const [ ref, setRef ] = useState<HTMLElement | undefined>(undefined)
  const preparedName = `${name}-router`

  useEffect(() => {
    if (!ref) {
        return
    }
    const selector = `.${preparedName}`
    const router = crayon.create(preparedName)
    router.use(preact.router(ref, preparedName))
    children(router, selector)

    router.load()
    return () => router.destroy()
  }, [ ref ])

  return <div className={`${className} ${preparedName}-outlet`} ref={setRef}></div>
}