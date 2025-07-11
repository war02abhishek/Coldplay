import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-claim',
  standalone: false,
  templateUrl: './view-claim.component.html',
  styleUrl: './view-claim.component.css',
})
export class ViewClaimComponent {
  selectedContractType: string | null = null;
  claimDetailsId: string = '';
  // viewClaimForm: FormGroup;
  // submitted = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    // this.viewClaimForm = this.fb.group({
    //   claimDetailsId: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
    const contractType = this.route.snapshot.queryParamMap.get('contractType');
    const claimDetailsId =
      this.route.snapshot.queryParamMap.get('claimDetailsId');
    if (contractType && claimDetailsId) {
      this.selectedContractType = contractType;
      this.claimDetailsId = claimDetailsId;
      // TODO: View Claim Call to Repopulate Form

      // this.submitted = true;
      // this.viewClaimForm.patchValue({ claimDetailsId: claimDetailsId });
    }
  }

  // onSubmit(): void {
  //   if (this.viewClaimForm.invalid) return;

  //   const claimNo = this.viewClaimForm.get('claimDetailsId')?.value;

  //   // Simulated backend call to fetch contract type
  //   if (claimNo) {
  //     this.selectedContractType = 'CMP'; // hardcoded
  //   } else {
  //     this.selectedContractType = null;
  //   }

  //   this.submitted = true;
  // }
}
