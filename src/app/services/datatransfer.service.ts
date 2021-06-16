import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatatransferService {
  subscription: any;

  //For user details
  private userdetailSource = new BehaviorSubject(null);
  currenUsertDetails = this.userdetailSource.asObservable();

  constructor() {}

  // Change channel details

  // Change user details
  changeUserDetails(dataSet: any) {
    this.userdetailSource.next(dataSet);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
