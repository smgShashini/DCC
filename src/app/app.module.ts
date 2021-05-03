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

import { FormsComponent } from './forms/forms.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { MemberComponent } from './team/member/member.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
