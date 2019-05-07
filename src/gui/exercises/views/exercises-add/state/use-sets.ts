import { useState } from 'react';
import * as exercise from '~/platform/exercise'

export const useSets = () => {
    const [ sets, setSets ] = useState<exercise.Set[]>([])

    const addSet = (set: exercise.Set) => {
        setSets([...sets, set])
    }

    const removeSet = (i: number) => {
        sets.splice(i, 1)
        setSets([...sets])
    }

    const updateSet = (i: number, reps?: number, weight?: number) => {
        const newSets = [...sets]
        if (reps !== undefined) {
            newSets[i].reps = reps
        }
        if (weight  !== undefined) {
            newSets[i].weight = weight
        }
        setSets(newSets)
    }

    return {
        sets,
        setSets,
        addSet,
        removeSet,
        updateSet
    }
}
