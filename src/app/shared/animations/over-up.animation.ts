import { animate, style, group, query } from '@angular/animations'

export const overUp = [
    query(':leave', style({ position: 'fixed', left: 0, top: 0, bottom: 0, right: 0 , transform: 'translate3d(0, 0, 0)'}), {optional:true}),
    query(':enter', style({ position: 'fixed', zIndex: 9999, background: 'white', top: 0, bottom: 0, left: 0, right: 0, transform: 'translate3d(0, 100%, 0)'}), {optional:true}),

    group([
      query(':leave', group([
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0, 0, 0)' })), // y: '-100%'
      ]), {optional:true}),

      query(':enter', group([
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0, 0%, 0)' })),
      ]), {optional:true})
    ])
  ]
