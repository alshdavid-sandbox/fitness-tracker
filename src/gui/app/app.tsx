import { h } from 'preact'
import { Router, Request } from 'crayon';
import { ToolbarItem, Navbar } from './components'
import { useSection, useTabs } from './state';
import './app.scss'
import { Toolbar } from './components/toolbar/toolbar';

export const App = (req: Request, app: Router) => () => {
    const section = useSection(req, app)
    const { setTabs } = useTabs()

    return <section className="component-root">
        <Navbar>
            { section }
        </Navbar>
        <div 
            ref={setTabs}>
            {/* Tabs will be injected here */}
        </div>
        <Toolbar>
            <ToolbarItem 
                icon="dumbbell"
                text="Workouts" 
                isActive={section === 'Workouts'}
                onClick={() => app.navigate('/workouts')} />
            <ToolbarItem 
                icon="weight"
                text="Weights"
                isActive={section === 'Weights'}
                onClick={() => app.navigate('/weights')} />
            <ToolbarItem 
                icon="cookie-bite"
                text="Calories"
                isActive={section === 'Calories'}
                onClick={() => app.navigate('/calories')} />
        </Toolbar>
    </section>
}