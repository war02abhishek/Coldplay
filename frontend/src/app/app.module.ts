import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { SidebarComponent } from './modules/shared/sidebar/sidebar.component';
import { SpinnerComponent } from './modules/shared/spinner/spinner.component';
import { DashboardComponent } from './components/portal/dashboard/dashboard.component';
import { HomeComponent } from './components/portal/home/home.component';
import { UserLoginComponent } from './components/portal/user-login/user-login.component';
import { FormSectionComponent } from './modules/shared/form-section/form-section.component';
import { FormSubsectionComponent } from './modules/shared/form-subsection/form-subsection.component';
import { CustomTitleCasePipe } from './pipes/title-case.pipe';
import { GenericDropdownComponent } from './modules/shared/generic-dropdown/generic-dropdown.component';
import { GenericTableComponent } from './modules/shared/generic-table/generic-table.component';
import { GenericModalComponent } from './modules/shared/generic-modal/generic-modal.component';
import { TabsContainerComponent } from './modules/shared/tabs-container/tabs-container.component';
import { TabElementComponent } from './modules/shared/tab-element/tab-element.component';
import { ChangePasswordComponent } from './components/portal/change-password/change-password.component';
import { CreateUserComponent } from './components/portal/create-user/create-user.component';
import { PolicyMappingComponent } from './components/portal/policy-mapping/policy-mapping.component';
import { InitiateClaimComponent } from './components/portal/initiate-claim/initiate-claim.component';
import { ViewClaimComponent } from './components/portal/view-claim/view-claim.component';
import { ClaimsReportComponent } from './components/portal/claims-report/claims-report.component';
import { TestUiComponent } from './components/portal/test-ui/test-ui.component';
import { MarineClaimViewComponent } from './components/marine/marine-claim-view/marine-claim-view.component';
import { MarineClaimIntimateComponent } from './components/marine/marine-claim-initiate/marine-claim-initiate.component';
import { MarineClaimReportComponent } from './components/marine/marine-claim-report/marine-claim-report.component';
import { ViewAuditTrailComponent } from './components/portal/view-audit-trail/view-audit-trail.component';
import { PrivilegeMappingComponent } from './components/portal/privilege-mapping/privilege-mapping.component';
import { ListOfClaimsComponent } from './components/portal/list-of-claims/list-of-claims.component';
import { PasswordToggleButtonComponent } from './modules/shared/password-toggle-button/password-toggle-button.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ResetPasswordComponent } from './components/portal/reset-password/reset-password.component';
import { GenericAuthLayoutComponent } from './modules/shared/generic-auth-layout/generic-auth-layout.component';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [
    // Common Components
    AppComponent,
    DashboardComponent,
    HomeComponent,
    UserLoginComponent,
    ResetPasswordComponent,
    TestUiComponent,

    // Reusable Components
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    FormSectionComponent,
    FormSubsectionComponent,
    GenericAuthLayoutComponent,
    GenericDropdownComponent,
    GenericTableComponent,
    GenericModalComponent,
    TabsContainerComponent,
    TabElementComponent,
    PasswordToggleButtonComponent,

    // Pipes
    CustomTitleCasePipe,

    // Portal Components
    ChangePasswordComponent,
    CreateUserComponent,
    PrivilegeMappingComponent,
    PolicyMappingComponent,
    InitiateClaimComponent,
    ViewClaimComponent,
    ClaimsReportComponent,
    ListOfClaimsComponent,
    ViewAuditTrailComponent,

    // Marine Components
    MarineClaimIntimateComponent,
    MarineClaimViewComponent,
    MarineClaimReportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    NgSelectModule,
    NgxPaginationModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
