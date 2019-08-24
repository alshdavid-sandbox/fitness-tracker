import { h } from "preact"
import { useMemo, useEffect } from "preact/hooks"
import { useAppContext } from "~/gui/context";

export const Calories = () => {
  const { router, navbarCtrl } = useAppContext()

  useEffect(() => {
    navbarCtrl.replaceState({
      title: "Calories"
    })
  }, [navbarCtrl])

  return <div>Calories</div>
}
