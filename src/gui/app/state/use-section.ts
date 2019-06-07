import { useState, useMemo, useCallback } from 'preact/hooks'
import { Router, Request, RouterEvent, RouterEventType } from 'crayon';

export const useSection = (req: Request, app: Router) => {
    const headers: any = {
        workouts: 'Workouts',
        weights: 'Weights',
        calories: 'Calories'
    }
    const [ section, setSection ] = useState('')
    
    const cb = useCallback((data: RouterEvent) => {
        if (data.type !== RouterEventType.ProgressEnd) {
            return
        }
        const s: string = req.pathname.split('/')[1]
        const navText = headers[s]
        setSection(navText)
    }, [])

    useMemo(() => {
        const sub = app.events.subscribe(cb)
        return () => sub.unsubscribe()
    }, [req, app, cb])

    return { section }
}