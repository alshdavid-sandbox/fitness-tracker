export function scrollToLastLocation(url) {
    let history = JSON.parse(JSON.stringify(window['routeHistory']))
        .find(route => route.url === url && (route.pageYOffset || route.pageYOffset === 0))

    if (!history) {
        return
    }

    window.scrollTo(0, history.pageYOffset || 0)
}