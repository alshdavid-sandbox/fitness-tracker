import './exercises.scss'
import React from 'react';
import * as exercise from '~/platform/exercise'
import * as express from 'express-browser';
import { Navbar } from '~/gui/shared/components/navbar';
import { useExercises } from './state';
import { Exercises } from './components';


export const ExercisesView = (nav: express.Navigator, exercises: exercise.Getter) => () => {
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





