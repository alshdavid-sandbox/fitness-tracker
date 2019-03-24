// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBiLXZu7_OrJDzDo1Jm14wD6KeGWpWvsMU",
    authDomain: "fitness-tracker-me.firebaseapp.com",
    databaseURL: "https://fitness-tracker-me.firebaseio.com",
    projectId: "fitness-tracker-me",
    storageBucket: "fitness-tracker-me.appspot.com",
    messagingSenderId: "821091724922"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
