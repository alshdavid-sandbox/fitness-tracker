import { useState, useCallback, useEffect } from 'preact/hooks'
import { RouterEvent, RouterEventType } from 'crayon';
import { useAppContext } from '~/gui/context';

const headers: any = {
  workouts: 'Workouts',
  weights: 'Weights',
  calories: 'Calories'
}

export const useSection = () => {
  const { router } = useAppContext()
  const pathname = window.location.pathname
  const [section, setSection] = useState('')

  const cb = useCallback((data: RouterEvent) => {
    if (data.type !== RouterEventType.ProgressEnd) {
      return
    }
    const section = pathname.split('/')[1]
    const navText = headers[section]
    setSection(navText)
  }, [router])

  useEffect(() => {
    const sub = router.events.subscribe(cb)
    return () => sub.unsubscribe()
  }, [router])

  return { section }
}