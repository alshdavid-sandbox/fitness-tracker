import { useState, useMemo } from 'react';
import * as exercise from '~/platform/exercise'

export const useExercises = (exercises: exercise.Getter) => {
    const [ state, setValue] = useState<any[]>([])

    useMemo(() => {
        exercises.getAll().then(v => setValue(v))
    }, [])
    
    return state
}