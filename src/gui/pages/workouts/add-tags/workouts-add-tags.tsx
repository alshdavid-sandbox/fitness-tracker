import "./workouts-add-tags.scss"
import { h } from "preact"
import { SearchPanel, SearchSuggestions, Button, Icon } from "~/gui/components"
import { useAppState } from "~/gui/context"
import { useState, useMemo } from "preact/hooks"
import { useSubscribe } from "~/kit/use-subscribe";
import { Workout } from "~/platform/workout";

export const WorkoutsAddTags = () => {
  const { router, workoutBuilder, workouts } = useAppState()
  const exercise = useSubscribe(workoutBuilder)
  const [tagInput, setTagInput] = useState<string>('')
  const [filteredTags, setFilteredTags] = useState<string[]>([])

  const onInput = (value: string) => {
    setTagInput(value)
    searchForTags(value)
  }

  const searchForTags = async (term: string) => {
    const exercises = await workouts.getAll()
    const filtered = Workout.tagsSearch(exercises, term)
    setFilteredTags(filtered)
  }

  const onTagSuggestionSelect = (suggestion: string) => {
    workoutBuilder.addTag(suggestion)
    setTagInput('')
    setFilteredTags([])
  }

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
        onInput={(e: any) => onInput(e.target.value)}
        onKeyDown={onEnter} />
        <SearchSuggestions 
          options={filteredTags} 
          onSelect={onTagSuggestionSelect} />
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
