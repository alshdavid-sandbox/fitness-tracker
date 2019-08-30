import { useAppState } from "~/gui/context";
import { useEffect } from "preact/hooks";

export const useFab = () => {
  const { router, fabCtrl } = useAppState()

  useEffect(() => {
    fabCtrl.show()
    fabCtrl.setState({
      icon: "plus",
      onClick: onFabTap
    })
  }, [fabCtrl])

  const onFabTap = () => {
    router.navigate("/workouts/add")
  }
}