import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
      return next.handle(clonedReq).pipe(
        tap({
          next: () => {},
          error: (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401 || err.status === 403 || err.status === 419) {
                // 401 Unauthorized or 403 Forbidden or 419 Authentication Timeout
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
              }
            }
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
