import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { SpinnerService } from '../../../services/spinner.service';
import { MasterService } from '../../../services/master.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-privilege-mapping',
  standalone: false,
  templateUrl: './privilege-mapping.component.html',
  styleUrl: './privilege-mapping.component.css',
})
export class PrivilegeMappingComponent {
  assignForm: FormGroup;
  viewForm: FormGroup;

  roles: { label: string; value: string }[] = [];
  privileges: { label: string; value: number }[] = [];

  tableColumns = [
    { title: 'Role', key: 'role' },
    { title: 'Privilege', key: 'privilege' },
  ];
  tableData: { role: string; privilege: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private masterService: MasterService,
    private spinnerService: SpinnerService,
    private notification: NotificationService
  ) {
    this.assignForm = this.fb.group({
      roleId: [null, Validators.required],
      privilegeId: [null, Validators.required],
    });

    this.viewForm = this.fb.group({
      roleId: [null, Validators.required],
    });
  }

  get af() {
    return this.assignForm.controls;
  }

  get vf() {
    return this.viewForm.controls;
  }

  ngOnInit(): void {
    this.fetchRoles();
    this.fetchPrivileges();
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

  fetchPrivileges(): void {
    this.userService.getPrivileges().subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.privileges = res.object.map((priv: any) => ({
            label: priv.name,
            value: priv.privilegeId,
          }));
        } else {
          this.notification.error('Failed to load privileges');
        }
      },
      error: () => {
        this.notification.error('Error while loading privileges');
      },
    });
  }

  fetchPrivilegesForView(roleId: string): void {
    this.spinnerService.showSpinner();

    this.userService.getPrivileges(roleId).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();

        if (res?.status === 200 && Array.isArray(res.object)) {
          this.tableData = res.object.map((priv: any) => ({
            role: roleId,
            privilege: priv.name,
          }));

          if (this.tableData.length === 0) {
            this.notification.warning(
              'No privileges found for the selected role'
            );
          }
        } else {
          this.tableData = [];
          this.notification.error('Failed to fetch privilege mappings');
        }
      },
      error: () => {
        this.spinnerService.hideSpinner();
        this.tableData = [];
        this.notification.error(
          'Error occurred while fetching privilege mappings'
        );
      },
    });
  }

  submitAssignForm(): void {
    if (this.assignForm.invalid) {
      this.assignForm.markAllAsTouched();
      return;
    }

    const { roleId, privilegeId } = this.assignForm.value;

    const payload = {
      roleId,
      privilegeId,
    };

    this.spinnerService.showSpinner();

    this.userService.assignPrivileges(payload).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();

        if (res?.status === 200) {
          this.notification.success('Privilege assigned successfully!');
          this.assignForm.reset();
        } else {
          this.notification.error(res?.message || 'Failed to assign privilege');
        }
      },
      error: (err) => {
        this.spinnerService.hideSpinner();
        this.notification.error(
          'Something went wrong while assigning privilege'
        );
      },
    });
  }

  submitViewForm(): void {
    if (this.viewForm.invalid) {
      this.viewForm.markAllAsTouched();
      return;
    }

    const { roleId } = this.viewForm.value;
    this.fetchPrivilegesForView(roleId);
  }
}
