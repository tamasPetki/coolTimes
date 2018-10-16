import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import {Weather} from './weather';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  templist = [];
  datelist = [];
  chart = [];

  constructor(private http: HttpClient) { }

  getForecast() {
    return this.http.get('/assets/weather.json');
  }

  ngOnInit() {
    this.getForecast().subscribe((res: Weather[]) => {
      res.forEach(y => {
        console.log(y.temp);
        this.templist.push(y.temp);
        this.datelist.push(y.time);
      });
      console.log(this.templist);
      this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.datelist,
            datasets: [
              {
                data: this.templist,
                borderColor: '#F71735',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        }
      );
    });
  }


}
