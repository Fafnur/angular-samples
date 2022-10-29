import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { RemoteEntryModule } from './remote-entry/entry.module';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, RemoteEntryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
