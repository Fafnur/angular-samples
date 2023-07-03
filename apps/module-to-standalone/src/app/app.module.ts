import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InterceptorsModule } from '@angular-samples/module-to-standalone/interceptors';
import { HeaderModule } from '@angular-samples/module-to-standalone/ui/header';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }), HeaderModule, InterceptorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
