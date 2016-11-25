import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather app';
  desc = 'Application that show weather in current city';
  collection: Collection[];

  constructor(private weatherService: WeatherService) { }
}
