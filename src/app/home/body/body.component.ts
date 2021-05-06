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
  specializationList: string[] = [];
  constructor(private splisting: SplistingService) {}

  ngOnInit() {
    this.splisting.getAllSpecializations().subscribe((data) => {
      this.specializationList = data;
      console.log(data);
    });
  }
}
