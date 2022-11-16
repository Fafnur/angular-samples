import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootInitialState, rootReducers } from './root.reducer';
import { RootRouterStateSerializer } from './root-router-state-serializer';

/**
 * Root store for production
 */
@NgModule({
  imports: [
    StoreModule.forRoot(rootReducers, { initialState: rootInitialState }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer,
    }),
  ],
})
export class RootStoreModule {}

/**
 * Root store for development
 */
@NgModule({
  imports: [
    StoreModule.forRoot(rootReducers, {
      initialState: rootInitialState,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({ logOnly: false }),
  ],
})
export class RootStoreDevelopmentModule {}
