import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherAppComponent } from './Components/weather-app/weather-app.component';
  
@NgModule({
  declarations: [AppComponent, WeatherAppComponent,],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}
