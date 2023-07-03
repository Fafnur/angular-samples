import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { uuidv4 } from '@angular-samples/core/uuid';

@Injectable()
export class FrontRequestIdInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('front-request-id', uuidv4()) });

    return next.handle(req);
  }
}
