import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import appReducers from './redux/reducers/app.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),

    CoreModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
