import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth, initializeAuth, indexedDBLocalPersistence, browserPopupRedirectResolver } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeFirestore } from 'firebase/firestore';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => {
      const app = initializeApp(environment.firebase);
      initializeAuth(app, {
        persistence: indexedDBLocalPersistence
      });
      initializeFirestore(app, {
        // localCache: persistentLocalCache
      });
      return app;
    }),
    provideAuth(() => getAuth()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HTTP],
  bootstrap: [AppComponent],
})
export class AppModule { }
