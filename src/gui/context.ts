import { createContext } from 'preact'
import { Router, Request } from 'crayon';
import { useContext } from 'preact/hooks';
import { NavbarController, FabController } from './components';

interface AppContextContainer {
  navbarCtrl: NavbarController,
  fabCtrl: FabController,
  router: Router,
}

export const context: Partial<AppContextContainer> = {
  navbarCtrl: new NavbarController(),
  fabCtrl: new FabController(),
}
export const AppContext = createContext<AppContextContainer>(null as any)

export const useAppContext = () => useContext(AppContext)
export const useSelector = <T>(fn: (p: AppContextContainer) => T): T => {
  const context = useAppContext()
  return fn(context)
}
