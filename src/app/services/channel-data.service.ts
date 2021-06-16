import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelDataService {
  // For channel details
  private channeldetailSource = new BehaviorSubject(null);
  currenChanneltDetails = this.channeldetailSource.asObservable();
  subscription: any;

  constructor() {}

  changeChannelDetails(dataSet: any) {
    this.channeldetailSource.next(dataSet);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
