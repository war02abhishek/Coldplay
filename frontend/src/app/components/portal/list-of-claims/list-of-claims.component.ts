import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../../../services/claim.service';
import { JwtService } from '../../../services/jwt.service';
import { NotificationService } from '../../../services/notification.service';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-list-of-claims',
  standalone: false,
  templateUrl: './list-of-claims.component.html',
  styleUrl: './list-of-claims.component.css',
})
export class ListOfClaimsComponent implements OnInit {
  claimTableColumns = [
    { title: 'S No', key: 'sno' },
    { title: 'Claim Details ID', key: 'claimDetailsId' },
    { title: 'ITGI Claim No', key: 'itgiClaimNo' },
    { title: 'Contract Type', key: 'contractType' },
    { title: 'Policy No', key: 'policyNo' },
    { title: 'Initiated By', key: 'initiatedBy' },
    { title: 'Reported Date', key: 'reportedDate' },
    { title: 'L2 Status', key: 'l2Status' },
    { title: 'CRM Claim Status', key: 'crmClaimStatus' },
    { title: 'Action', key: 'action' },
  ];

  claimTableData: any[] = [];

  constructor(
    private router: Router,
    private claimService: ClaimService,
    private jwtService: JwtService,
    private spinnerService: SpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.fetchListOfClaims();
  }

  async fetchListOfClaims() {
    this.spinnerService.showSpinner();
    const roleId = await this.jwtService.getRoleId();

    this.claimService.getListOfClaims().subscribe({
      next: (res) => {
        if (res?.status === 200 && Array.isArray(res.object)) {
          this.claimTableData = res.object.map((row: any, index: number) => {
            const isReturned = row.l2Status === 'RETURNED';
            const showUpdate = roleId === 'L1' && isReturned;

            return {
              ...row,
              sno: index + 1,
              action: {
                label: showUpdate ? 'UPDATE' : 'VIEW',
                onClick: () => {
                  if (showUpdate) {
                    this.router.navigate(['/dashboard/initiate-claim'], {
                      queryParams: {
                        policyNo: row.policyNo,
                        claimDetailsId: row.claimDetailsId,
                      },
                    });
                  } else {
                    this.router.navigate(['/dashboard/view-claim'], {
                      queryParams: {
                        claimDetailsId: row.claimDetailsId,
                        contractType: row.contractType,
                      },
                    });
                  }
                },
              },
            };
          });
        } else {
          this.notification.warning(res?.message || 'No claims found.');
        }
        this.spinnerService.hideSpinner();
      },
      error: () => {
        this.notification.error('Failed to load claims list');
        this.spinnerService.hideSpinner();
      },
    });
  }
}
