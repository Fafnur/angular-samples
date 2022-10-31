import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Actions, EffectsNgModule } from '@ngneat/effects-ng';
import { devTools } from '@ngneat/elf-devtools';

export function initElfDevTools(actions: Actions) {
  return () => {
    devTools({
      name: 'Sample Application',
      actionsDispatcher: actions,
    });
  };
}

@NgModule({
  imports: [EffectsNgModule.forRoot([], { customActionsStream: new Actions() })],
})
export class RootStoreModule {}

@NgModule({
  imports: [EffectsNgModule.forRoot([], { dispatchByDefault: true, customActionsStream: new Actions() })],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initElfDevTools,
      deps: [Actions],
    },
  ],
})
export class RootStoreDevelopmentModule {}
