import { h } from "preact"
import "./workouts-add.scss"
import { Button } from "~/gui/components"
import { Block } from "./components"
import { useDate } from "./state"
import { useAppState } from "~/gui/context"
import { useSubscribe } from "~/kit/use-subscribe"
import { useMemo } from "preact/hooks"
import { Sleep } from "crayon-kit"
import Workout from "~/platform/workout"

export const WorkoutsAdd = () => {
  const { router, workouts, workoutBuilder } = useAppState()
  const exercise = useSubscribe(workoutBuilder)
  const { clickInput, dateLabel, setDate, setDateInput } = useDate()

  const onHide = (cb: any = () => {}) => {
    return Sleep.duration(300).then(() => cb())
  }

  const cancel = () => {
    onHide(() => { workoutBuilder.reset(); console.log(workoutBuilder.value)})
    router.back()
  }

  const save = async () => {
    if (!workoutBuilder.isValid()) {
      alert('Invalid workout')
      return
    }
    await workouts.add(exercise)
    onHide(() => workoutBuilder.reset())
    router.back()
  }

  useMemo(() => setDate(workoutBuilder.value.date), [workoutBuilder])

  const onDateChange = (dateString: string) => {
    const date = new Date(Date.parse(dateString))
    workoutBuilder.setDate(date)
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
        onClick={() => router.navigate("/workouts/add/movement")}
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
        text={Workout.getPrettySummary(exercise)}
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
