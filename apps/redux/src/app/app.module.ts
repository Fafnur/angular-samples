import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DEFAULT_CURRENCY_CODE, Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { ENVIRONMENTS } from '@angular-samples/core/environments';
import { HammerModule } from '@angular-samples/core/hammer';
import { LayoutModule } from '@angular-samples/ui/layout';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // RootStoreModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    LayoutModule,
    HammerModule,
  ],
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
