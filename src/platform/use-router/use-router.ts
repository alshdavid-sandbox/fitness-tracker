import { useState, useEffect } from "preact/hooks";
import { Router, create } from "crayon";
import preact from "crayon-preact";

export type routerFunc = (nav: Router, selector: string) => void

export const useRouter = (
    name: string, 
    handlers: routerFunc
): [ Router, (el: HTMLElement) => void ] => {
    const [ ref, setRef ] = useState<HTMLElement | undefined>(undefined)
    const [ app, setApp ] = useState<Router | undefined>(undefined)

    useEffect(() => {
        if (app || !ref) {
            return
        }
        const router = create(name)
        router.use(preact.router(ref, name))
        handlers(router, '.'+ name)
        router.load()
        setApp(router as any)
        return () => router.destroy()
    }, [ ref ])

    return ([ app, setRef ] as any)
}