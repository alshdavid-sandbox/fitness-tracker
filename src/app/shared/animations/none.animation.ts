import { animate, style, group, query } from '@angular/animations'

export const none = [
    query(':leave', style({}), { optional: true }),
    query(':enter', style({}), { optional: true }),

    group([
        query(':leave', group([
            animate('0ms', style({})),
        ]), { optional: true }),

        query(':enter', group([
            animate('0ms', style({})),
        ]), { optional: true })
    ])
]
