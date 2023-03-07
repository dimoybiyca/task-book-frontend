import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isLogged: boolean;
    this.store
      .pipe(select(isLoggedInSelector))
      .subscribe((data: boolean) => (isLogged = data))
      .unsubscribe();
    if (isLogged) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
