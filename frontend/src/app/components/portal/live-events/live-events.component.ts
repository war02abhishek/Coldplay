import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../../../services/concert.service';

@Component({
  selector: 'app-live-events',
  standalone:false,
  templateUrl: './live-events.component.html',
})
export class LiveEventsComponent implements OnInit {
  concerts: any[] = [];
  loading = true;
  error = '';

  constructor(
    private concertService: ConcertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.concertService.getAllConcerts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.concerts = res.data.filter((c: any) => c.status === 'ACTIVE');
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load concerts.';
        this.loading = false;
      },
    });
  }

  bookTicket(concertId: string): void {
    console.log("Naviaget ",concertId);
    // this.router.navigate(['/book-ticket', concertId]);
    this.router.navigate(['/dashboard/book-ticket'], { queryParams: { concertId: concertId, ref: 'ui' } });


  }
}
