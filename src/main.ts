import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as firebase from '~/platform/firebase'
import { environment } from '~env';

if (environment.production) {
  enableProdMode();
}

void async function() {
  await firebase.init(environment.firebaseConfig)
  await firebase.getSessionOrLogin()

  try {
    await platformBrowserDynamic().bootstrapModule(AppModule)
  } catch (error) {
    console.log(error)
  }
}()

