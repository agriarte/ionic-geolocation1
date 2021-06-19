import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}


// npm install @ionic-native/geolocation
// npm install @ionic-native/core
// ionic cap sync
// !! en app.module.ts añadir GeoLocation en Providers, no recuerdo donde lo ví ¡¡
// npm install
// ionic serve

// Android
// This API requires the following permissions be added to your AndroidManifest.xml:
// primer manifest carpeta App desde Android Studio

// <!-- Geolocation API -->
// <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
// <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// <uses-feature android:name="android.hardware.location.gps" />

