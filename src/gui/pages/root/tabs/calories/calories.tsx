import { h } from "preact"
import { useMemo, useEffect } from "preact/hooks"
import { useAppState } from "~/gui/context";

export const Calories = () => {
  const { router, navbarCtrl } = useAppState()

  useEffect(() => {
    navbarCtrl.setState({
      title: "Calories"
    })
  }, [navbarCtrl])

  return <div>Calories</div>
}
