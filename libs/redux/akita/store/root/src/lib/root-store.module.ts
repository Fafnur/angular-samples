import { NgModule } from '@angular/core';
import { EffectsNgModule } from '@ngneat/effects-ng';

// export function initElfDevTools(actions: Actions) {
//   return () => {
//     devTools({
//       name: 'Sample Application',
//       actionsDispatcher: actions,
//     });
//   };
// }

@NgModule({
  imports: [EffectsNgModule.forRoot([])],
})
export class RootStoreModule {}

@NgModule({
  imports: [EffectsNgModule.forRoot([], { dispatchByDefault: true })],
  providers: [
    // Note: For enable logging actions, install @ngneat/elf, @ngneat/elf-devtools, and use initElfDevTools
    // {
    //   provide: APP_INITIALIZER,
    //   multi: true,
    //   useFactory: initElfDevTools,
    //   deps: [Actions],
    // },
  ],
})
export class RootStoreDevelopmentModule {}
