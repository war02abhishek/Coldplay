import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { UserService } from '../../../services/user.service';
import { SpinnerService } from '../../../services/spinner.service';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-policy-mapping',
  standalone: false,
  templateUrl: './policy-mapping.component.html',
  styleUrl: './policy-mapping.component.css',
})
export class PolicyMappingComponent {
  assignForm: FormGroup;
  viewForm: FormGroup;

  l2Users: { label: string; value: string }[] = [];
  l1Users: { label: string; value: string }[] = [];
  productsList: { label: string; value: string }[] = [];

  tableColumns = [
    { title: 'L2 User', key: 'l2Username' },
    { title: 'L1 User', key: 'l1Username' },
    { title: 'Contract Type', key: 'contractType' },
    { title: 'Policy No', key: 'policyNo' },
  ];
  tableData: {
    l2Username: string;
    l1Username: string;
    contractType: string;
    policyNo: string;
  }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private masterService: MasterService,
    private spinnerService: SpinnerService,
    private notification: NotificationService
  ) {
    this.assignForm = this.fb.group({
      l2User: [null, Validators.required],
      l1User: [null, Validators.required],
      contractType: [null, Validators.required],
      policyNo: ['', Validators.required],
    });

    this.viewForm = this.fb.group({
      l2User: [null, Validators.required],
      l1User: [null, Validators.required],
    });
  }

  get af() {
    return this.assignForm.controls;
  }

  get vf() {
    return this.viewForm.controls;
  }

  ngOnInit(): void {
    this.fetchProductsList();
    this.fetchL2Users();
  }

  fetchProductsList(): void {
    this.masterService.getProductsList().subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.productsList = res.object.map((product: any) => ({
            label: product.productName,
            value: product.contractType,
          }));
        } else {
          this.notification.error('Failed to load products list');
        }
      },
      error: () => {
        this.notification.error('Error while loading products list');
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

  fetchL1Users(form: FormGroup): void {
    const l2UserId = form.get('l2User')?.value;

    if (!l2UserId) {
      this.l1Users = [];
      return;
    }

    this.userService.getL1Users(l2UserId).subscribe({
      next: (res) => {
        if (res.status === 200 && Array.isArray(res.object)) {
          this.l1Users = res.object.map((user: any) => ({
            label: user.username,
            value: user.userId,
          }));
        } else {
          this.l1Users = [];
          this.notification.warning('No L1 users found for selected L2 user.');
        }
      },
      error: () => {
        this.l1Users = [];
        this.notification.error('Failed to load L1 users.');
      },
    });
  }

  getL2UserLabel(userId: string): string | undefined {
    const user = this.l2Users.find((u) => u.value === userId);
    return user?.label;
  }

  getL1UserLabel(userId: string): string | undefined {
    const user = this.l1Users.find((u) => u.value === userId);
    return user?.label;
  }

  submitAssignForm(): void {
    if (this.assignForm.invalid) {
      this.assignForm.markAllAsTouched();
      return;
    }

    const { l1User, contractType, policyNo } = this.assignForm.value;

    const payload = {
      userId: l1User,
      contractType,
      policyNumber: policyNo,
    };

    this.spinnerService.showSpinner();

    this.userService.assignPolicyMapping(payload).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();
        if (res?.status === 200) {
          this.notification.success(
            res.message || 'Policy assigned successfully!'
          );
          this.assignForm.reset();
        } else {
          this.notification.error(res.message || 'Failed to assign policy.');
        }
      },
      error: () => {
        this.spinnerService.hideSpinner();
        this.notification.error(
          'Something went wrong while assigning the policy.'
        );
      },
    });
  }

  submitViewForm(): void {
    if (this.viewForm.invalid) {
      this.viewForm.markAllAsTouched();
      return;
    }

    const { l2User, l1User } = this.viewForm.value;

    this.spinnerService.showSpinner();

    this.userService.getPolicyMapping(l1User).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();

        if (res?.status === 200 && Array.isArray(res.object)) {
          const l2Username = this.getL2UserLabel(l2User);
          const l1Username = this.getL1UserLabel(l1User);
          this.tableData = res.object.map((item: any) => ({
            l2Username,
            l1Username,
            contractType: item.contractType,
            policyNo: item.policyNumber,
          }));
        } else {
          this.tableData = [];
          this.notification.warning(res.message || 'No policy mappings found.');
        }
      },
      error: () => {
        this.spinnerService.hideSpinner();
        this.notification.error('Failed to fetch policy mappings.');
      },
    });
  }
}
