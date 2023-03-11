import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent, LayoutModule } from '@angular-samples/ui/layout';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@angular-samples/forms/page').then((modules) => modules.PageModule),
      },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }), LayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
