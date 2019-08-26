import "./workouts.scss"
import { h } from "preact"
import { useMemo, useEffect } from "preact/hooks"
import { useWorkoutRouter } from "./state"
import { Router, RouterEventType } from "crayon"
import { useAppState } from "~/gui/context"

const useNavbar = () => {
  const { navbarCtrl } = useAppState()

  useEffect(() => {
    navbarCtrl.setState({
      title: "Workouts",
      icon: "search",
      onClick: onNavbarTap
    })
  }, [navbarCtrl])

  const onNavbarTap = () => {
    alert("Search")
  }
}

const useFab = () => {
  const { router, fabCtrl } = useAppState()

  useEffect(() => {
    fabCtrl.show()
    fabCtrl.setState({
      icon: "plus",
      onClick: onFabTap
    })
    return () => fabCtrl.reset()
  }, [fabCtrl])

  const onFabTap = () => {
    router.navigate("/workouts/add")
  }
}

export const Workouts = () => {
  useNavbar()
  useFab()
  const { setWorkoutRouter } = useWorkoutRouter()
  return <div className="component-workouts" ref={setWorkoutRouter}></div>
}
