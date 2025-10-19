import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class CityService {
 // private apiUrl = '/api/cities'; // proxy vers backend (http://localhost:8081/api/cities)
  private apiUrl = `${environment.apiUrl}/cities`; // utilisation de l'URL depuis environment.ts ou environment.prod.ts

  constructor(private http: HttpClient) {}

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCity(city: any): Observable<any> {
    return this.http.post(this.apiUrl, city);
  }
}
