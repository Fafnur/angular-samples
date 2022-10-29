import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootStoreDevelopmentModule, RootStoreModule } from '@angular-samples/redux/ngxs/store/root';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCoreModule,
    !environment.production ? RootStoreDevelopmentModule : RootStoreModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
