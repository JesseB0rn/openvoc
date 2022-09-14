import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthStateModel } from '../models/auth.model';
import { AuthState } from '../states/auth.state';

@Injectable({
  providedIn: 'root',
})
export class LoginReqGuard implements CanActivate {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store) {
    this.store.select((state) => state.auth.auth).subscribe(this.loggedIn$);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loggedIn$.value) {
      return true;
    } else {
      this.store.dispatch(new Navigate(['/login']));
      return false;
    }
  }
}
