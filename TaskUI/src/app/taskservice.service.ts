import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  readonly apiUrl = 'http://localhost:50306/api/';
  constructor(private readonly httpClient: HttpClient) { }

  
   fetch(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiUrl + "/task/GetTaskdetails");
  }

  delete(name: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.apiUrl}/task/DeleteTask/${name}`);
  }

  create(tsk: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "/task/CreateTask/", tsk);
  }

  update(tsk: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "/task/UpdateTask/", tsk);
  }

}
