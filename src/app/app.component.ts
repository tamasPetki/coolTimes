import { Component, OnInit} from '@angular/core';
import {RetrieverService} from './retriever.service';
import {News} from './news';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CoolTimes';
  news: News[];
  actualWeather: object;
  showWeather = false;
  nameDay: string;

  toggleWeather() {
    this.showWeather = !this.showWeather;
    console.log(this.actualWeather);
  }


  constructor(private retriever: RetrieverService) {}

  ngOnInit() {
    // this.retriever.getNewsObservable().subscribe((news) => this.news = news);
    this.retriever.getActualWeatherObservable().subscribe((weather) => this.actualWeather = weather);
    this.retriever.getNameDayObservable().subscribe((name) => this.nameDay = name);
  }
}
