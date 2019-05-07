import './exercises-add.scss'
import React, { useState, useMemo } from 'react';
import * as exercise from '~/platform/exercise'
import * as router from '~/platform/router';

export const ExercisesAddView = (nav: router.Navigator) => () => {
    return <div className="view-exercises">
        <nav>
            <div>Add Exercise</div>
            <div onClick={() => nav.navigate('/exercises')}>Cancel</div>
        </nav>
    </div>
}





