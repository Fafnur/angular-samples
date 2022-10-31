import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootStoreDevelopmentModule, RootStoreModule } from '@angular-samples/redux/akita/store/root';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppCoreModule } from './app.core.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,
    AppRoutingModule,
    !environment.production ? RootStoreDevelopmentModule : RootStoreModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
