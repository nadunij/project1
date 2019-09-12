import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  constructor(private http: HttpClient) { }

  createSkill(skill: Object): Observable<Object> {
    return this.http.post(`${environment.url}/skill`, skill);
  }

  getSkill(skill_id: number): Observable<Object> {
    return this.http.get(`${environment.url}/skill/${skill_id}`);
  }

  getSkillsList(): Observable<any> {
    return this.http.get(`${environment.url}/skills`);
  }

  deleteSkill(skill_id: number): Observable<any> {
    return this.http.delete(`${environment.url}/skill/${skill_id}`, { responseType: 'text' });
  }

}
