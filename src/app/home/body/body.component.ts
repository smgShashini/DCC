import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { SplistingService } from 'src/app/services/splisting.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  option: String = '';

  specializationList: any[] = [];
  docList: any[] = [];
  filteredDocList: any[] = [];

  constructor(private splisting: SplistingService) {}

  ngOnInit() {
    this.splisting.getAllSpecializations().subscribe((data) => {
      this.specializationList = data;
      console.log(data);
    });
  }

  // Method to display search doc list
  displayAvailableDocList() {
    this.splisting.getAllDoclist().subscribe((data) => {
      this.docList = data;
      this.filterDoc(this.docList);
    });
  }
  selectChangeHandler(event: any) {
    this.option = event.target.value;
  }

  filterDoc(arr: any[]) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].spId == this.option) {
        this.filteredDocList.push(arr[i]);
        console.log(arr[i].name);
      }
    }
  }
}
