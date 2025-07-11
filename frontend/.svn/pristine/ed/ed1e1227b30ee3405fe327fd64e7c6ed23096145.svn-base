import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { SpinnerService } from '../../../services/spinner.service';
import { MarineService } from '../../../services/marine.service';

interface ClaimDocuments {
  documentName: string;
  fileType: string;
  fileName: string;
  fileBase64: string;
}

@Component({
  selector: 'app-marine-claim-view',
  standalone: false,
  templateUrl: './marine-claim-view.component.html',
  styleUrl: './marine-claim-view.component.css',
})
export class MarineClaimViewComponent {
  policyReviewForm!: FormGroup;

  roleId: string = '';
  // claimDetails: any = {};
  // billDetails: any = {};
  // claimDocuments: ClaimDocuments[] = [];

  policyStatusList = [
    { label: 'APPROVE', value: 'APPROVED' },
    { label: 'REJECT', value: 'REJECTED' },
    { label: 'RETURN', value: 'RETURNED' },
  ];

  claimDetails = {
    // Claim Details
    lossDate: '25-06-2025',
    lossType: 'Fire',
    causeType: 'Electrical Fault',
    lossDescription: 'Fire in warehouse',
    estimatedLoss: '₹1,50,000',
    geography: 'India',
    surveyLocation: 'Mumbai',
    comment: 'Urgent survey needed',
    claimSource: 'CRM',

    invoiceNo: 'INV-001',
    commodity: 'Electronics',
    invoiceDate: '20-06-2025',
    natureOfPackaging: 'Wooden Crates',
    transportedBy: 'ABC Logistics',
    transporterName: 'John Doe',
    grLrAwvBlNo: 'GR12345',
    grLrAwvBlDate: '21-06-2025',
    consignmentType: 'Full Truck Load',
    port: 'Nhava Sheva',
    modeOfTransit: 'Sea',
    vesselName: 'MV Ocean Star',

    fromCountry: 'India',
    fromCity: 'Chennai',
    toCountry: 'UAE',
    toCity: 'Dubai',

    surveyor: 'ABC Surveyors',
    insuredClaimRefNo: 'CLM98765',
    p400CertificateNo: 'P4001234',
    insuredRepName: 'Jane Smith',
    repPhone: '9876543210',

    l2Status: 'Approved',
    l2Remarks: 'All documents verified and policy validated.',
  };

  billDetails = {
    ckycNo: 'CKYC00987',
    supplierInvoiceNo: 'SI000123',
    insuredAccNo: '123456789012',
    insuredIfscCode: 'ABCD0123456',
    billSource: 'Portal',
    crmClaimNo: 'CRM112233',
    peripheralBillId: 'PBILL9988',

    costOfDamagedCargo: '₹40,000',
    insurance: '₹30,000',
    freight: '₹5,000',
    incidentals: '₹1,000',
    otherDeduction: '₹500',
    salvage: '₹2,000',
    proportionateShare: '₹3,000',
    customDuty: '₹2,500',
    otherOverheads: '₹1,200',
    franchise: '₹1,000',
    excess: '₹700',
  };

  claimDocuments: ClaimDocuments[] = [
    {
      documentName: 'Claim Bill',
      fileType: 'application/pdf',
      fileName: 'claim-bill.pdf',
      fileBase64: 'JVBERi0xLjQKJ...',
    },
    {
      documentName: 'Invoice Copy',
      fileType: 'application/pdf',
      fileName: 'invoice.pdf',
      fileBase64: 'JVBERi0xLjQKJ...',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private jwtService: JwtService,
    private marineService: MarineService,
    private spinnerService: SpinnerService,
    private notification: NotificationService,
    private route: ActivatedRoute
  ) {
    this.policyReviewForm = this.fb.group({
      policyStatus: ['', Validators.required],
      remarks: ['', Validators.required],
    });
  }

  get prf() {
    return this.policyReviewForm.controls;
  }

  async ngOnInit() {
    this.roleId = await this.jwtService.getRoleId();
    const claimDetailsId =
      this.route.snapshot.queryParamMap.get('claimDetailsId');
    // if (claimDetailsId) {
    //   this.fetchClaimsData(claimDetailsId);
    // } else {
    //   this.notification.error('Claim ID is missing from the route.');
    // }
  }

  fetchClaimsData(claimDetailsId: string) {
    this.spinnerService.showSpinner();
    const payload = { claimDetailsId };

    this.marineService.getClaimsData(payload).subscribe({
      next: (res) => {
        this.spinnerService.hideSpinner();
        if (res?.status === 200 && res?.object) {
          const { claimDetails, billDetails, claimDocuments } = res.object;

          this.claimDetails = claimDetails || {};
          this.billDetails = billDetails || {};
          this.claimDocuments = claimDocuments || [];
        } else {
          this.notification.warning(
            res?.message || 'No data found for this claim.'
          );
        }
      },
      error: () => {
        this.spinnerService.hideSpinner();
        this.notification.error('Failed to fetch claim details.');
      },
    });
  }

  submitRemarksForm() {
    if (this.policyReviewForm.invalid) {
      this.policyReviewForm.markAllAsTouched();
      return;
    }

    console.log('Submitting remarks:', this.policyReviewForm.value);
    // Add your actual submission logic here
  }
}
