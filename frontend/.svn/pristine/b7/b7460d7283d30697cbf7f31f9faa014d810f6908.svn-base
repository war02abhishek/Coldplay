import { Routes } from '@angular/router';
import { UserLoginComponent } from './components/portal/user-login/user-login.component';
import { DashboardComponent } from './components/portal/dashboard/dashboard.component';
import { HomeComponent } from './components/portal/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './components/portal/change-password/change-password.component';
import { CreateUserComponent } from './components/portal/create-user/create-user.component';
import { PolicyMappingComponent } from './components/portal/policy-mapping/policy-mapping.component';
import { InitiateClaimComponent } from './components/portal/initiate-claim/initiate-claim.component';
import { ViewClaimComponent } from './components/portal/view-claim/view-claim.component';
import { ClaimsReportComponent } from './components/portal/claims-report/claims-report.component';
import { TestUiComponent } from './components/portal/test-ui/test-ui.component';
import { PrivilegeMappingComponent } from './components/portal/privilege-mapping/privilege-mapping.component';
import { ViewAuditTrailComponent } from './components/portal/view-audit-trail/view-audit-trail.component';
import { ListOfClaimsComponent } from './components/portal/list-of-claims/list-of-claims.component';
import { LoginGuard } from './guards/login.guard';
import { ResetPasswordComponent } from './components/portal/reset-password/reset-password.component';

export const routes: Routes = [
  { path: 'login', component: UserLoginComponent, canActivate: [LoginGuard] },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'test-ui',
        component: TestUiComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'privilege-mapping',
        component: PrivilegeMappingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'policy-mapping',
        component: PolicyMappingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'initiate-claim',
        component: InitiateClaimComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view-claim',
        component: ViewClaimComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'claims-report',
        component: ClaimsReportComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'list-of-claims',
        component: ListOfClaimsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view-audit-trail',
        component: ViewAuditTrailComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  // Matches any path not matched by previous routes
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
