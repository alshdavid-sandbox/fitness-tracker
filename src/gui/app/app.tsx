import { h } from 'preact'
import { useState } from 'preact/hooks';
import { Router, Request } from 'crayon';
import { ToolbarItem, Navbar, Toolbar, useNavbar, useFab, Fab } from '~/gui/shared/components'
import { useSection, useTabs } from './state';
import './app.scss'

export const App = (req: Request, app: Router) => () => {
    const navbar = useNavbar()
    const fab = useFab()
    const { section } = useSection(req, app)
    const { setTabs } = useTabs(navbar, fab)

    return <section className="component-root">
        <Navbar>
            { section }
            { navbar.action && navbar.action }
        </Navbar>
        <div 
            className="tab-root"
            ref={setTabs}>
            {/* Tabs will be injected here */}
        </div>
        {   fab.action && 
            <Fab 
                onClick={() => {
                    console.log(fab)
                    fab.onClick()
                }}>
                { fab.action }
            </Fab> }
        <Toolbar>
            <ToolbarItem 
                icon="dumbbell"
                text="Workouts" 
                isActive={section === 'Workouts'}
                onClick={() => app.navigate('/workouts/recent')} />
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