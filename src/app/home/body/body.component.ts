import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { SplistingService } from 'src/app/services/splisting.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { ChannelDataService } from 'src/app/services/channel-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  displayTable = false; // Store status of visibility of doctor table
  option: String = ''; //Store  selected specialization id
  events: string[] = [];

  specializationList: any[] = []; //List to store specialization list from web api
  docList: any[] = []; //List to store doctor list from web api
  filteredDocList: any[] = []; // List to store filtered doctor list according to spid
  appointmentDate: any;
  requestedDoc: String = ''; //Store requested doctor name
  appointmentDatr: String = '';

  channelDetails: any;
  subscription: any;
  userData = {
    Name: 'KHM Anulawathi',
    Phone: '0710187212',
    DocName: 'requested dov name',
    AppointmentDate: 'reqDate',
  };

  constructor(
    private splisting: SplistingService,
    public datepipe: DatePipe,
    private dataTransfer: ChannelDataService
  ) {}

  // Get doc list from web api
  ngOnInit() {
    this.splisting.getAllSpecializations().subscribe((data) => {
      this.specializationList = data;
      console.log(data);
    });

    // For set initial sending data
    this.subscription = this.dataTransfer.currenChanneltDetails.subscribe(
      (data) => (this.channelDetails = data)
    );
  }

  // Method to display search doc list
  displayAvailableDocList() {
    this.splisting.getAllDoclist().subscribe((data) => {
      this.docList = data;
      this.filterDoc(this.docList);
    });
    this.displayTable = true;
  }

  //Event handling of drop down list
  selectChangeHandler(event: any) {
    this.option = event.target.value;
    this.displayTable = false;
    this.filteredDocList = [];
  }

  // Method to filter doc list according to spid
  filterDoc(arr: any[]) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].spId == this.option) {
        this.filteredDocList.push(arr[i]);
        console.log(arr[i].name);
      }
    }
  }

  // Method to make actions need for channel the doctor
  channelDocActions(doc: String) {
    this.requestedDoc = doc; //Assign doc name
    this.appointmentDate = String(
      this.datepipe.transform(this.events[0], 'yyyy-MM-dd')
    ); //Assign date
    const sendChannelDetails = {
      doc: this.requestedDoc,
      date: this.appointmentDate,
    };
    this.dataTransfer.changeChannelDetails(sendChannelDetails);
    console.log('Sending data from body component');
    console.log(sendChannelDetails);
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  //Method to save data into User Table
  saveDataTodb(datauser: any) {
    this.splisting.createNewUser(this.userData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Send data to appointment Component
  sentDetail() {
    const sendChannelDetails = {};

    console.log(sendChannelDetails);
  }
}
