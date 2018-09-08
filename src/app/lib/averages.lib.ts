export function generateAverage(list, key) {
    return (list.reduce((a, b) => a + parseInt(b[key], 10), 0)) / list.length || null
}

export function generateAverageString(sets) {
    let repsAverage = generateAverage(sets ,'reps')
    let weightsAverage = generateAverage(sets ,'weight')
    
    if (!repsAverage || !weightsAverage) {
        return "Invalid Entry"
    }

    repsAverage = Math.round(repsAverage * 100) / 100
    weightsAverage = Math.round(weightsAverage * 100) / 100

    return `${sets.length} x ${repsAverage} @ ${weightsAverage}kg`
}