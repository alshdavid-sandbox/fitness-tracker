import './main.scss'
import crayon from 'crayon';
import crayonPreact from 'crayon-preact';
import services from '~/gui/services';
import workout from '~/platform/workout';
import { routes } from './routes'
import { createDatabase } from './database'
import { subDays } from 'date-fns'

void async function main() {
  // Bootstrap dependencies
  const app = crayon.create()
  const db = await createDatabase()
  const exercises = new workout.ExerciseRepository(db)

  // // Register services
  services.provide('router', app)
  services.provide('exerciseRepo', exercises)

  // // Setup routes and middleware
  app.use(crayonPreact.router(document.getElementById('outlet')!))
  app.use(services.middleware)
  app.use(routes)
  
  // // Launch application
  app.load()
}()

function debug_add(items: Record<string, any>) {
  for (const key of Object.keys(items)) {
    (window as any)[key] = items[key]
  }
}




// function addExercise(
//   repo: workout.ExerciseRepository = exercises, 
//   e: workout.ExerciseEntity = new workout.Exercise(),
// ) {
//   const randomDay = parseInt((Math.random() * 50).toFixed(0))
//   e.date = subDays(new Date, randomDay)
//   e.movement = 'bench press'
//   e.tags.push('chest')
//   e.sets.push({ reps: 6, weight: 80 })
//   e.sets.push({ reps: 6, weight: 80 })
//   e.sets.push({ reps: 5, weight: 80 })
//   e.sets.push({ reps: 4, weight: 80 })
//   repo.add(e)
// }

// debug_add({
//   db, exercises, workout, subDays, addExercise
// })

// function addExercise(
//   repo: workout.ExerciseRepository = exercises, 
//   e: workout.ExerciseEntity = new workout.Exercise(),
// ) {
//   const randomDay = parseInt((Math.random() * 50).toFixed(0))
//   e.date = subDays(new Date, randomDay)
//   e.movement = 'bench press'
//   e.tags.push('chest')
//   e.sets.push({ reps: 6, weight: 80 })
//   e.sets.push({ reps: 6, weight: 80 })
//   e.sets.push({ reps: 5, weight: 80 })
//   e.sets.push({ reps: 4, weight: 80 })
//   repo.add(e)
// }

// for (let i = 0; i < 50; i++) {
//   addExercise()
// }