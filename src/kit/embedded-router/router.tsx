// import { h, Fragment, createContext, ComponentChild, ComponentChildren } from "preact";
// import { useContext, useMemo, useEffect, useState } from "preact/hooks";
// import { GenString } from "crayon-kit";
// // import { crayonPreact } from "crayon-preact";

// import crayon, { handlerFunc, Router as CrayonRouter } from "crayon";

// export const RouterContext = createContext<any>(null)
// export const RouterProvider = RouterContext.Provider
// export const useRouterContext = () => useContext(RouterContext)

// class RouterCtrl {
//   total = 0
//   registered = 0

//   constructor(
//     private router: CrayonRouter
//   ) {}

//   path(pattern: string, handler: handlerFunc) {
//     this.registered++
//     this.router.path(pattern, handler)
//     this.checkComplete()
//   }

//   use(handler: handlerFunc) {
//     this.registered++
//     this.router.use(handler)
//     this.checkComplete()
//   }

//   checkComplete(){
//     if (this.total === this.registered) {
//       this.router.load()
//       console.log('fin')
//     }
//   }
// }

// export interface RouterInterface {
//   children?: ComponentChildren
//   name?: string
// }

// export const Router = ({ 
//   children,
//   name = GenString.ofLength(5),
// }: RouterInterface) => {
//   const { router, ctrl } = useMemo(
//     () => {
//       const router = crayon.create(name)
//       router.use(crayonPreact.router())
//       const ctrl = new RouterCtrl(router)
//       ctrl.total = (children as any).length
//       return {router, ctrl}
//     }, 
//     [name, children]
//   )

//   useEffect(() => () => router.destroy(), [router])

//   const path = (pattern: string, handler: handlerFunc) => {
//     // ctrl.path()
//   }
//   const use = (middleware: handlerFunc) => {
//     // router.use(middleware)
//     // setCount(count + 1)
//     // if (count === children && (children as any).length) {
//     //   console.log('load now')
//     // }
//   }

//   return <RouterProvider value={{ path, use }}>
//     <div>{children}</div>
//   </RouterProvider>
// }

// export const Path = ({ pattern, handler }: any) => {
//   const { path } = useRouterContext()
//   path(pattern, handler)
//   return <Fragment />
// }

// export const Use = ({ middleware }: any) => {
//   const { use } = useRouterContext()
//   middleware(use)
//   return <Fragment />
// }

// export const EmbeddedRouter = ({ children }: any) => {
//   children(1,2)
//   return <div></div>
// }