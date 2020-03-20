import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignaturePageModule } from './signature/signature.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule.forRoot(),
    SignaturePageModule
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
