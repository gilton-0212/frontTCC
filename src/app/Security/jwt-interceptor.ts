import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { NotAuthenticatedError } from './not-authencated-error';
import { AuthService } from './Service/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !req.url.includes('/oauth2/token') &&
      this.auth.isAccessTokenInvalid()
    ) {
      return from(this.auth.getNewAccessToken()).pipe(
        mergeMap(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });

          return next.handle(req);
        })
      );
    }

    return next.handle(req);
  }
}
