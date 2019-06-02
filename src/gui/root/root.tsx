import { h } from 'preact'
import { useEffect, useState, useMemo, useCallback } from 'preact/hooks'
import { ToolbarItem } from './components'
import { Router, Request, RouterEventType, RouterEvent } from 'crayon';
import './root.scss'

const useSection = (req: Request, app: Router) => {
    const headers: any = {
        workouts: 'Workouts',
        weights: 'Weights',
        calories: 'Calories'
    }
    const [ section, setSection ] = useState('')
    
    const cb = useCallback((data: RouterEvent) => {
        console.log(data)
        if (data.type !== RouterEventType.ProgressEnd) {
            return
        }
        const s: string = (req.params as any).section
        const navText = headers[s]
        setSection(navText)
    }, [])

    useMemo(() => {
        console.log('running')
        const sub = app.events.subscribe(cb)
        return () => sub.unsubscribe()
    }, [req, app, cb])

    return section
}


export const Root = (req: Request, app: Router) => () => {
    const section = useSection(req, app)

    return <main className="component-root">
        <header>
            { section }
        </header>
        <div>

        </div>
        <footer>
            <ToolbarItem 
                icon="dumbbell"
                text="Workouts" 
                onClick={() => app.navigate('/workouts')} />
            <ToolbarItem 
                icon="weight"
                text="Weights"
                onClick={() => app.navigate('/weights')} />
            <ToolbarItem 
                icon="cookie-bite"
                text="Calories"
                onClick={() => app.navigate('/calories')} />
        </footer>
    </main>
}