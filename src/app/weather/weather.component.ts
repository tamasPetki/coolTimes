import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import {Weather} from './weather';
import {RetrieverService} from '../retriever.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  templist = [];
  datelist = [];
  preclist = [];
  iconlist = [];
  iconChart = [];
  dataChart = [];


  constructor(private http: HttpClient, private retriever: RetrieverService) { }

  getForecast() {
    // return this.http.get('/assets/weather.json');

    // this.retriever.getActualWeatherObservable().subscribe((weather) => this.actualWeather = weather);
    return this.retriever.getForecastObservable();
  }

  ngOnInit() {

    this.getForecast().subscribe((res: Weather[]) => {
      res.forEach(y => {
        this.templist.push(y.temp);
        this.preclist.push(y.prec);
        this.datelist.push(y.time);
        this.iconlist.push(y.icon);
      });

      this.dataChart = new Chart('dataCanvas', {
          type: 'bar',
          data: {
            labels: this.datelist,
            datasets: [
              {
                data: this.templist,
                borderColor: '#F71735',
                borderWidth: 1.5,
                fill: false,
                type: 'line',
                yAxisID: 'A'
              },
              {
                data: this.preclist,
                borderColor: '#0099cc',
                backgroundColor: '#0099cc',
                fill: false,
                yAxisID: 'B'
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
              yAxes: [
                {
                  display: true,
                  id: 'A',
                  position: 'left',
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 30
                  }
                },
                {
                  display: true,
                  id: 'B',
                  position: 'right',
                  ticks: {
                    min: 0,
                    suggestedMax: 3
                  }
                }],
            }
          }
        }
      );
    });
  }


}
