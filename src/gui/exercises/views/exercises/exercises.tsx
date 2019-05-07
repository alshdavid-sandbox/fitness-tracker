import './exercises.scss'
import React from 'react';
import * as exercise from '~/platform/exercise'
import * as router from '~/platform/router';
import { Navbar } from '~/gui/shared/navbar';
import { useExercises } from './state';
import { Exercises } from './components';


export const ExercisesView = (nav: router.Navigator, exercises: exercise.Getter) => () => {
    const list = useExercises(exercises)
    console.log(list)
    return <div className="view-exercises">
        <Navbar>
            <div>Exercises</div>
            <div onClick={() => nav.navigate('/exercises/add')}>Add New</div>
        </Navbar>
        <Exercises 
            list={list} />
    </div>
}





