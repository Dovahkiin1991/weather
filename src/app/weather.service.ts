import { Injectable } from '@angular/core';

@Injectable()
  export class WeatherService {
    api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    link = '&APPID=69c090ab8377610e780d1f3059fd34be&units=metric&cnt=7';
    today = new Date();
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    http: Http;
    collection = [];
    constructor(private http: Http) {
      this.http = http;
    }
    getWeather(): Promise<collection[]> {

      return Promise.resolve(WEATHER);
    }
    
    //serch function
      // performSearch(searchTerm: HTMLInputElement): void {
      //   var apiLink = this.api + searchTerm.value + this.link;
      //
      //     this.http.request(apiLink)
      //       .subscribe((res: Response) => {
      //         this.collection = res.json();
      //         console.log(this.collection);
      //         // function currentDay(index) {
      //           // currentDay = this.days[ this.today.getDay() ];
      //           // var currentDay = index;
      //           // return currentDay;
      //           // console.log(index);
      //         // }
      //
      //       });
      // }
}
