import { HttpInterceptorFn } from '@angular/common/http';

export const withCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ withCredentials: true });

  return next(req);
};
