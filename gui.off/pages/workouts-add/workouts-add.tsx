import { h } from "preact"
import "./workouts-add.scss"
import { Button } from "~/gui/components"
import { Block } from "./components"
import { useDate } from "./state"
import workout from "~/platform/workout"
import { useService } from "~/gui/services"
import { useExerciseBuilder } from "./state/use-exercise"
import { WorkoutsAddNotesPage } from "../workouts-add-notes/workouts-add-notes"

export const WorkoutsAddPage = () => {
  const { router, constructExercise } = useService()
  const exercise = useExerciseBuilder()

  const { clickInput, dateLabel, setDate, setDateInput } = useDate()

  const cancel = () => router.navigate('/workouts')

  const save = async () => {
    router.navigate('/workouts')
    console.log('save')
  }

  const onDateChange = (dateString: string) => {
    const date = new Date(Date.parse(dateString))
    setDate(date)
  }

  return (
    <div className="component-workouts-add">
      <Block 
        onClick={cancel} 
        isTitle={true} 
        text="Cancel" />
      <Block 
        label="Date"
        onClick={clickInput} 
        placeholder="Enter Date">
        {dateLabel}
      </Block>
      <input
        onChange={(event: any) => onDateChange(event.target.value)}
        style={{
          visibility: "hidden",
          position: "absolute"
        }}
        type="date"
        ref={setDateInput}/>
      <Block
        label="Movement"
        onClick={() => router.push(WorkoutsAddNotesPage)}
        placeholder="Select Movement"
        text={exercise.movement}
        hasAction={true}
      />
      <Block
        label="Tags"
        onClick={() => router.navigate("/workouts/add/tags")}
        placeholder="Add Tags"
        hasAction={true}>
        { exercise.tags.length ? <div 
          className="truncate-text"
          style={{ 
            textAlign: 'center',
            width: '100vw',
            padding: '0 40px',
            textTransform: 'capitalize',
          }}>
          {exercise.tags.join(', ')}
        </div> : undefined }
      </Block>
      <Block
        label="Notes"
        onClick={() => router.navigate("/workouts/add/notes")}
        placeholder="Add Notes"
        hasAction={true}>
        { exercise.notes.length ? <div 
          className="truncate-text"
          style={{ 
            textAlign: 'center',
            width: '100vw',
            padding: '0 40px',
            textTransform: 'capitalize',
          }}>
          {exercise.notes}
        </div> : undefined }
      </Block>
      <Block
        label="Set"
        onClick={() => router.navigate("/workouts/add/sets")}
        placeholder="Add Sets"
        text={workout.exerciseSummary(exercise)}
        hasAction={true}
      />
      <Button 
        onClick={save} 
        className="submit" 
        theme="primary">
        Add Workout
      </Button>
    </div>
  )
}
