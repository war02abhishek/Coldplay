import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../services/auth.service';
import { SpinnerService } from '../../../services/spinner.service';
import { Router } from '@angular/router';
import {
  passwordMatchValidator,
  passwordStrengthValidator,
} from '../../../validators/password.validators';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private notification: NotificationService,
    private router: Router
  ) {
    this.changePasswordForm = this.fb.group(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, passwordStrengthValidator]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  get cpf() {
    return this.changePasswordForm.controls;
  }

  async submitChangePassword(): Promise<void> {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const { oldPassword, newPassword } = this.changePasswordForm.value;

    const payload = {
      password: oldPassword,
      newPassword: newPassword,
    };

    try {
      this.spinnerService.showSpinner();

      const response = await firstValueFrom(
        this.authService.changePassword(payload)
      );

      if (response.status === 200) {
        this.notification.success(
          response.message || 'Password changed successfully!'
        );
        this.changePasswordForm.reset();
        this.router.navigate(['/dashboard/home']);
      } else {
        this.notification.error(
          response.message || 'Failed to change password.'
        );
      }
    } catch (error) {
      this.notification.error('An error occurred while changing password.');
      console.error('Change Password Error:', error);
    } finally {
      this.spinnerService.hideSpinner();
    }
  }
}
