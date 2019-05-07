import './exercises-add.scss'
import React, { useState } from 'react';
import moment from 'moment'
import { useTags, useSets } from './state'
import * as exercise from '~/platform/exercise'
import * as router from '~/platform/router';
import { Navbar } from '~/gui/shared/navbar';
import { Date, Movement, Tags, Sets } from './components'

interface exerciseForm {
    date: string
    movement: string
    tags: string[]
    sets: exercise.Set[]
}

export const ExercisesAddView = (
    nav: router.Navigator, 
    exercises: exercise.Adder
) => () => {
    const { tags, inputTag, removeTag } = useTags()
    const { sets, addSet, removeSet, updateSet } = useSets()
    const [ date, setDate ] = useState<string>(moment().format('YYYY-MM-DD')) 
    const [ movement, setMovement ] = useState<string>('')

    const goBack = () => nav.navigate('/exercises')

    const save = async () => {
        await exercises.add(
            movement,
            moment(date),
            sets,
            tags,
            ''
        )
        goBack()
    }

    return <div className="view-exercises-add">
        <Navbar>
            <div>Add Exercise</div>
            <div onClick={() => goBack()}>Cancel</div>
        </Navbar>
        <main className="content">
            <Date 
                value={date} 
                set={setDate}/>
            <Movement 
                value={movement}
                set={setMovement} />
            <Tags 
                tags={tags} 
                input={inputTag}
                remove={removeTag} />
            <Sets 
                sets={sets} 
                add={addSet} 
                remove={removeSet}
                update={updateSet} />
            <button 
                onClick={(e: any) => save()}>
                Save
            </button>
        </main>
    </div>
}





