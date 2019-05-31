import { h } from 'preact';
import * as exercise from '~/platform/exercise'

const getAveragReps = (sets: exercise.Set[]) => Math.round(sets.reduce((p, c) => p + c.reps, 0) / sets.length)
const getAverageWeight = (sets: exercise.Set[]) => Math.round(sets.reduce((p, c) => p + c.weight, 0) / sets.length)
const getLiftdex = (sets: exercise.Set[]) => Math.round(sets.reduce((p, c) => p + c.weight * c.reps,0))

interface ExercisesProps {
    list: exercise.Exercise[]
}

export const Exercises = ({ list, children }: any) => <div>
    {
        list.map((item: any) => (
            <div
                key={item.id}
                className="item">
                <div className="title">
                    { item.movement }
                </div>
                <div className="table">
                    <div>
                        <div>Reps</div>
                        <div>{ getAveragReps(item.sets) }</div>
                    </div>
                    <div>
                        <div>Weight</div>
                        <div>{ getAverageWeight(item.sets) }</div>
                    </div>
                    <div>
                        <div>Liftdex</div>
                        <div>{ getLiftdex(item.sets) }</div>
                    </div>
                </div>
            </div>
        ))
    }
</div>