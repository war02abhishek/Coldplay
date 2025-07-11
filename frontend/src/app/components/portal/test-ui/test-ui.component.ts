import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-test-ui',
  standalone: false,
  templateUrl: './test-ui.component.html',
  styleUrl: './test-ui.component.css',
})
export class TestUiComponent {
  isOpen = false;
  sectionExpanded = true;
  showModal = false;

  vehicleTypes = [
    { label: 'YES', value: 'Y' },
    { label: 'NO', value: 'N' },
  ];

  tableColumns = [
    { title: 'Name', key: 'name' },
    { title: 'Email', key: 'email' },
    { title: 'Action', key: 'action' },
  ];

  tableData = [
    {
      name: 'Sahil Yadav',
      email: 'sahil@example.com',
      action: {
        label: 'View',
        onClick: () => this.viewUser('sahil@example.com'),
      },
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      action: {
        label: 'View',
        onClick: () => this.viewUser('john@example.com'),
      },
    },
  ];

  viewUser(email: string) {
    console.log('Viewing user:', email);
  }

  openModal() {
    this.showModal = true;
  }

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    // this.spinnerService.showSpinner();
  }
}
