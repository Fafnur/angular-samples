import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InterceptorsModule } from '@angular-samples/module-to-standalone/interceptors';
import { HeaderModule } from '@angular-samples/module-to-standalone/ui/header';
import { ContainerModule } from '@angular-samples/ui/container';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderModule,
    InterceptorsModule,
    ContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}