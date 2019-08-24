import { h } from "preact"
import { useMemo, useEffect } from "preact/hooks"
import { useAppContext } from "~/gui/context";

export const Weights = () => {
  const { navbarCtrl } = useAppContext()

  useEffect(() => {
    navbarCtrl.replaceState({
      title: 'Measure',
    })
  }, [navbarCtrl])

  return <div>Weights</div>
}
