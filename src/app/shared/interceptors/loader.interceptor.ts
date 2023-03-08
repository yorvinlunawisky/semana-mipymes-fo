import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(
        () => {
          // The purpose of this setTimeout is to give the browser/app time to render the loader in case the requests to the API are too fast
          // and the user can not see the loading effect. The use of this setTimeout is merely optional.
          setTimeout(() => {
            this.loaderService.isLoading.next(false);
          }, 200);
        }
      )
    );
  }
}
