import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { JwtService } from '../../../services/jwt.service';
import { NotificationService } from '../../../services/notification.service';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-initiate-claim',
  standalone: false,
  templateUrl: './initiate-claim.component.html',
  styleUrl: './initiate-claim.component.css',
})
export class InitiateClaimComponent {
  constants = Constants;
  claimForm: FormGroup;
  selectedContractType: string | null = null;
  selectedPolicyNo: string = '';
  claimFormSubmitted = false;

  policyList: { label: string; value: string; contractType: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private jwtService: JwtService,
    private notification: NotificationService
  ) {
    this.claimForm = this.fb.group({
      policyNo: [null, Validators.required],
    });
  }

  async ngOnInit() {
    const l1UserId = await this.jwtService.getUserId();
    this.fetchPolicyMapping(l1UserId);
  }

  fetchPolicyMapping(l1UserId: number) {
    this.userService.getPolicyMapping(l1UserId).subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.policyList = res.object.map((item: any) => ({
            contractType: item.contractType,
            label: item.policyNumber,
            value: item.policyNumber,
          }));
        } else {
          this.notification.warning(res.message || 'No policy mappings found.');
        }
      },
      error: () => {
        this.notification.error('Failed to fetch policy mappings.');
      },
    });
  }

  submitClaimForm(): void {
    if (this.claimForm.invalid) {
      this.claimForm.markAllAsTouched();
      return;
    }

    const policyNoSelected = this.claimForm.get('policyNo')?.value;
    this.selectedPolicyNo = policyNoSelected;

    const selectedPolicy = this.policyList.find(
      (p) => p.value === policyNoSelected
    );

    if (selectedPolicy) {
      this.selectedContractType = selectedPolicy.contractType;
    } else {
      this.notification.warning('Selected policy not found in the list.');
      return;
    }

    this.claimFormSubmitted = true;
  }
}
