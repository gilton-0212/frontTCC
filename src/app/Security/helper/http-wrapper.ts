import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from as observableFromPromise, Observable } from 'rxjs';
import { NotAuthenticatedError } from '../not-authencated-error';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpWrapper extends HttpClient {
  constructor(private auth: AuthService, httpHandler: HttpHandler) {
    super(httpHandler);
  }

  public override delete<T>(url: string, options?: any): Observable<T> {
    return this.interceptorRequest<T>(() => super.delete<T>(url, options));
  }

  public override patch<T>(
    url: string,
    body: any,
    options?: any
  ): Observable<T> {
    return this.interceptorRequest<T>(() => super.patch<T>(url, body, options));
  }

  public override head<T>(url: string, options?: any): Observable<T> {
    return this.interceptorRequest<T>(() => super.head<T>(url, options));
  }

  public override options<T>(url: string, options?: any): Observable<T> {
    return this.interceptorRequest<T>(() => super.options<T>(url, options));
  }

  public override get<T>(url: string, options?: any): Observable<T> {
    return this.interceptorRequest<T>(() => super.get<T>(url, options));
  }

  public override post<T>(
    url: string,
    body: any,
    options?: any
  ): Observable<T> {
    return this.interceptorRequest<T>(() => super.post<T>(url, body, options));
  }

  public override put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.interceptorRequest<T>(() => super.put<T>(url, body, options));
  }

  private interceptorRequest<T>(fn: Function): Observable<T> {
    if (this.auth.isAccessTokenInvalid()) {
      console.log(
        'Requisição HTTP com access token inválido. Obtendo novo token...'
      );

      const chamadaNovoAccessToken = this.auth.getNewAccessToken().then(() => {
        if (this.auth.isAccessTokenInvalid()) {
          throw new NotAuthenticatedError();
        }

        return fn().toPromise();
      });

      return observableFromPromise(chamadaNovoAccessToken);
    } else {
      return fn();
    }
  }
}
