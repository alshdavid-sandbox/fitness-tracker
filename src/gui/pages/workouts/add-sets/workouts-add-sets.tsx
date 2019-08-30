import './workouts-add-sets.scss'
import { h } from 'preact'
import { Button } from '~/gui/components'
import { useAppState } from '~/gui/context'
import { useSubscribe } from '~/kit/use-subscribe'
import Exercise from '~/platform/workout'

export const WorkoutsAddSets = () => {
  const { router, workoutBuilder } = useAppState()
  const exercise = useSubscribe(workoutBuilder)

  const resume = async () => {
    const sets = Exercise.removeIncompleteSets(exercise.sets)
    workoutBuilder.setState({ sets })
    router.back()
  }

  const addSet = () => {
    const newSet = new Exercise.Set()
    const lastSet = exercise.sets[exercise.sets.length - 1]
    if (lastSet) {
      newSet.reps = lastSet.reps
      newSet.weight = lastSet.weight
    }
    workoutBuilder.addSet(newSet)
  }

  return (
    <div className='component-workouts-add-sets'>
      <div className='set'>
        <div className='reps'>Reps</div>
        <div className='weight'>Weight</div>
        <div className='delete'></div>
      </div>
      {exercise.sets.map((set, i) => (
        <div className='set'>
          <div className='reps'>
            <input
              onChange={(e: any) =>
                workoutBuilder.updateSet(i, 'reps', parseFloat(e.target.value))
              }
              placeholder='Enter Sets'
              value={set.reps ? set.reps : undefined}
              type='number'
            />
          </div>
          <div className='weight'>
            <input
              onChange={(e: any) =>
                workoutBuilder.updateSet(i, 'weight', parseFloat(e.target.value))
              }
              placeholder='Enter Weight'
              value={set.weight ? set.weight : undefined}
              type='number'
            />
          </div>
          <div
            onClick={() => workoutBuilder.removeSet(i)}
            className='delete far fa-times'></div>
        </div>
      ))}
      <Button
        onClick={addSet}
        className='add'
        theme='secondary'>
        Add Set
      </Button>
      <Button onClick={resume} className='submit' theme='primary'>
        Continue
      </Button>
    </div>
  )
}
