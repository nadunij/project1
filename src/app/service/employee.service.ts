import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${environment.url}/employee`, employee);
  }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${environment.url}/employee/${id}`);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${environment.url}/employees`);
  }
 
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.url}/employee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${environment.url}/employee/${id}`, { responseType: 'text' });
  }

  


}

