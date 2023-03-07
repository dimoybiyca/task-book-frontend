import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTasksResponseInterface } from 'src/app/shared/types/get-tasks-response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<GetTasksResponseInterface> {
    const url = environment.apiUrl + '/tasks';

    return this.http.get<GetTasksResponseInterface>(url);
  }
}
