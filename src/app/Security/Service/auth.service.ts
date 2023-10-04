import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jwt } from '../jwt';
import { JwtHelperService } from '@auth0/angular-jwt';

export const LOCAL_STORAGE = 'chronos-emissor-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;
  jwtPayload?: Jwt;

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {
    this.url = `${environment.API}/oauth/token`;
    this.loadToken();
  }

  login(email: string, password: string) {
    const passwordClient = btoa('appweb:w3bcl13nt');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${passwordClient}`);

    const body = `grant_type=password&username=${email}&password=${password}`;

    return this.http
      .post<Jwt>(this.url, body, { headers: headers })
      .pipe(map((response) => this.storeToken(response.access_token)));
  }

  logout() {
    this.clearAccessToken();
    localStorage.clear();
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem(LOCAL_STORAGE);
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  getNewAccessToken(): Promise<any> {
    const senhaClient = btoa('appweb:w3bcl13nt');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${senhaClient}`);

    const body = 'grant_type=refresh_token';

    return firstValueFrom(this.http.post<any>(this.url, body, { headers }))
      .then((response: any) => {
        this.storeToken(response['access_token']);

        return Promise.resolve(null);
      })
      .catch((response: any) => {
        console.error('Erro ao gerar o token com o code.', response);
        return Promise.resolve();
      });
  }

  private clearAccessToken() {
    localStorage.removeItem(LOCAL_STORAGE);
    this.jwtPayload = undefined;
  }

  private loadToken() {
    const token = localStorage.getItem(LOCAL_STORAGE);

    if (token) {
      this.storeToken(token);
    }
  }

  private storeToken(token: string) {
   // this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem(LOCAL_STORAGE, token);
  }

  public recuperarUsuario(){
    return this.http.get<any>( `${environment.API}/usuario`);
  }
}
