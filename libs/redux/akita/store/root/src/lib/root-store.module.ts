import { NgModule } from '@angular/core';
import { EffectsNgModule } from '@ngneat/effects-ng';

// Note: Sample for using devtools with @ngneat
// export function initElfDevTools(actions: Actions) {
//   return () => {
//     devTools({
//       name: 'Sample Application',
//       actionsDispatcher: actions,
//     });
//   };
// }

/**
 * Akita root store for production
 */
@NgModule({
  imports: [EffectsNgModule.forRoot([])],
})
export class RootStoreModule {}

/**
 * Akita root store for development
 */
@NgModule({
  imports: [EffectsNgModule.forRoot([])],
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
