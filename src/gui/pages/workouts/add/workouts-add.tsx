import { h } from "preact";
import './workouts-add.scss'
import { Button } from "~/gui/components";
import { Router } from "crayon";
import { Block } from "./components";
import { useDate } from "./state";
import { Workout } from "~/platform/workout";
import { useAppContext } from "~/gui/context";


export const WorkoutsAdd = () => {
    const { router } = useAppContext()
    const { clickInput, dateLabel, getDate, setDateInput } = useDate()

    return <div className="component-workouts-add">
        <Block
            onClick={() => router.back()}
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
            onClick={() => router.navigate('/workouts/add/movement')}
            placeholder="Select Movement" 
            hasAction={true} />
        <Block
            onClick={() => router.navigate('/workouts/add/tags')}
            placeholder="Add Tags" 
            hasAction={true} />
        <Block
            onClick={() => router.navigate('/workouts/add/notes')}
            placeholder="Add Notes" 
            hasAction={true} />
        <Block
            onClick={() => router.navigate('/workouts/add/sets')}
            placeholder="Add Sets" 
            hasAction={true} />
        <Button 
            className="submit"
            theme="primary">
            Add Workout
        </Button>
    </div>
}