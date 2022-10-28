import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { RootStoreModule } from '@angular-samples/redux/ngrx/store/root';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, RootStoreModule, NgxsModule.forRoot([], { developmentMode: !environment.production })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
