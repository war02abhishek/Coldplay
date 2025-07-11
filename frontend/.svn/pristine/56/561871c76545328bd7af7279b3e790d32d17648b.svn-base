import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError, EMPTY } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { SpinnerService } from '../services/spinner.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notification: NotificationService,
    private spinnerService: SpinnerService,
    private storageService: StorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Convert the Promise to an Observable using from()
    return from(this.storageService.getItem('jwt_token')).pipe(
      switchMap((token: string | null) => {
        const authReq = req.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
        });

        return next.handle(authReq).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 403) {
              this.notification.error(
                'Session expired or unauthorized access.'
              );
              this.spinnerService.hideSpinner();
              this.storageService.clear();
              this.router.navigate(['/login']);
              return EMPTY; // prevents the error from propagating
            }

            return throwError(() => error); // propagate other errors
          })
        );
      })
    );
  }
}
