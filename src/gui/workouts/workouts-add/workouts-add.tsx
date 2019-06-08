import { h } from "preact";
import './workouts-add.scss'
import { Button } from "~/gui/shared/components";
import { Router } from "crayon";
import { Block } from "./components";
import { useDate, useRoutes } from "./state";
import { Workout } from "~/platform/workout";


export const WorkoutsAdd = (app: Router, workout: Workout) => () => {
    const { clickInput, dateLabel, getDate, setDateInput } = useDate()
    console.log(workout)

    return <div className="component-workouts-add">
        <Block
            onClick={() => app.back()}
            isTitle={true}
            text="Cancel" />
        <Block
            onClick={clickInput}
            placeholder="Enter Date">
            { dateLabel }
        </Block>
        <input
            onChange={(e: any) => getDate(e.target.value)}
            style={{ visibility: 'hidden', 
                position: 'absolute' }}
            type="date" 
            ref={setDateInput} />
        <Block
            onClick={() => app.navigate('/workouts/add/movement')}
            placeholder="Select Movement" 
            hasAction={true} />
        <Block
            onClick={() => app.navigate('/workouts/add/tags')}
            placeholder="Add Tags" 
            hasAction={true} />
        <Block
            onClick={() => app.navigate('/workouts/add/notes')}
            placeholder="Add Notes" 
            hasAction={true} />
        <Block
            onClick={() => app.navigate('/workouts/add/sets')}
            placeholder="Add Sets" 
            hasAction={true} />
        <Button 
            className="submit"
            theme="primary">
            Add Workout
        </Button>
    </div>
}