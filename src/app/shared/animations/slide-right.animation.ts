import { animate, style, group, query } from '@angular/animations'

export const slideRight = [
    query(':leave',
        style({
            position: 'fixed',
            left: 0,
            top: '41px',
            bottom: 0,
            right: 0,
            transform: 'translate3d(0%, 0, 0)'
        }),
        {
            optional: true
        }),
    query(':enter',
        style({
            position: 'fixed',
            left: 0,
            top: '41px',
            bottom: 0,
            right: 0,
            transform: 'translate3d(100%, 0, 0)'
        }),
        {
            optional: true
        }),
    group([
        query(':leave',
            group([
                animate('500ms cubic-bezier(.35,0,.25,1)',
                style({
                    transform: 'translate3d(-100%, 0, 0)'
                })),
            ]),
            {
                optional: true
            }
        ),
        query(':enter',
            group([
                animate('500ms cubic-bezier(.35,0,.25,1)',
                style({
                    transform: 'translate3d(0%, 0, 0)'
                })),
            ]),
            {
                optional: true
            }
        )
    ])
]
