import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AppointmentSuccessComponent } from 'src/app/popups/appointment-success/appointment-success.component';
import { DatatransferService } from 'src/app/services/datatransfer.service';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.css'],
})
export class ChannelFormComponent implements OnInit {
  userForm!: FormGroup;

  userDetails: any;
  subscription: any;

  constructor(
    public dialog: MatDialog,
    private dataTransfer: DatatransferService
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
    });

    this.subscription = this.dataTransfer.currenUsertDetails.subscribe(
      (data) => (this.userDetails = data)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentSuccessComponent);
  }

  onSubmit() {
    this.dataTransfer.changeUserDetails(this.userForm.value);
    console.log('sending value from channel form');
    console.log(this.userForm.value);
  }

  // Send user objrct
}
