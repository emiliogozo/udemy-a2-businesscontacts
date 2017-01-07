import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA2CcbmKSLvXPxjwQkp5mdwH98BtyQyMHM',
  authDomain: 'businesscontacts-e9f88.firebaseapp.com',
  databaseURL: 'https://businesscontacts-e9f88.firebaseio.com',
  storageBucket: 'businesscontacts-e9f88.appspot.com',
  messagingSenderId: '996379778945'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
