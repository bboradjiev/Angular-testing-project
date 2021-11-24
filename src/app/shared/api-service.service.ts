import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postEmployee(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmployee(data: any) {
    return this.http
      .delete<any>('http://localhost:3000/posts/' + data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateEmployee(data: any, id: number) {
    return this.http.put<any>(`http://localhost:3000/posts/${id+1}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
