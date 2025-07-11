import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { passwordStrengthValidator } from '../../../validators/password.validators';
import { SpinnerService } from '../../../services/spinner.service';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  createUserForm: FormGroup;

  showPassword: boolean = false;
  roles: { label: string; value: string }[] = [];
  l2Users: { label: string; value: number }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private spinnerService: SpinnerService,
    private notification: NotificationService
  ) {
    this.createUserForm = this.fb.group({
      roleId: [null, Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, passwordStrengthValidator]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      parentUserId: [null],
    });

    this.createUserForm.get('roleId')?.valueChanges.subscribe((role) => {
      const parentUserIdControl = this.createUserForm.get('parentUserId');
      if (role === 'L1') {
        parentUserIdControl?.setValidators([Validators.required]);
      } else {
        parentUserIdControl?.clearValidators();
        parentUserIdControl?.reset();
      }
      parentUserIdControl?.updateValueAndValidity();
    });
  }

  get cuf() {
    return this.createUserForm.controls;
  }

  ngOnInit(): void {
    this.fetchRoles();
    this.fetchL2Users();
  }

  fetchRoles(): void {
    this.userService.getRoles().subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.roles = res.object.map((role: any) => ({
            label: role.roleName,
            value: role.roleId,
          }));
        } else {
          this.notification.error('Failed to load roles');
        }
      },
      error: () => {
        this.notification.error('Error while loading roles');
      },
    });
  }

  fetchL2Users(): void {
    this.userService.getL2Users().subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.l2Users = res.object.map((user: any) => ({
            label: user.username,
            value: user.userId,
          }));
        } else {
          this.notification.error('Failed to load L2 users');
        }
      },
      error: () => {
        this.notification.error('Error while loading L2 users');
      },
    });
  }

  async submitCreateUserForm() {
    if (this.createUserForm.invalid) {
      this.createUserForm.markAllAsTouched();
      return;
    }

    const formValue = this.createUserForm.value;

    let payload: any = {
      roleId: formValue.roleId,
      username: formValue.username,
      password: formValue.password,
      mobile: formValue.mobile,
      email: formValue.email,
    };
    if (formValue.parentUserId) {
      payload['parentUserId'] = formValue.parentUserId;
    }

    this.spinnerService.showSpinner();

    try {
      const response = await firstValueFrom(
        this.userService.createUser(payload)
      );

      if (response?.status === 200) {
        this.notification.success('User created successfully');
        this.createUserForm.reset();
      } else {
        this.notification.error(response?.message || 'Failed to create user');
      }
    } catch (err) {
      console.error('Create User Error:', err);
      this.notification.error('Something went wrong while creating user');
    } finally {
      this.spinnerService.hideSpinner();
    }
  }
}
