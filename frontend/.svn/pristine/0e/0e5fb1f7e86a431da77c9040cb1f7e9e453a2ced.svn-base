import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claims-report',
  standalone: false,
  templateUrl: './claims-report.component.html',
  styleUrl: './claims-report.component.css',
})
export class ClaimsReportComponent {
  reportForm: FormGroup;

  policyList = [
    { label: 'Policy 123', value: 'P123' },
    { label: 'Policy 456', value: 'P456' },
  ];

  selectedContractType: string | null = null;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      policyNo: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.reportForm.invalid) return;

    const selectedPolicy = this.reportForm.get('policyNo')?.value;

    // Simulate backend call to fetch contract type
    if (selectedPolicy === 'P123') {
      this.selectedContractType = 'CMP';
    } else {
      this.selectedContractType = null;
    }

    this.submitted = true;
  }
}
