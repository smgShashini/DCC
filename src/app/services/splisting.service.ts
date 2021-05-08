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
    return this.http.get<string[]>('http://localhost:5000/api/Doctor/');
  }
}
