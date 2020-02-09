import { h } from "preact"
import "./workouts-add-notes.scss"
import { Button } from "~/gui/components";
import { useState, useEffect } from "preact/hooks";
import { useService } from "~/gui/services";
import { useExerciseBuilder } from "../workouts-add/state/use-exercise";

export const WorkoutsAddNotesPage = () => {
  const { router } = useService()
  const exercise = useExerciseBuilder()

  const [ notes, setNotes ] = useState<string>(exercise.notes)

  useEffect(() => {
    setNotes(exercise.notes)
  }, [exercise])

  const save = () => {
    exercise.notes = notes
    router.back()
  }

  return (
    <div className="component-workouts-add-notes">
      <textarea 
        placeholder="Enter your notes..." 
        onInput={(event: any) => setNotes(event.target.value)}
        value={notes} />
      <Button 
        onClick={save} 
        className="submit" 
        theme="primary">
        Save
      </Button>
    </div>
  )
}
