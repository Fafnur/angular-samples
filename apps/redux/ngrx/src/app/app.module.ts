import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ENVIRONMENTS } from '@angular-samples/core/environments';
import { HammerModule } from '@angular-samples/core/hammer';
import { RootStoreModule } from '@angular-samples/redux/ngrx/store/root';
import { LayoutModule } from '@angular-samples/ui/layout';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RemoteEntryModule } from './remote-entry/entry.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, RootStoreModule, LayoutModule, HammerModule, RemoteEntryModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ru-RU',
    },
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
