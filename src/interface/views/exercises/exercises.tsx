import './exercises.scss'
import React, { useState, useMemo } from 'react';
import * as exercise from '~/platform/exercise'
import * as router from '~/platform/router';

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

export const ExercisesView = (nav: router.Navigator, exercises: exercise.Getter) => () => {
    const state = useExercises(exercises)

    return <div className="view-exercises">
        <nav>
            <div>Exercises</div>
            <div onClick={() => nav.navigate('/exercises/add')}>Add New</div>
        </nav>
        { itemsList(state) }
    </div>
}





