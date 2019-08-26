import "./workouts-add-tags.scss"
import { h } from "preact"
import { SearchPanel, Button, Icon } from "~/gui/components"
import Workout from "~/platform/workout"
import { useAppState } from "~/gui/context"
import { useState, useMemo } from "preact/hooks"
import { useSubscribe } from "~/kit/use-subscribe";

export const WorkoutsAddTags = () => {
  const { router, workoutBuilder } = useAppState()
  const exercise = useSubscribe(workoutBuilder)
  const [tagInput, setTagInput] = useState<string>('')

  const onEnter = (event: KeyboardEvent) => {
    if (event.which !== 13) {
      return
    }
    workoutBuilder.addTag(tagInput)
    setTagInput('')
  }

  const resume = () => {
    router.back()
  }


  return (
    <div className="component-workouts-add-tags">
      <SearchPanel 
        placeholder="Enter Tags" 
        value={tagInput}
        onInput={(e: any) => setTagInput(e.target.value)}
        onKeyDown={onEnter} />
        { exercise.tags.map(tag => 
          <div className="tag">
            {tag}
            <Icon 
              onClick={() => workoutBuilder.removeTag(tag)}
              weight="fas"
              src="trash" 
              style={{ color: 'red' }}/>
          </div>)}
      <Button 
        onClick={resume} 
        className='submit' 
        theme='primary'>
        Continue
      </Button>
    </div>
  )
}
