import { createContext } from 'preact'
import { Router } from 'crayon';
import { useContext } from 'preact/hooks';

interface AppContextContainer {
  router: Router
}

export const context: Partial<AppContextContainer> = {}
export const AppContext = createContext<AppContextContainer>(null as any)

export const useAppContext = () => useContext(AppContext)
export const useSelector = <T>(fn: (p: AppContextContainer) => T): T => {
  const context = useAppContext()
  return fn(context)
}
