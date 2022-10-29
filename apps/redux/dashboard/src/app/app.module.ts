import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootStoreModule as NgrxRootStoreModule } from '@angular-samples/redux/ngrx/store/root';
import { RootStoreModule as NgxsRootStoreModule } from '@angular-samples/redux/ngxs/store/root';
import { HeaderModule } from '@angular-samples/redux/ui/header';
import { LayoutModule } from '@angular-samples/ui/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, NgrxRootStoreModule, NgxsRootStoreModule, LayoutModule, HeaderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
