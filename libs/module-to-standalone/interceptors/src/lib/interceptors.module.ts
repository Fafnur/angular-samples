import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FrontRequestIdInterceptor } from './front-request-id.interceptor';
import { WithCredentialsInterceptor } from './with-credentials.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FrontRequestIdInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorsModule {}
