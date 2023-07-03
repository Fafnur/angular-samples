import { HttpInterceptorFn } from '@angular/common/http';

import { frontRequestIdInterceptor } from './front-request-id.interceptor';
import { withCredentialsInterceptor } from './with-credentials.interceptor';

export const httpInterceptorProviders: HttpInterceptorFn[] = [frontRequestIdInterceptor, withCredentialsInterceptor];
