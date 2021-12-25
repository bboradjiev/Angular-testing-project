import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { APIService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  longitude;
  latitude;
  weatherData;
  isLoading = false;
  constructor(private apiService: APIService, private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.onClick();
      this.isLoading = !this.isLoading;
    }, 500);
  }

  onClick() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.longitude = location.coords.longitude.toFixed();
      this.latitude = location.coords.latitude.toFixed();

      this.http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=acdc2d3db2338e661cb1d27c3484514f`
        )
        .pipe(
          map((res) => {
            return res;
          })
        )
        .subscribe((data) => (this.weatherData = data));
      console.log(this.weatherData);
    });
  }
}
