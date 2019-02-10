import { ToolbarItem } from '~shared/models'

export const toolbarItems: ToolbarItem[]  = [
    new ToolbarItem('Exercises', ['/', 'exercises', 'list']),
    new ToolbarItem('Body Weight', ['/', 'body-weight', 'list']),
    new ToolbarItem('Calories', ['/', 'calories', 'list']),
    new ToolbarItem('Profile', ['/', 'profile'])
]
