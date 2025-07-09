import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';

//Configuración del locale de la app
import localeEsMX from "@angular/common/locales/es-MX";
import localeFrCanada from "@angular/common/locales/fr-CA";
import localeItaliano  from "@angular/common/locales/it";

import { registerLocaleData } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";

registerLocaleData( localeEsMX );
registerLocaleData( localeFrCanada );
registerLocaleData( localeItaliano );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    NavbarComponent
],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
