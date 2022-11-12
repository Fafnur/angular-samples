import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

/**
 * Root store for production
 */
@NgModule({
  imports: [NgxsModule.forRoot([])],
})
export class RootStoreModule {}

/**
 * Root store for development
 */
@NgModule({
  imports: [
    NgxsModule.forRoot([], {
      developmentMode: true,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class RootStoreDevelopmentModule {}
