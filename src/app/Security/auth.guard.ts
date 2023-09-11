import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Service/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isAccessTokenInvalid()) {
      console.log('Navegação com access token inválido. Obtendo novo token...');

      return this.auth.getNewAccessToken().then(() => {
        if (this.auth.isAccessTokenInvalid()) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      });
    }

    return true;
  }
}