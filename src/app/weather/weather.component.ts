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
  dataChart;
  cities = [
    {id: 1, name: 'Budapest'},
    {id: 2, name: 'London'},
    {id: 3, name: 'Paris'},
    {id: 4, name: 'Madrid'},
    {id: 5, name: 'Moscow'}
  ];
  selectedValue = 'Budapest';

  constructor(private http: HttpClient, private retriever: RetrieverService) { }

  getForecast() {
    // return this.http.get('/assets/weather.json');

    // this.retriever.getActualWeatherObservable().subscribe((weather) => this.actualWeather = weather);
    return this.retriever.getForecastObservable(this.selectedValue);
  }

  ngOnInit() {

    this.templist = [];
    this.preclist = [];
    this.datelist = [];
    this.iconlist = [];

    this.getForecast().subscribe((res: Weather[]) => {
      res.forEach(y => {
        this.templist.push(y.temp);
        this.preclist.push(y.prec);
        this.datelist.push(y.time);
        this.iconlist.push(y.icon);
      });

      if (this.dataChart) { this.dataChart.destroy(); }
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
                yAxisID: 'B',
                datalabels: {
                  align: 'center',
                  anchor: 'center'
                }
              }
            ]
          },
          options: {

            tooltips: {
              enabled: true
            },
            hover: {
              animationDuration: 1
            },
            animation: {
              duration: 1,
              onComplete: function () {
                const chartInstance = this.chart,
                  ctx = chartInstance.ctx;
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(0, 0, 0, 1)';
                ctx.textBaseline = 'bottom';

                const dataset = this.data.datasets[0];
                const meta = chartInstance.controller.getDatasetMeta(0);
                meta.data.forEach(function (bar, index) {
                  const data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              }
            },


            plugins: {
              datalabels: {
                color: 'white',
                display: function(context) {
                  return context.dataset.data[context.dataIndex] > 0;
                },
                font: {
                  weight: 'bold'
                },
                formatter: Math.round,

                title: false
              }
            },
            legend: {
              display: false
            },
            pieceLabel: {
              render: 'value' //show values
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

          }}
        );

    });
  }


}
