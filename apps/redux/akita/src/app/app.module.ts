import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootStoreModule } from '@angular-samples/redux/akita/store/root';

import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppCoreModule, AppRoutingModule, RootStoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
