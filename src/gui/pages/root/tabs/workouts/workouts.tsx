import './workouts.scss'
import { h } from 'preact';
import { useMemo, useEffect } from 'preact/hooks';
import { useWorkoutRouter } from './state';
import { Router, RouterEventType } from 'crayon';
import { Workout } from '~/platform/workout';
import { useAppContext } from '~/gui/context';

const useNavbar = () => {
  const { navbarCtrl } = useAppContext()

    useEffect(() => {
      navbarCtrl.replaceState({
        title: 'Workouts',
        icon: 'search',
        onClick: onNavbarTap,
      })
    }, [navbarCtrl])

    const onNavbarTap = () => {
      alert('Search')
    }
}

const useFab = () => {
  const { router, fabCtrl } = useAppContext()

  useEffect(() => {
    fabCtrl.show()
    fabCtrl.setState({
      icon: 'plus',
      onClick: onFabTap,
    })
    return () => fabCtrl.reset()
  }, [fabCtrl])

  const onFabTap = () => {
    router.navigate('/workouts/add')
  }
}

export const Workouts = () => {
    useNavbar()
    useFab()
    const { setWorkoutRouter } = useWorkoutRouter()

    return <div 
        className="component-workouts"
        ref={setWorkoutRouter}>
    </div>
}