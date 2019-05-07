import React, { useState, useMemo } from 'react';
import './exercises.scss'
import * as exercise from '~/platform/exercise'

const useExercises = (exercises: exercise.Getter) => {
    const [ state, setValue] = useState<any[]>([])
    useMemo(() => {
        exercises.getAll().then(v => setValue(v))
    }, [])
    return state
}

const itemsList = (items: exercise.Exercise[]) => items.map(item => <div
    key={item.id}
    className="item">
        { item.movement }
    </div>
)

export const HomeView = (exercises: exercise.Getter) => () => {
    const state = useExercises(exercises)

    return <div className="view-exercises">
        <nav>
            <div>Exercises</div>
            <div>Add New</div>
        </nav>
        { itemsList(state) }
    </div>
}





