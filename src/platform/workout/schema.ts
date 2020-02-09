export const schemaKeys = {
  id: 'id',
  date: 'date',
  movement: 'movement',
  sets: 'sets',
  tags: 'tags',
  notes: 'notes'
}

export const tableName = 'workouts'

export const schema = Object.keys(schemaKeys).join(',')