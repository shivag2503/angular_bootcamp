import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService,
              private route: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return  this.authService.signedin$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.route.navigateByUrl('/');
        }
      })
    );
  }

}
