import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HammerModule } from '@angular-samples/core/hammer';
import { RootStoreModule } from '@angular-samples/redux/ngrx/store/root';
import { LayoutModule } from '@angular-samples/ui/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, RootStoreModule, LayoutModule, HammerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
