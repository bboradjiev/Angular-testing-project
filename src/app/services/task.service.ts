import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
  deleteTaskService(id) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }
  updateTaskService(task) {
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task, httpOptions);
  }
}
