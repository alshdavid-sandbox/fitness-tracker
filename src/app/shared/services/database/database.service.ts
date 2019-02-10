import { Injectable } from '@angular/core'
import { Exercise } from '~shared/models'

@Injectable()
export class DatabaseService {
  public exercises = [
    new Exercise('standing barbell bench press', ['chest']),
    new Exercise('pushup', ['chest', 'arms', 'trisep']),
    new Exercise('deadlift', ['legs']),
  ]

  searchExercises(search: string) {
    search = search.toLowerCase()
    const result: Exercise[] = []
    for (const exercise of this.exercises) {
        const item = JSON.stringify(exercise)
        if (item.toLowerCase().includes(search)) {
            result.push(exercise)
        }
    }
    return result
  }

}
