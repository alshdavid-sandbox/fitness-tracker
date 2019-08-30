import { h } from "preact"
import "./workouts-add-notes.scss"
import { Button } from "~/gui/components";
import { useAppState } from "~/gui/context";
import { useState } from "preact/hooks";

export const WorkoutsAddNotes = () => {
  const { router, workoutBuilder } = useAppState()
  const [notes, setNotes] = useState<string>(workoutBuilder.value.notes)

  const save = () => {
    workoutBuilder.setNotes(notes)
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
