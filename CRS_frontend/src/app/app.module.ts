import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { EngineerLoginComponent } from './components/engineer-login/engineer-login.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewEngineersComponent } from './components/view-engineers/view-engineers.component';
import { ViewManagersComponent } from './components/view-managers/view-managers.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ViewComplaintsComponent } from './components/view-complaints/view-complaints.component';
import { ViewFeedbacksComponent } from './components/view-feedbacks/view-feedbacks.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AddEngineerComponent } from './components/add-engineer/add-engineer.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { EngineerDashboardComponent } from './components/engineer-dashboard/engineer-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerComplaintStatusComponent } from './components/customer-complaint-status/customer-complaint-status.component';

const routers: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'manager-login', component: ManagerLoginComponent },
  { path: 'engineer-login', component: EngineerLoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin-dashboard',component: AdminDashboardComponent },
  { path: 'admin-view-engineers', component: ViewEngineersComponent },
  { path: 'admin-view-managers', component: ViewManagersComponent },
  { path: 'admin-view-customers', component: ViewCustomersComponent },
  { path: 'admin-view-complaints', component: ViewComplaintsComponent },
  { path: 'admin-view-feedbacks', component: ViewFeedbacksComponent },
  { path: 'admin-add-engineer', component: AddEngineerComponent },
  { path: 'admin-add-Manager', component: AddManagerComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'engineer-dashboard', component: EngineerDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'customer-complaint-status', component: CustomerComplaintStatusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ManagerLoginComponent,
    EngineerLoginComponent,
    CustomerLoginComponent,
    AdminDashboardComponent,
    ViewComplaintsComponent,
    ViewCustomersComponent,
    ViewEngineersComponent,
    ViewManagersComponent,
    ViewFeedbacksComponent,
    AddManagerComponent,
    AddEngineerComponent,
    ManagerDashboardComponent,
    EngineerDashboardComponent,
    CustomerDashboardComponent,
    CustomerComplaintStatusComponent,
    AddEngineerComponent,
    AddManagerComponent,
    ManagerDashboardComponent,
    EngineerDashboardComponent,
    CustomerDashboardComponent,
    CustomerComplaintStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
