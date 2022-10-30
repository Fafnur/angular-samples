import { NgModule } from '@angular/core';
import { EffectsNgModule } from '@ngneat/effects-ng';

@NgModule({
  imports: [EffectsNgModule.forRoot([], { dispatchByDefault: true })],
})
export class RootStoreModule {}
