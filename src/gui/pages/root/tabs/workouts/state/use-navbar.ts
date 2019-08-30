import { useAppState } from "~/gui/context";
import { useEffect } from "preact/hooks";

export const useNavbar = () => {
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