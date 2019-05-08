export interface request {}

export interface Navigator {
    navigate: (path: string) => void
}

export interface response {
    mount: any
    redirect: (path: string) => void
    ctx?: any
}

export type handlerFunc = (req: request, res: response) => void

export interface Router {
    path: (path: string, ...handlers: handlerFunc[]) => void
    use: (handler: handlerFunc) => void
    navigate: (path: string) => void
    load: () => Promise<void>
    middleware: handlerFunc[]
    routes: Record<string, handlerFunc[]>
}

export const path = (r: Router) => (path: string, ...handlers: handlerFunc[]) => {
    r.routes[path] = handlers
}

export const use = (r: Router) => (handler: handlerFunc) => {
    r.middleware.push(handler)
}

export const navigate = (r: Router) => (path: string) => {
    window.history.pushState(null, document.title, path)
    r.load()
}

export const load = (r: Router) => async () => {
    const path = window.location.pathname
    const req = {}
    const res = {
        mount: console.log,
        redirect: (path: string) => r.navigate(path),
        ctx: {}
    }
    for (const middleware of r.middleware) {
        await middleware(req, res)
    }
    for (const handler of r.routes[path]) {
        await handler(req, res)
    }
}

export const create = (): Router => {
    const r: any = {
        middleware: [],
        routes: {},
    }
    r.path = path(r)
    r.use = use(r)
    r.navigate = navigate(r)
    r.load = load(r)
    return r
}
