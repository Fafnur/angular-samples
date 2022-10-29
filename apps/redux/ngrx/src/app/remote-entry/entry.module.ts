import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { ENVIRONMENTS } from '@angular-samples/core/environments';
import { HammerModule } from '@angular-samples/core/hammer';
import { REDUX_TYPE } from '@angular-samples/redux/posts/ui/header';
import { LayoutModule } from '@angular-samples/ui/layout';

import { environment } from '../../environments/environment';
import { EntryRoutingModule } from './entry-routing.module';

@NgModule({
  imports: [EntryRoutingModule, LayoutModule, HammerModule],
  providers: [
    {
      provide: REDUX_TYPE,
      useValue: 'NGRX',
    },
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ru-RU',
    },
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
  ],
})
export class RemoteEntryModule {}
