import registerServiceWorker from './service-worker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes'
import { DB } from './data/db.service'
// import { Exercises } from './data/exercises.service'

import './index.css';

DB.init()


// Exercises.add({
//     movement: 'test',
//     sets: [
//         { weight: 70, reps: 6 },
//         { weight: 70, reps: 6 },
//         { weight: 70, reps: 5 },
//         { weight: 70, reps: 5 }
//     ]
// })
// console.log(Exercises.get())

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
