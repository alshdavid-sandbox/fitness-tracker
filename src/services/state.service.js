export function addLift({ date, lift, lifts, type }) {
    const lifts = getLiftsByDate(date)

    lifts.push({})

    
}

export function editLift(date, index) {
    
}

export function getLiftsByDate(date) {
    const lifts = localStorage.getItem(date)
    
    if (!lifts) {
        return []
    }

    return JSON.parse(lifts)
}

export function getIndex() {
    let index = localStorage.getItem('index')

    if (!index) {
        index = []
        setIndex(index)
    }

    return JSON.parse(index)
}  

export function setIndex(index) {
    localStorage.setItem('index',  JSON.stringify(index))
}

export function getAndUpdateIndex(date) {
    let index = getIndex()    

    if (index[date]) {
        return index
    }

    index.push(date)
    sortDates(index)

    setIndex(index)
    
    return index
}

export function getAndRemoveDateFromIndex(date) {
    let index = getIndex()    

    const dateIndex = index.indexOf(date);
    
    if (dateIndex !== -1) {
        dateIndex.splice(index, 1);
        setIndex(index)
        return index
    }
}

export function sortDates(dates) {
    dates.sort((a, b) => {
        let dateA = new Date(a)
        let dateB = new Date(b)
        return dateA - dateB
    });
}

/*
    liftsIndex

    {
        excercise: type<string>
    }

*/

export function getLiftsIndex() {
    let liftsIndex = localStorage.getItem('lifts-index')

    if (!liftsIndex) {
        liftsIndex = []
        setLiftsIndex(liftsIndex)
    }

    return JSON.parse(liftsIndex)
}

export function setLiftsIndex(liftsIndex) {
    localStorage.setItem('index',  JSON.stringify(liftsIndex))
}

export function updateLifts(lift, type) {
    if (!type) {
        throw new Error("updateLifts | Type required")
    }

    let liftsIndex = getLiftsIndex()
  
    liftsIndex[lift.toLowerCase()] = type.toLowerCase()
    setLiftsIndex(liftsIndex)
    return liftsIndex
}