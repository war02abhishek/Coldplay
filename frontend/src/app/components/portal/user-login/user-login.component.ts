import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SpinnerService } from '../../../services/spinner.service';
import { NotificationService } from '../../../services/notification.service';
import { StorageService } from '../../../services/storage.service';
import { firstValueFrom } from 'rxjs';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  showPassword: boolean = false;
  showForgotPasswordView: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private spinnerService: SpinnerService,
    private notification: NotificationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.forgotPasswordForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  // Get Form Controls
  get lf() {
    return this.loginForm.controls;
  }

  get fpf() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit(): void {}

  async submitLogin(): Promise<void> {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.notification.error('Please fill in all required fields.');
      return;
    }

    const credentials = this.loginForm.value;

    try {
      this.spinnerService.showSpinner();

      const response = await firstValueFrom(
        this.authService.login(credentials)
      );

      // Check if the backend returned a successful status
      if (response?.status === 200 && response.object) {
        const userData = response.object;

        // Store JWT token and user info securely
        await this.storageService.setItem('jwt_token', userData.jwtToken);
        const privileges = userData.privileges.map((item: any) => ({
          privilegeId: item.privilegeId,
          name: item.name,
          url: `/dashboard${item.url}`,
          display: item.display === Constants.YES ? true : false,
        }));
        await this.storageService.setItem('privileges', privileges);

        this.notification.success('Login successful!');

        // Redirect user after successful login
        this.router.navigate(['/dashboard/home']);
      } else {
        this.notification.error(response.message || 'Login failed.');
      }
    } catch (error) {
      this.notification.error('An error occurred while logging in.');
    } finally {
      this.spinnerService.hideSpinner();
    }
  }

  toggleForgotPassword() {
    this.showForgotPasswordView = !this.showForgotPasswordView;
  }

  async submitForgotPassword(): Promise<void> {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }

    const username = this.forgotPasswordForm.value.username;

    try {
      this.spinnerService.showSpinner();

      const response = await firstValueFrom(
        this.authService.forgotPassword({ username })
      );

      if (response?.status === 200) {
        this.notification.success(
          response.message || 'Password reset link sent.'
        );

        this.forgotPasswordForm.reset();
        this.showForgotPasswordView = false;
      } else {
        this.notification.error(
          response.message || 'Failed to send reset link.'
        );
      }
    } catch (error) {
      this.notification.error('Something went wrong. Please try again later.');
    } finally {
      this.spinnerService.hideSpinner();
    }
  }
}
