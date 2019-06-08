import { h } from "preact";
import './workouts-add-sets.scss'
import { Router } from "crayon";
import { Button } from "~/gui/shared/components";
import { useState } from "preact/hooks";

const useSets = () => {
    const [ sets, setSets ] = useState<any>([])

    const addSet = () => {
        setSets([ ...sets, { reps: undefined, weight: undefined } ])
    }

    const updateSet = (i: number, key: string, value: string) => {
        const newSets = [ ...sets ]
        newSets[i][key] = value
        setSets(newSets)
    }

    const removeSet = (i: number) => {
        const newSets = [ ...sets ]
        newSets.splice(i, 1)
        setSets(newSets)
    }

    return {
        sets,
        addSet,
        updateSet,
        removeSet
    }
}


export const WorkoutsAddSets = (app: Router) => () => {
    const { sets, addSet, updateSet, removeSet } = useSets()

    return <div className="component-workouts-add-sets">
        <div className="set">
            <div className="reps">Reps</div>
            <div className="weight">Weight</div>
            <div className="delete"></div>
        </div>
        {
            sets.map((set: any, i: number) => <div className="set">
                <div className="reps">
                    <input 
                        onChange={(e: any) => updateSet(i, 'reps', e.target.value)}
                        placeholder="Enter Sets"
                        value={set.reps}
                        type="number" />
                </div>
                <div className="weight">
                    <input 
                        onChange={(e: any) => updateSet(i, 'weight', e.target.value)}
                        placeholder="Enter Weight"
                        value={set.weight}
                        type="number" />
                </div>
                <div 
                    onClick={() => removeSet(i)}
                    className="delete far fa-times">
                </div>
            </div>)
        }
        <Button 
            onClick={() => addSet()}
            className="add"
            theme="secondary">
            Add Set
        </Button>
        <Button 
            onClick={() => app.back()}
            className="cancel"
            theme="secondary">
            Cancel
        </Button>
        <Button 
            onClick={() => app.back()}
            className="submit"
            theme="primary">
            Save
        </Button>
    </div>
}