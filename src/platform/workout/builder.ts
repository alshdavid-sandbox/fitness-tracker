import { Exercise, Set } from './exercise'
import { movementList, tagList } from './defaults'
import { ToyStore } from '~/kit'
import { startOfDay } from 'date-fns';

export class Builder extends ToyStore.Base<Exercise> {
  constructor(
    initialValue = new Exercise()
  ) {
    super(initialValue)
  }

  setDate(date: Date) {
    this.setState({ date })
  }

  setMovement(movement: string) {
    this.setState({ movement })
  }

  setNotes(notes: string) {
    this.setState({ notes })
  }

  addSet(set: Set = new Set()) {
    this.setState({
      sets: [...this.value.sets, set]
    })
  }

  updateSet(
    index: number, 
    key: keyof Set, 
    value: number
  ) {
    const sets = [...this.value.sets]
    sets[index][key] = value
    this.setState({ sets })
  }

  removeSet(index: number) {
    const sets = [...this.value.sets]
    sets.splice(index, 1)
    this.setState({ sets })
  }

  addTag(tag: string) {
    this.setState({
      tags: [...this.value.tags, tag.toLowerCase()]
    })
  }

  removeTag(tag: string) {
    const tags = [...this.value.tags].filter(t => t !== tag)
    this.setState({ tags })
  }

  isValid() {
    if (!this.value.date) {
      return false
    }
    if (!this.value.movement) {
      return false
    }
    return true
  }
}

export const removeIncompleteSets = (sets: Set[]) => {
  const completeSets = []
  for (const set of sets) {
    if (
      set.reps === 0 ||
      set.weight === 0  
    ) {
      continue
    }
    completeSets.push(set)
  }
  return completeSets
}

export const organiseByDate = (
  exercises: Exercise[]
): Record<string, Exercise[]> => {
  const sorted: Record<string, Exercise[]> = {}
  for (const exercise of exercises) {
    const date = startOfDay(exercise.date).toISOString()
    if (sorted[date] === undefined) {
      sorted[date] = []
    }
    sorted[date].push(exercise)
  }
  return sorted
}

export const getAllTags = (exercises: Exercise[], defaults = tagList): string[] => {
  let tags: string[] = []
  for (const exercise of exercises) {
    tags = [...tags, ...exercise.tags]
  }
  return tags.concat(defaults).sort()
}

export const tagsSearch = (exercises: Exercise[], term: string): string[] => {
  const allTags = getAllTags(exercises)
  const filtered = allTags.filter(tag => tag.toLowerCase().includes(term.toLowerCase()))
  return filtered
}

export const getAllMovements = (exercises: Exercise[], defaults = movementList): string[] => {
  let movements: string[] = []
  for (const exercise of exercises) {
    movements.push(exercise.movement)
  }
  return movements.concat(defaults).sort()
}