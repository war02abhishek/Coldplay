import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinner$ = this.spinnerSubject.asObservable();

  showSpinner(): void {
    this.spinnerSubject.next(true);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  }

  hideSpinner(): void {
    this.spinnerSubject.next(false);
    document.body.style.overflow = 'auto'; // allow scrolling
  }
}
