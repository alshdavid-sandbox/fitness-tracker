import { Component } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
window['routeHistory'] = []

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  private _routeScrollPositions: { [url: string]: number }[] = []
  private _subscriptions = []
  private _routeHistory: any[] = window['routeHistory']
  private _lastRoute = ''

  constructor(private router: Router) { }

  async ngOnInit() {
    this._subscriptions.push(
      this.router.events.subscribe((routeEvent) => {
        if (routeEvent instanceof NavigationStart) {
          if (this._routeHistory.length) {
            this._routeHistory[0].pageYOffset = window.pageYOffset
          }

          this._routeHistory.unshift({
            url: routeEvent.url,
            pageYOffset: undefined
          })

          this._lastRoute = routeEvent.url
        }
      })
    )
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}