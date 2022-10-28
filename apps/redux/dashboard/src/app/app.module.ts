import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootStoreModule as NgrxRootStoreModule } from '@angular-samples/redux/ngrx/store/root';
import { RootStoreModule as NgxsRootStoreModule } from '@angular-samples/redux/ngxs/store/root';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NgrxRootStoreModule, NgxsRootStoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
