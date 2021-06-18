import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

import { FacilitiesComponent } from './facilities/facilities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { MemberComponent } from './team/member/member.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SplistingService } from './services/splisting.service';
import { HttpClientModule } from '@angular/common/http';
import { ChannelSuccessComponent } from './cards/channel-success/channel-success.component';
import { DatePipe } from '@angular/common';
import { ChannelFormComponent } from './forms/channel-form/channel-form.component';
import { AppointmentSuccessComponent } from './popups/appointment-success/appointment-success.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainBodyComponent } from './main-body/main-body.component';
import { LeftBodyComponent } from './left-body/left-body.component';
import { TestsComponent } from './tests/tests.component';
import { ReactiveFormsModule } from '@angular/forms';
// MDB Angular Free
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'channel-form', component: ChannelFormComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FacilitiesComponent,
    TeamComponent,
    HomeComponent,

    FormsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MemberComponent,
    HeaderComponent,
    BodyComponent,
    ChannelSuccessComponent,
    ChannelFormComponent,
    FooterComponent,
    MainBodyComponent,
    LeftBodyComponent,
    TestsComponent,
  ],
  entryComponents: [AppointmentSuccessComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
  ],
  providers: [
    SplistingService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
