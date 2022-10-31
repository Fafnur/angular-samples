import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { RootStoreModule as AkitaRootStoreModule } from '@angular-samples/redux/akita/store/root';
import { RootStoreModule as NgrxRootStoreModule } from '@angular-samples/redux/ngrx/store/root';
import { RootStoreModule as NgxsRootStoreModule } from '@angular-samples/redux/ngxs/store/root';
import { HeaderModule } from '@angular-samples/redux/ui/header';
import { LayoutModule } from '@angular-samples/ui/layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgrxRootStoreModule,
    NgxsRootStoreModule,
    // Note: It's broken remote application for akita.
    // AkitaRootStoreModule,
    LayoutModule,
    HeaderModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
