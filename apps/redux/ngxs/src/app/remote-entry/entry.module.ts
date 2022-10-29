import { NgModule } from '@angular/core';

import { PATH_REMOTE } from '@angular-samples/redux/config';

import { AppCoreModule } from '../app.core.module';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [EntryRoutingModule, AppCoreModule],
  providers: [
    {
      provide: PATH_REMOTE,
      useValue: 'ngxs',
    },
  ],
})
export class RemoteEntryModule {}
