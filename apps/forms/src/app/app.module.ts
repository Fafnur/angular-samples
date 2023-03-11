import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
