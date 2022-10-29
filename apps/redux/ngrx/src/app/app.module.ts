import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootStoreDevelopmentModule, RootStoreModule } from '@angular-samples/redux/ngrx/store/root';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RemoteEntryModule } from './remote-entry/entry.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RemoteEntryModule,
    !environment.production ? RootStoreDevelopmentModule : RootStoreModule,
  ],
  declarations: [AppComponent],

  bootstrap: [AppComponent],
})
export class AppModule {}
