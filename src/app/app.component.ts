import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather app';
  desc = 'Application that show weather in current city';
  city = 'Poltava';
  api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
  link = '&APPID=69c090ab8377610e780d1f3059fd34be&units=metric&cnt=7';
  today = new Date();
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  http: Http;
  collection = [];
  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.api + searchTerm.value + this.link;

      this.http.request(apiLink)
        .subscribe((res: Response) => {
          this.collection = res.json();
          console.log(this.collection);
          // function currentDay(index) {
            // currentDay = this.days[ this.today.getDay() ];
            // var currentDay = index;
            // return currentDay;
            // console.log(index);
          // }

        });
  }

}
