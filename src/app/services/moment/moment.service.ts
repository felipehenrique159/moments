import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from 'src/app/interfaces/Moments';
import { Response } from 'src/app/interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private apiUrl = 'http://localhost:3333/api/moments'

  constructor(private http: HttpClient) { }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  getMoment(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl)
  }

}
