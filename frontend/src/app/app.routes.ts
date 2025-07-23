import { Routes } from '@angular/router';
import { UserLoginComponent } from './components/portal/user-login/user-login.component';
import { DashboardComponent } from './components/portal/dashboard/dashboard.component';
import { HomeComponent } from './components/portal/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LiveEventsComponent } from './components/portal/live-events/live-events.component';
import { BookTicketComponent } from './components/portal/book-ticket/book-ticket.component';


export const routes: Routes = [
  { path: 'login', component: UserLoginComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [],
      },
      {
        path: 'events',
        component: LiveEventsComponent,
        // canActivate: [],
      },
      {
        path: 'book-ticket',
        component: BookTicketComponent,
        // canActivate: [],
      }
    ],
  },

  // Matches any path not matched by previous routes
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
