import { useState } from 'preact/hooks';

export const useTags = () => {
    const [ tags, setTags ] = useState<string[]>([])

    const inputTag = () => {
        const value = prompt('Please enter tag name')
        if (!value || tags.includes(value)) {
            return
        }
        setTags([ ...tags, value ])
    }
    
    const removeTag = (i: number) => {
        const ok = confirm('Are you sure?')
        if (!ok) {
            return
        }
        tags.splice(i, 1)
        setTags([...tags])
    }

    return {
        tags,
        setTags,
        inputTag,
        removeTag
    }
}
