import React, { useEffect, useState } from 'react';
import { Exercise } from '~/platform/exercise'

const useExercises = (exercises: Exercise) => {
    const [ state, setValue] = useState<any[]>([])
    useEffect(() => {
        exercises.getAll().then(v => setValue(v))
    })
    return state
}

export const HomeView = (exercises: Exercise) => () => {
    const state = useExercises(exercises)
    return <div>
        Home
        {
            state.map((item, i) => <pre key={i}>{ JSON.stringify(item, null, 4) }</pre>)
        }
    </div>
}

