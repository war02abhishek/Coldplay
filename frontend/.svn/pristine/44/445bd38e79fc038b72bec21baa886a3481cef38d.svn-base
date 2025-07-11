import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import {
  passwordMatchValidator,
  passwordStrengthValidator,
} from '../../../validators/password.validators';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  token: string = '';
  isTokenValid: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';

    if (!this.token) {
      this.notification.error('Invalid or expired URL.');
      this.router.navigate(['/login']);
      return;
    }

    const payload = {
      token: this.token,
    };

    this.authService.validateResetPasswordToken(payload).subscribe({
      next: (response) => {
        if (response?.status === 200) {
          this.isTokenValid = true;
          this.initialiseResetPasswordForm();
        } else {
          this.redirectInvalidToken();
        }
      },
      error: () => this.redirectInvalidToken(),
    });
  }

  initialiseResetPasswordForm() {
    this.resetPasswordForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, passwordStrengthValidator]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  get rpf() {
    return this.resetPasswordForm.controls;
  }

  private redirectInvalidToken() {
    this.notification.warning('Invalid or expired URL.');
    this.router.navigate(['/login']);
  }

  submitResetPasswordForm() {
    if (this.resetPasswordForm.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }

    const payload = {
      token: this.token,
      newPassword: this.resetPasswordForm.value.newPassword,
    };

    this.spinnerService.showSpinner();
    this.router.navigate(['/login']);
    this.authService.resetPassword(payload).subscribe({
      next: (response) => {
        if (response?.status === 200) {
          this.notification.success(
            'Password reset successful. Please log in.'
          );
        } else {
          this.notification.error(
            response.message || 'Failed to reset password.'
          );
        }
        this.spinnerService.hideSpinner();
      },
      error: () => {
        this.notification.error('Failed to reset password.');
        this.spinnerService.hideSpinner();
      },
    });
  }
}
