import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChannelDataService } from 'src/app/services/channel-data.service';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SplistingService } from 'src/app/services/splisting.service';

@Component({
  selector: 'app-appointment-success',
  templateUrl: './appointment-success.component.html',
  styleUrls: ['./appointment-success.component.css'],
})
export class AppointmentSuccessComponent implements OnInit, OnDestroy {
  subscription: any;
  ruser: any;
  rchannel: any;
  waiting!: number;
  newWait!: number;

  constructor(
    private dataTransfer1: ChannelDataService,
    private dt: DatatransferService,
    public dialog: MatDialog,
    private router: Router,
    private splisting: SplistingService
  ) {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dataTransfer1.currenChanneltDetails.subscribe(
      (data) => (this.rchannel = data)
    );

    this.subscription = this.dt.currenUsertDetails.subscribe(
      (data2) => (this.ruser = data2)
    );
    this.calWaitingNumber();
  }

  //
  calWaitingNumber() {
    this.splisting
      .getWaitingNumber(this.rchannel.doc, this.rchannel.date)
      .subscribe((data) => {
        this.waiting = data;
      });
    this.newWait = this.waiting + 1;
  }

  gotData() {
    console.log('Received data');
    console.log(this.rchannel);
    console.log(this.ruser);
  }

  onClick() {
    this.dialog.closeAll();
    this.router.navigate(['/home']);
    const user = {
      Name: this.ruser.userName,
      Phone: this.ruser.phoneNumber,
      DocName: this.rchannel.doc,
      AppointmentDate: this.rchannel.date,
    };
    console.log('Final data set ');
    console.log(user);

    // Save user details to database
    this.splisting.createNewUser(user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
