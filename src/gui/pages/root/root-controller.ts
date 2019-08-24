// import { BehaviorSubject, Subject, Subscription } from "rxjs";
// import { Router, RouterEventType } from "crayon";

// export enum PageName {
//   workouts,
//   measure,
//   calories
// }

// export class RootController {
//   $ = new Subscription()
//   navbar: BehaviorSubject<Navbar>
//   tabs: Tab[] = [
//     new Tab(
//       ['/workouts','/workouts/recent','/workouts/overview'],
//       new Navbar('Workouts', 'search'),
//     ),
//     new Tab(
//       ['/weights'],
//       new Navbar('Measure'),
//     ),
//     new Tab(
//       ['/calories'],
//       new Navbar('Calories'),
//     )
//   ]
//   toolbarItems = [
//     new ToolbarItem('Workouts', 'dumbbell', '/workouts/recent'),
//     new ToolbarItem('Measure', 'weight', '/weights'),
//     new ToolbarItem('Calories', 'cookie-bite', '/calories'),
//   ]

//   constructor(
//     public router: Router,
//   ) {
//     const tab = this.tabs.find(tab => tab.routes.includes(window.location.pathname))
//     this.navbar = new BehaviorSubject(tab!.navbar)
//     this.$.add(this.router.events.subscribe(event => {
//       if (
//         event.id !== this.router.id ||
//         event.type !== RouterEventType.ProgressEnd) {
//           return
//       }
//       this.onLoad()
//     }))
//     for (const item of this.toolbarItems) {
//       const sub = item.onClick.subscribe(
//         () => this.router.navigate(item.navigateTo))
//       this.$.add(sub)
//     }
//   }

//   destroy() {
//     this.$.unsubscribe()
//   }

//   onLoad = () => {
//     console.log('choose route')
//     const tab = this.tabs.find(tab => tab.routes.includes(window.location.pathname))
//     if (!tab) {
//       return
//     }
//     this.navbar.next(tab.navbar)
//   }
// }
