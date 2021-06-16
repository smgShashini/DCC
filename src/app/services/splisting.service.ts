import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SplistingService {
  constructor(private http: HttpClient) {}

  getAllSpecializations(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:5000/api/specialization');
  }

  getAllDoclist(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:5000/Doctor/');
  }

  createNewUser(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/api/User', data);
  }

  getReuestDocList(id: any): Observable<any> {
    return this.http.get('http://localhost:5000/api/Doctor/get' + String(id));
  }

  getWaitingNumber(docName: string, date: string): Observable<any> {
    return this.http.get(
      'http://localhost:5000/api/Doctor/get' + '/' + docName + '/' + date
    );
  }
}
