import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-marine-claim-report',
  standalone: false,
  templateUrl: './marine-claim-report.component.html',
  styleUrl: './marine-claim-report.component.css',
})
export class MarineClaimReportComponent {
  snapshotData: any = []; // initially empty
  showSnapshot = false;
  selectedUser = '';

  aggregateColumns = [
    { title: 'S No', key: 'sno' },
    { title: 'Claim User', key: 'user' },
    { title: 'Reported', key: 'reported' },
    { title: 'Closed', key: 'closed' },
    { title: 'In Progress', key: 'inProgress' },
    { title: 'Total Amount Paid', key: 'totalPaid' },
    { title: 'Claim Snapshot', key: 'action' },
  ];

  aggregateData = [
    {
      sno: 1,
      user: 'A',
      reported: 10,
      closed: 6,
      inProgress: 4,
      totalPaid: '₹1,00,000',
    },
    {
      sno: 2,
      user: 'B',
      reported: 8,
      closed: 5,
      inProgress: 3,
      totalPaid: '₹75,000',
    },
    {
      sno: 3,
      user: 'C',
      reported: 12,
      closed: 9,
      inProgress: 3,
      totalPaid: '₹1,25,000',
    },
  ];

  constructor(private notification: NotificationService) {}

  ngOnInit() {
    this.aggregateData = this.aggregateData.map((item) => ({
      ...item,
      action: {
        label: 'View',
        onClick: () => this.loadSnapshot(item.user),
      },
    }));
  }

  snapshotColumns = [
    { title: 'S No', key: 'sno' },
    { title: 'Insured Claim No', key: 'insuredClaimNo' },
    { title: 'ITGI Claim No', key: 'itgiClaimNo' },
    { title: 'Insured Name', key: 'insuredName' },
    { title: 'Dealer Name', key: 'dealerName' },
    { title: 'Date of Loss', key: 'dateOfLoss' },
    { title: 'Description', key: 'description' },
    { title: 'Surveyor Name', key: 'surveyor' },
    { title: 'Paid Amount', key: 'paidAmount' },
    { title: 'Claim Status', key: 'status' },
    { title: 'NEFT Date', key: 'neftDate' },
    { title: 'NEFT Number', key: 'neftNo' },
  ];

  loadSnapshot(user: string) {
    this.selectedUser = user;
    this.showSnapshot = true;

    // Simulate backend call for snapshot
    this.snapshotData = [
      {
        sno: 1,
        insuredClaimNo: 'ICN12345',
        itgiClaimNo: 'ITGI98765',
        insuredName: 'Rahul Sharma',
        dealerName: 'AutoZone Pvt Ltd',
        dateOfLoss: '10-06-2025',
        description: 'Front bumper damage',
        surveyor: 'ABC Surveyors',
        paidAmount: '₹15,000',
        status: 'Closed',
        neftDate: '15-06-2025',
        neftNo: 'NEFT00112233',
      },
      {
        sno: 2,
        insuredClaimNo: 'ICN67890',
        itgiClaimNo: 'ITGI54321',
        insuredName: 'Priya Mehra',
        dealerName: 'SpeedMotors Ltd',
        dateOfLoss: '05-06-2025',
        description: 'Engine failure due to waterlogging',
        surveyor: 'XYZ Surveyors',
        paidAmount: '₹50,000',
        status: 'In Progress',
        neftDate: '',
        neftNo: '',
      },
    ];
  }

  syncPolicyData() {
    this.notification.success('Policy Data has been synced!');
  }
}
