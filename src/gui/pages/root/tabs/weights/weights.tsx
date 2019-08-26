import { h } from "preact"
import { useMemo, useEffect } from "preact/hooks"
import { useAppState } from "~/gui/context";

export const Weights = () => {
  const { navbarCtrl } = useAppState()

  useEffect(() => {
    navbarCtrl.setState({
      title: 'Measure',
    })
  }, [navbarCtrl])

  return <div>Weights</div>
}
