import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { rootInitialState, rootReducers } from './root.reducer';
import { RootRouterStateSerializer } from './root-router-state-serializer';

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducers, {
      initialState: rootInitialState,
      metaReducers: [],
      // TODO: Check defaults
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializer,
    }),
  ],
})
export class RootStoreModule {}
