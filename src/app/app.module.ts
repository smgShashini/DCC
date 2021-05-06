import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { MemberComponent } from './team/member/member.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SplistingService } from './services/splisting.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    SplistingService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
