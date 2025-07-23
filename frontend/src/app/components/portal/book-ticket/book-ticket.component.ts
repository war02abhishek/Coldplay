import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConcertService } from '../../../services/concert.service';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-book-ticket',
  standalone:false,
  templateUrl: './book-ticket.component.html',
})
export class BookTicketComponent implements OnInit {
  concertId: string = '';
  concert: any;
  bookingForm!: FormGroup;
  submitting = false;
  message = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private concertService: ConcertService,
    private ticketService: TicketService,
    private router: Router
  ) {}

ngOnInit(): void {
  this.route.queryParamMap.subscribe((params) => {
    this.concertId = params.get('concertId') || '';
    console.log("Concert ID from query params:", this.concertId);
    if (this.concertId) {
      this.loadConcertDetails();
    }
  });

    // Sample logged-in user (replace with real auth later)
    const user = { username: 'john_doe', email: 'john@example.com' };

    this.bookingForm = this.fb.group({
      username: [user.username, Validators.required],
      email: [user.email, [Validators.required, Validators.email]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      paymentMode: ['UPI', Validators.required],
    });
  }

  loadConcertDetails(): void {
    this.concertService.getConcertById(this.concertId).subscribe({
      next: (res) => {
        this.concert = res.data;
      },
      error: () => {
        this.error = 'Failed to load concert details.';
      },
    });
  }

  onSubmit(): void {
    if (this.bookingForm.invalid) return;

    const payload = {
      concertId: this.concertId,
      ...this.bookingForm.value,
    };

    this.submitting = true;
    this.ticketService.bookTicket(payload).subscribe({
      next: (res) => {
        this.message = 'Booking request submitted successfully!';
        this.submitting = false;
        // Optionally redirect or clear form
      },
      error: () => {
        this.error = 'Booking failed. Please try again.';
        this.submitting = false;
      },
    });
  }
}
