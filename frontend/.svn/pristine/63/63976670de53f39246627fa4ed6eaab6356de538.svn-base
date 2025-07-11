import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { MasterService } from '../../../services/master.service';
import { Constants } from '../../../constants/constants';
import { forkJoin } from 'rxjs';
import { SpinnerService } from '../../../services/spinner.service';
import { MarineService } from '../../../services/marine.service';
import { ActivatedRoute } from '@angular/router';

type DropdownItem = {
  label: string;
  value: string;
  type: string;
  subType: string;
};

@Component({
  selector: 'app-marine-claim-initiate',
  standalone: false,
  templateUrl: './marine-claim-initiate.component.html',
  styleUrl: './marine-claim-initiate.component.css',
})
export class MarineClaimIntimateComponent {
  @Input() policyNo!: string;

  claimDetailsId: string = '';

  claimDetailsForm!: FormGroup;
  billDetailsForm!: FormGroup;
  uploadDocumentsForm!: FormGroup;

  documentList: {
    documentId: number;
    documentName: string;
    formControlField: string;
  }[] = [];

  claimSectionOpen: boolean = true;
  billSectionOpen: boolean = false;
  uploadSectionOpen: boolean = false;

  claimSectionSubmitted: boolean = true;
  billSectionSubmitted: boolean = true;
  uploadSectionSubmitted: boolean = true;

  lossTypeList: DropdownItem[] = [];
  causeTypeList: DropdownItem[] = [];
  geographyList: DropdownItem[] = [];
  natureOfPackagingList: DropdownItem[] = [];
  transportedByModeList: DropdownItem[] = [];
  consignmentTypeList: DropdownItem[] = [];
  modeOfTransitList: DropdownItem[] = [];
  vesselNameList: DropdownItem[] = [];
  countriesList: DropdownItem[] = [];
  surveyorList = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ];

  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private marineService: MarineService,
    private notification: NotificationService,
    private spinnerService: SpinnerService,
    private route: ActivatedRoute
  ) {
    this.claimDetailsForm = this.fb.group({
      lossDate: ['', Validators.required],
      lossType: [null, Validators.required],
      causeType: [null, Validators.required],
      estimatedLoss: ['', Validators.required],
      lossDescription: ['', [Validators.required]],
      geography: [null, Validators.required],
      surveyLocation: ['', Validators.required],
      claimSource: ['', Validators.required],
      comment: ['Insured Comment: ', Validators.required],

      invoiceNo: ['', Validators.required],
      commodity: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      natureOfPackaging: [null, Validators.required],
      transportedBy: [null, Validators.required],
      transporterName: ['', Validators.required],
      grLrAwvBlNo: ['', Validators.required],
      grLrAwvBlDate: ['', Validators.required],
      consignmentType: [null, Validators.required],
      port: ['', Validators.required],
      modeOfTransit: [null, Validators.required],
      vesselName: [null, Validators.required],

      fromCountry: [null, Validators.required],
      fromCity: ['', Validators.required],

      toCountry: [null, Validators.required],
      toCity: ['', Validators.required],

      surveyor: [null, Validators.required],
      insuredClaimRefNo: ['', Validators.required],
      p400CertificateNo: ['', Validators.required],
      insuredRepName: ['', Validators.required],
      repPhone: ['', Validators.required],
    });

    this.billDetailsForm = this.fb.group({
      ckycNo: ['', Validators.required],
      supplierInvoiceNo: ['', Validators.required],
      insuredAccNo: ['', Validators.required],
      insuredIfscCode: ['', Validators.required],
      billSource: ['', Validators.required],
      crmClaimNo: ['', Validators.required],
      peripheralBillId: ['', Validators.required],

      costOfDamagedCargo: ['', Validators.required],
      insurance: ['', Validators.required],
      freight: ['', Validators.required],
      incidentals: ['', Validators.required],
      otherDeduction: ['', Validators.required],
      salvage: ['', Validators.required],
      proportionateShare: ['', Validators.required],
      customDuty: ['', Validators.required],
      otherOverheads: ['', Validators.required],
      franchise: ['', Validators.required],
      excess: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['policyNo'] && !changes['policyNo'].firstChange) {
      this.resetForms();
    }
  }

  resetForms(): void {
    this.claimDetailsForm?.reset();
    this.billDetailsForm?.reset();
    this.uploadDocumentsForm?.reset();
    this.claimDetailsId = '';
  }

  ngOnInit(): void {
    this.fetchDocumentsList();
    this.populateMarineDropdowns();

    const policyNo = this.route.snapshot.queryParamMap.get('policyNo');
    const claimDetailsId =
      this.route.snapshot.queryParamMap.get('claimDetailsId');
    console.log(policyNo);
    console.log(claimDetailsId);
    if (policyNo && claimDetailsId) {
      this.policyNo = policyNo;
      this.claimDetailsId = claimDetailsId;
      // TODO: View Claim Call to Repopulate Form
    }
  }

  fetchDocumentsList(): void {
    this.masterService
      .getMarineDocumentsList(Constants.CONTRACT_TYPE_MARINE_CMP)
      .subscribe({
        next: (res) => {
          if (res?.status === 200 && Array.isArray(res.object)) {
            this.documentList = res.object.map((doc: any) => ({
              documentId: doc.documentId,
              documentName: doc.documentName,
              formControlField: doc.formControlField,
            }));
            this.createUploadDocumentsForm();
          } else {
            this.notification.error('Failed to load document list');
          }
        },
        error: () => {
          this.notification.error('Error while fetching document list');
        },
      });
  }

  createUploadDocumentsForm(): void {
    const group: { [key: string]: FormControl } = {};
    this.documentList.forEach((doc) => {
      group[doc.formControlField] = new FormControl('', Validators.required);
    });
    this.uploadDocumentsForm = this.fb.group(group);
  }

  get cdf() {
    return this.claimDetailsForm.controls;
  }

  get bdf() {
    return this.billDetailsForm.controls;
  }

  get udf() {
    return this.uploadDocumentsForm.controls;
  }

  populateMarineDropdowns(): void {
    this.spinnerService.showSpinner();

    const apiCalls = [
      this.masterService.getMarineLossType(),
      this.masterService.getMarineCauseType(),
      this.masterService.getGeographyList(),
      this.masterService.getMarinePackagingNature(),
      this.masterService.getMarineTransportByMode(),
      this.masterService.getMarineConsignmentType(),
      this.masterService.getMarineTransitMode(),
      this.masterService.getMarineVesselName(),
      this.masterService.getCountriesList(),
    ];

    forkJoin(apiCalls).subscribe({
      next: ([
        lossTypeRes,
        causeTypeRes,
        geographyRes,
        packagingRes,
        transportModeRes,
        consignmentRes,
        transitModeRes,
        vesselNameRes,
        countriesRes,
      ]) => {
        this.lossTypeList = this.mapToDropdown(lossTypeRes);
        this.causeTypeList = this.mapToDropdown(causeTypeRes);
        this.geographyList = this.mapToDropdown(geographyRes);
        this.natureOfPackagingList = this.mapToDropdown(packagingRes);
        this.transportedByModeList = this.mapToDropdown(transportModeRes);
        this.consignmentTypeList = this.mapToDropdown(consignmentRes);
        this.modeOfTransitList = this.mapToDropdown(transitModeRes);
        this.vesselNameList = this.mapToDropdown(vesselNameRes);
        this.countriesList = this.mapToDropdown(countriesRes);

        this.spinnerService.hideSpinner();
      },
      error: () => {
        this.spinnerService.hideSpinner();
        this.notification.error('Failed to load dropdown values.');
      },
    });
  }

  private mapToDropdown(response: any): DropdownItem[] {
    if (response?.status === 200 && Array.isArray(response.object)) {
      return response.object.map((item: any) => ({
        label: item.value,
        value: item.value,
        type: item.type,
        subType: item.subType,
      }));
    }
    return [];
  }

  submitClaimDetailsForm(): void {
    if (this.claimDetailsForm.invalid) {
      this.claimDetailsForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.claimDetailsForm.value,
      contractType: Constants.CONTRACT_TYPE_MARINE_CMP,
      policyNo: this.policyNo,
    };

    this.spinnerService.showSpinner();
    this.marineService.submitClaimDetails(payload).subscribe({
      next: (res) => {
        if (res?.status === 200 && res.object?.claimDetailsId) {
          this.notification.success('Claim Details submitted successfully');
          this.claimSectionSubmitted = true;
          this.claimDetailsId = res.object.claimDetailsId;
        } else {
          this.notification.error(res?.message || 'Submission failed');
        }
        this.spinnerService.hideSpinner();
      },
      error: () => {
        this.notification.error('Error submitting Claim Details');
        this.spinnerService.hideSpinner();
      },
    });
  }

  submitBillDetailsForm(): void {
    if (!this.claimSectionSubmitted) {
      this.notification.warning(
        'Please submit Claim Details before submitting Bill Details.'
      );
      return;
    }

    if (this.billDetailsForm.invalid) {
      this.billDetailsForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.billDetailsForm.value,
      claimDetailsId: this.claimDetailsId,
    };

    this.spinnerService.showSpinner();
    this.marineService.submitBillDetails(payload).subscribe({
      next: (res) => {
        if (res?.status === 200) {
          this.notification.success('Bill Details submitted successfully');
          this.billSectionSubmitted = true;
        } else {
          this.notification.error(
            res?.message || 'Bill details submission failed'
          );
        }
        this.spinnerService.hideSpinner();
      },
      error: () => {
        this.notification.error('Error submitting Bill Details');
        this.spinnerService.hideSpinner();
      },
    });
  }

  submitUploadDocumentsForm(): void {
    if (!this.claimSectionSubmitted || !this.billSectionSubmitted) {
      this.notification.warning(
        'Please submit both Claim Details and Bill Details before uploading documents.'
      );
      return;
    }

    if (this.uploadDocumentsForm.invalid) {
      this.uploadDocumentsForm.markAllAsTouched();
      return;
    }

    const documentsPayload: any[] = [];

    for (const doc of this.documentList) {
      const controlValue = this.uploadDocumentsForm.get(
        doc.formControlField
      )?.value;

      if (!controlValue || !controlValue.file) {
        this.notification.error(
          `Document ${doc.documentName} is missing or invalid`
        );
        return;
      }

      const file: File = controlValue.file;
      const reader = new FileReader();

      reader.onload = () => {
        const base64Content = (reader.result as string).split(',')[1];

        documentsPayload.push({
          claimDetailsId: this.claimDetailsId,
          claimDocumentId: doc.documentId,
          documentName: doc.documentName,
          fileType: file.type,
          fileName: file.name,
          fileBase64: base64Content,
        });

        // If all documents are processed, submit
        if (documentsPayload.length === this.documentList.length) {
          this.spinnerService.showSpinner();
          this.marineService.submitDocuments(documentsPayload).subscribe({
            next: (res) => {
              if (res?.status === 200) {
                this.notification.success('Documents uploaded successfully');
                this.uploadSectionSubmitted = true;
              } else {
                this.notification.error(res?.message || 'Upload failed');
              }
              this.spinnerService.hideSpinner();
            },
            error: () => {
              this.notification.error('Error uploading documents');
              this.spinnerService.hideSpinner();
            },
          });
        }
      };

      reader.readAsDataURL(file);
    }
  }

  viewData = {
    policyStatus: 'Approved',
    remarks: 'All documents verified and policy validated.',
  };
}
