import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveUserDataToDb() {
    console.log('User data is save to data base');
  }
}
