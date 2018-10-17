import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import {Weather} from './weather';

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

  icons = {'01d': new Image(), a: 1}


  constructor(private http: HttpClient) { }

  getForecast() {
    return this.http.get('/assets/weather.json');
  }

  ngOnInit() {

    const sun2 = new Image();
    sun2.src = '/assets/sun2.png';

    this.getForecast().subscribe((res: Weather[]) => {
      res.forEach(y => {
        this.templist.push(y.temp);
        this.preclist.push(y.prec);
        this.datelist.push(y.time);
        this.iconlist.push(y.icon);
      });

      this.iconChart = new Chart('iconCanvas', {
        type: 'bar',
        data: {
          labels: this.datelist,
          datasets: [
            {
              data: this.iconlist,
              borderColor: '#FFFFFF',
              fill: false,
              type: 'line',
              showLine: false,
              pointStyle: sun2,
              yAxisID: 'A'
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Weather forecast for your location',
            fontcolor: '#3E4144',
            color: 'black',
            fontStyle: 'normal',
            fontSize: 20
          },
          layout: {
            padding: {
              left: 25,
              right: 25,
            }
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [
              {
                display: false,
                id: 'A',
                position: 'left'
              },
              {
                display: false,
                id: 'B',
                position: 'right'
              }],
          }
        }
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
                    max: 9,
                    stepSize: 3
                  }
                }],
            }
          }
        }
      );
    });
  }


}
