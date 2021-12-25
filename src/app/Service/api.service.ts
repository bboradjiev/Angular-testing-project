import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  getWeather(long, lat) {
    return this.http
      .get<any>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=acdc2d3db2338e661cb1d27c3484514f`
      )
      .pipe(
        map((res:any) => {
           return res;
        })
      );
  }
}
